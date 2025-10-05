# 🔧 Deep Link Troubleshooting - App Installed But Not Opening

## ❌ Your Current Problem

**Symptoms:**

- App IS installed on your phone
- Click the share link → Shows "Download App" page
- Click "Open App" button → Still shows download page or goes to Play Store
- App never opens

**Root Cause:** The app's deep link configuration is not set up correctly, OR the deep link scheme doesn't match.

---

## ✅ Step-by-Step Fix

### Step 1: Verify Your App's Package Name

In your React Native project, check:

**File:** `android/app/build.gradle`

```gradle
defaultConfig {
    applicationId "com.manifestom.app"  // ← This is your package name
    // ...
}
```

**IMPORTANT:** Update `reel.html` with the EXACT package name:

```javascript
playStoreUrl: 'https://play.google.com/store/apps/details?id=com.manifestom.app',
//                                                             ^^^^^^^^^^^^^^^^^^^
//                                                             Must match exactly!
```

---

### Step 2: Check AndroidManifest.xml Deep Link Configuration

**File:** `android/app/src/main/AndroidManifest.xml`

Look for this section in your `<activity>` tag:

```xml
<activity
    android:name=".MainActivity"
    android:launchMode="singleTask"
    android:configChanges="keyboard|keyboardHidden|orientation|screenSize|uiMode">

    <!-- Your existing intent-filter for LAUNCHER -->
    <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>

    <!-- ⚠️ ADD THIS IF MISSING ⚠️ -->
    <intent-filter android:label="manifestation">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />

        <data android:scheme="manifestation" />
    </intent-filter>

</activity>
```

**Key Points:**

- ✅ `android:scheme="manifestation"` - This MUST match the scheme in your URL
- ✅ `android:launchMode="singleTask"` - Prevents multiple instances
- ✅ Intent filter must be INSIDE the `<activity>` tag, not outside

---

### Step 3: Test the Deep Link Directly

Use ADB to test if your app responds to the deep link:

```bash
# First, make sure your phone is connected
adb devices

# Try to open your app with the deep link
adb shell am start -W -a android.intent.action.VIEW \
  -d "manifestation://reel/test123" \
  com.manifestom.app

# Expected output:
# Status: ok
# Activity: com.manifestom.app/.MainActivity
```

**If you get an error:**

- ❌ "Error: Activity not started, unable to resolve Intent"
  → Deep link is NOT configured in AndroidManifest.xml
- ❌ "Error: Activity class {...} does not exist"
  → Package name is wrong

**If it works:**

- ✅ App should open immediately
- ✅ Check your app's console logs

---

### Step 4: Add Deep Link Handler in Your App

**File:** `App.js` or your main component

```javascript
import React, { useEffect } from 'react';
import { Linking, Alert } from 'react-native';

function App() {
  useEffect(() => {
    // Handle app opened from closed state
    Linking.getInitialURL().then(url => {
      if (url) {
        console.log('📱 App opened with URL:', url);
        handleDeepLink(url);
      }
    });

    // Handle app opened while running
    const subscription = Linking.addEventListener('url', ({ url }) => {
      console.log('📱 Deep link received:', url);
      handleDeepLink(url);
    });

    return () => subscription.remove();
  }, []);

  function handleDeepLink(url) {
    console.log('🔗 Handling deep link:', url);

    // Show alert to verify it's working
    Alert.alert('Deep Link Received!', `URL: ${url}`);

    // Extract video ID
    // Example: "manifestation://reel/test123" → "test123"
    const match = url.match(/reel\/([^/?#]+)/);
    if (match) {
      const videoId = match[1];
      console.log('🎥 Video ID:', videoId);

      // TODO: Navigate to your video player screen
      // navigation.navigate('VideoPlayer', { videoId });

      Alert.alert('Video ID Found!', `Loading video: ${videoId}`);
    }
  }

  return (
    // Your app content
  );
}
```

**Test Steps:**

