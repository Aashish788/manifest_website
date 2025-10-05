# ⚡ QUICK FIX: "Open in App" Not Working

## 🚨 The Problem

You click "Open in App" → Says "Opening..." → Nothing happens

## 🎯 The Cause

Your Android app doesn't know how to handle `myapp://` links yet.

## ✅ The Fix (5 Minutes)

### 1️⃣ Edit AndroidManifest.xml

**File:** `android/app/src/main/AndroidManifest.xml`

Find the `<activity android:name=".MainActivity">` section and add this **inside** it:

```xml
<intent-filter>
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="myapp" />
</intent-filter>
```

**Full example:**

```xml
<activity
    android:name=".MainActivity"
    android:launchMode="singleTask">

    <!-- Keep existing intent-filter for launcher -->
    <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>

    <!-- ADD THIS NEW INTENT FILTER -->
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="manifestation" />
    </intent-filter>

</activity>
```

---

### 2️⃣ Add Deep Link Handler to App.js

**File:** `App.js` or `App.tsx`

Add this code at the top of your App component:

```javascript
import { Linking, Alert } from 'react-native';
import { useEffect } from 'react';

function App() {
  // Add this useEffect hook
  useEffect(() => {
    // When app opens from closed state
    Linking.getInitialURL().then(url => {
      if (url) {
        console.log('App opened with:', url);
        handleDeepLink(url);
      }
    });

    // When app is already running
    const subscription = Linking.addEventListener('url', ({ url }) => {
      console.log('Deep link received:', url);
      handleDeepLink(url);
    });

    return () => subscription.remove();
  }, []);

  function handleDeepLink(url) {
    // Extract video ID from: myapp://reel/abc123
    const match = url.match(/myapp:\/\/reel\/(.+)/);

    if (match && match[1]) {
      const videoId = match[1];
      console.log('Video ID:', videoId);

      // For testing - show alert
      Alert.alert('Deep Link Works! 🎉', `Video ID: ${videoId}`);

      // TODO: Navigate to video screen
      // navigation.navigate('VideoPlayer', { videoId });
    }
  }

  // Rest of your app code...
  return (
    // Your app UI
  );
}
```

---

### 3️⃣ Rebuild Your App

**IMPORTANT:** You MUST rebuild - hot reload won't work!

```bash
cd android
./gradlew clean
cd ..
npx react-native run-android
```

Or if using Expo:

```bash
expo prebuild
expo run:android
```

---

### 4️⃣ Test It

**On your phone (with app installed):**

1. Open Chrome browser
2. Type in address bar: `myapp://reel/test123`
3. Press Enter
4. Should show "Open with Manifest Dream"
5. Click "Open"
6. **Your app should launch and show an alert! ✅**

**Or test via website:**

1. Open: `https://manifestdream.site/check-deep-link.html`
2. Click "Test 1" button
3. App should open!

---

## 🎉 Done!

Once you see the alert with the video ID, your deep linking is working!

**Next step:** Replace the `Alert.alert()` with actual navigation:

```javascript
// Replace this:
Alert.alert("Deep Link Works!", `Video ID: ${videoId}`);

// With this:
navigation.navigate("VideoPlayer", { videoId });
```

---

## 🐛 Still Not Working?

### Check 1: Is the intent filter added correctly?

Run this command:

```bash
adb shell dumpsys package com.manifestom.app | grep -i manifestation
```

Should see: `manifestation: com.manifestom.app`

### Check 2: Did you rebuild the app?

Make sure you did `./gradlew clean` and reinstalled the app.

### Check 3: Check logs

```bash
npx react-native log-android
```

Look for the console.log messages.

---

## 📚 Full Guides

For more details, see:

- `FIX_APP_NOT_OPENING.md` - Complete troubleshooting guide
- `REACT_NATIVE_INTEGRATION.md` - Full React Native setup
- `SETUP_SUMMARY.md` - Overview of entire system

---

## 🆘 Need Help?

Test these URLs in Chrome on your phone:

1. **Test scheme:** `myapp://reel/test123`
   - Should show "Open with..." dialog
2. **Test website:** `https://manifestdream.site/check-deep-link.html`
   - Click the test button

If neither works, share the output of:

```bash
adb shell dumpsys package com.manifestom.app
```
