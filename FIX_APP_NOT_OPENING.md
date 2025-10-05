# 🔧 Fix: App Not Opening When Clicking "Open in App"

## 🚨 Problem

When you click "Open in App" button, it says "Opening..." but nothing happens - the app doesn't open.

## 🎯 Root Cause

Your React Native app isn't configured to handle the `manifestation://` deep link scheme. Android doesn't know which app should respond to this URL.

---

## ✅ Solution: Configure Deep Links in Your React Native App

### Step 1: Update AndroidManifest.xml

**File:** `android/app/src/main/AndroidManifest.xml`

Find your `<activity>` tag (usually `MainActivity`) and add the intent filter:

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">

  <application>
    <activity
      android:name=".MainActivity"
      android:label="@string/app_name"
      android:configChanges="keyboard|keyboardHidden|orientation|screenSize|uiMode"
      android:launchMode="singleTask"
      android:windowSoftInputMode="adjustResize"
      android:exported="true">

      <!-- EXISTING: Default launcher intent (DO NOT REMOVE) -->
      <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
      </intent-filter>

      <!-- NEW: Add this deep link intent filter -->
      <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />

        <!-- This tells Android: when someone opens "myapp://", open this app -->
        <data android:scheme="myapp" />
      </intent-filter>

    </activity>
  </application>
</manifest>
```

### Step 2: Handle Deep Links in Your App

**File:** `App.js` or `App.tsx` (your main app file)

Add this code:

```javascript
import React, { useEffect } from 'react';
import { Linking, Alert } from 'react-native';

function App() {
  useEffect(() => {
    // Handle deep link when app is CLOSED and opened via link
    Linking.getInitialURL().then(url => {
      if (url) {
        console.log('App opened with URL:', url);
        handleDeepLink(url);
      }
    });

    // Handle deep link when app is ALREADY RUNNING
    const subscription = Linking.addEventListener('url', ({ url }) => {
      console.log('Deep link received:', url);
      handleDeepLink(url);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  function handleDeepLink(url) {
    console.log('Handling deep link:', url);

    // Example URL: "myapp://reel/abc123"

    try {
      // Extract video ID from URL
      const match = url.match(/myapp:\/\/reel\/(.+)/);

      if (match && match[1]) {
        const videoId = match[1];
        console.log('Video ID:', videoId);

        // Show alert to confirm it's working
        Alert.alert('Deep Link Received!', `Video ID: ${videoId}`);

        // TODO: Navigate to video player screen
        // navigation.navigate('VideoPlayer', { videoId });
      } else {
        console.log('No video ID found in URL');
      }
    } catch (error) {
      console.error('Error handling deep link:', error);
    }
  }

  // Rest of your app code...
  return (
    // Your app UI
  );
}

export default App;
```

### Step 3: Rebuild Your App

After making these changes, you MUST rebuild your app:

```bash
# For Android
cd android
./gradlew clean
cd ..
npx react-native run-android

# Or if using Expo
expo prebuild
expo run:android
```

**⚠️ IMPORTANT:** Just reloading the app (Ctrl+M → Reload) won't work. You need a full rebuild because you changed AndroidManifest.xml.

---

## 🧪 How to Test

### Test 1: Test the Deep Link Directly

1. **Make sure your app is installed** on your phone
2. **Open Chrome browser** on your phone
3. **Type this in the address bar:**
   ```
   myapp://reel/test123
   ```
4. **Press Enter**
5. **Expected:** Browser should show "Open in App" dialog
6. **Click "Open"** → Your app should launch and show alert with "Video ID: test123"

### Test 2: Test via Website

1. **Deploy your updated website** (already done via git push)
2. **Open this URL on your phone:**
   ```
   https://manifestdream.site/reel.html?id=test123
   ```
3. **Click "Open in App" button**
4. **Expected:** App should open and show the video

### Test 3: Test via ADB (for developers)

```bash
# From your computer with phone connected
adb shell am start -W -a android.intent.action.VIEW -d "myapp://reel/test123" com.manifestom.app
```

Replace `com.manifestom.app` with your actual package name.

---

## 🔍 Troubleshooting

### Issue 1: "Open in App" does nothing

**Cause:** AndroidManifest.xml not updated or app not rebuilt.

**Fix:**

1. Verify AndroidManifest.xml has the intent filter (see Step 1)
2. Rebuild the app completely: `cd android && ./gradlew clean && cd .. && npx react-native run-android`
3. Uninstall old app and reinstall

### Issue 2: App opens but doesn't navigate to video

**Cause:** Deep link handler not implemented.

**Fix:**

1. Check console logs: `npx react-native log-android`
2. Verify the `handleDeepLink` function is being called
3. Make sure you're navigating to the correct screen

### Issue 3: Browser shows "No app found"

**Cause:** App not installed or deep link scheme mismatch.

**Fix:**

1. Verify app is installed
2. Check scheme in AndroidManifest.xml matches `myapp://`
3. Check reel.html uses the same scheme

---

## 📱 Check Your Package Name

Your package name in AndroidManifest.xml should match what's in reel.html.

**Find your package name:**

Open `android/app/src/main/AndroidManifest.xml` and look at the first line:

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  package="com.manifestom.app">  <!-- This is your package name -->
```

**Update reel.html if needed:**

Open `public/reel.html` and update the app scheme:

```javascript
const CONFIG = {
  appScheme: "myapp",
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=com.manifestom.app",
  //                                                              ^^^ Must match package name
};
```

---

## 📋 Quick Checklist

- [ ] Added `<intent-filter>` to AndroidManifest.xml
- [ ] Added deep link handler to App.js
- [ ] Rebuilt the app (not just reload)
- [ ] Tested `myapp://reel/test123` in Chrome browser
- [ ] App opens and shows alert with video ID
- [ ] Updated package name in reel.html if needed

---

## 🎯 Expected Behavior After Fix

1. User clicks share link: `https://manifestdream.site/reel/abc123`
2. Browser opens and loads reel.html
3. JavaScript tries to open: `manifestation://reel/abc123`
4. Android shows: "Open with Manifest Dream" dialog
5. User clicks "Open"
6. **Your app launches** ✅
7. **Alert shows:** "Deep Link Received! Video ID: abc123" ✅
8. **App navigates to video player** (once you implement navigation) ✅

---

## 💡 Next Steps After It Works

Once the alert shows up correctly:

1. **Replace the Alert with navigation:**

   ```javascript
   function handleDeepLink(url) {
     const match = url.match(/manifestation:\/\/reel\/(.+)/);
     if (match && match[1]) {
       const videoId = match[1];

       // Remove this:
       // Alert.alert('Deep Link Received!', `Video ID: ${videoId}`);

       // Add this:
       navigation.navigate("VideoPlayer", { videoId });
     }
   }
   ```

2. **Fetch video from Supabase:**
   ```javascript
   // In your VideoPlayer screen
   useEffect(() => {
     async function loadVideo() {
       const { data } = await supabase
         .from("videos")
         .select("*")
         .eq("id", videoId)
         .single();

       setVideo(data);
     }
     loadVideo();
   }, [videoId]);
   ```

---

## 🆘 Still Not Working?

Run these debug commands:

```bash
# Check if intent filter is registered
adb shell dumpsys package com.manifestom.app | grep -A 10 "scheme"

# View app logs
npx react-native log-android

# Test deep link manually
adb shell am start -W -a android.intent.action.VIEW -d "manifestation://reel/test123" com.manifestom.app
```

Share the output and I can help debug further!