1. Add this code to your app
2. Rebuild: `cd android && ./gradlew clean && cd .. && npx react-native run-android`
3. Open the app manually
4. In terminal, run: `adb shell am start -W -a android.intent.action.VIEW -d "manifestation://reel/test123" com.manifestom.app`
5. You should see an alert: "Deep Link Received!"

---

### Step 5: Rebuild Your App

After making changes to AndroidManifest.xml, you MUST rebuild:

```bash
# Clean build
cd android
./gradlew clean
cd ..

# Rebuild and install
npx react-native run-android

# Or if using release build
cd android
./gradlew assembleRelease
```

**Why?** AndroidManifest.xml changes require a full rebuild to take effect.

---

### Step 6: Test the Full Flow

1. **Deploy your website:**

   ```bash
   bun run build
   git add .
   git commit -m "Fix deep linking detection"
   git push
   ```

2. **Wait for Netlify to deploy** (check https://app.netlify.com)

3. **Test on your phone:**

   - Open: `https://manifestdream.site/quick-test.html`
   - Click "Test Direct Deep Link"
   - Should open your app!

4. **Test the share flow:**
   - Open: `https://manifestdream.site/reel/test123`
   - Should automatically try to open app
   - If app installed → Opens app
   - If not → Shows download options

---

## 🐛 Still Not Working? Debug Checklist

### Android App Issues

- [ ] AndroidManifest.xml has the intent-filter (inside `<activity>`)
- [ ] Scheme is exactly "manifestation" (lowercase, no typos)
- [ ] Package name matches: `com.manifestom.app`
- [ ] App was rebuilt after AndroidManifest.xml changes
- [ ] Deep link handler is in App.js with console.logs
- [ ] Tested with ADB command successfully

### Website Issues

- [ ] reel.html is deployed to manifestdream.site
- [ ] Can access: https://manifestdream.site/reel.html
- [ ] Browser console shows no errors (F12 → Console)
- [ ] CONFIG.playStoreUrl matches your app's package name

### Testing Issues

- [ ] Testing on a REAL Android device (not emulator)
- [ ] App is actually installed (check app drawer)
- [ ] Using Chrome or default browser (not in-app browser)
- [ ] Not testing in Instagram/Facebook in-app browser

---

## 📱 Quick Test Commands

```bash
# Check if app is installed
adb shell pm list packages | grep manifestom

# Test deep link directly
adb shell am start -W -a android.intent.action.VIEW -d "manifestation://reel/test123" com.manifestom.app

# Check app logs
adb logcat | grep -i manifestation

# Clear app data and test fresh
adb shell pm clear com.manifestom.app
```

---

## 🎯 Expected vs Actual Behavior

### ✅ EXPECTED (What Should Happen):

1. User clicks: `https://manifestdream.site/reel/abc123`
2. Browser opens the link
3. JavaScript tries: `manifestation://reel/abc123`
4. Android sees the scheme "manifestation://"
5. Android checks: "Which app handles 'manifestation://'?"
6. Finds your app (from AndroidManifest.xml)
7. Opens your app
8. Your app's Linking.addEventListener catches it
9. App navigates to video screen

### ❌ ACTUAL (What's Happening Now):

1. User clicks: `https://manifestdream.site/reel/abc123`
2. Browser opens the link
3. JavaScript tries: `manifestation://reel/abc123`
4. Android sees the scheme "manifestation://"
5. Android checks: "Which app handles 'manifestation://'?"
6. **❌ NO APP FOUND** (AndroidManifest.xml missing or wrong)
7. Browser stays on page
8. Page shows "Download App" message

---

## 💡 The Fix (Summary)

1. **Add intent-filter to AndroidManifest.xml**
2. **Rebuild your Android app**
3. **Add deep link handler in App.js**
4. **Test with ADB command**
5. **Deploy updated website**
6. **Test on phone**

---

## 📞 Need More Help?

Run this command and send me the output:

```bash
# Check your AndroidManifest.xml
cat android/app/src/main/AndroidManifest.xml | grep -A 10 "intent-filter"
```

This will show me if the intent-filter is configured correctly!
