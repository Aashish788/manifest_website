# 📲 React Native Share Integration

## How to Share Videos from Your App

Add this code to your video component where users can share:

```javascript
import { Share, Platform } from 'react-native';

// Function to share a video
async function shareVideo(videoId) {
  try {
    const shareUrl = `https://manifestdream.site/reel/${videoId}`;
    
    const shareOptions = {
      title: '✨ Check out my manifestation!',
      message: Platform.OS === 'ios' 
        ? 'Check out this manifestation on Manifest Dream!' 
        : `Check out this manifestation on Manifest Dream! ${shareUrl}`,
      url: shareUrl, // iOS will use this
    };
    
    const result = await Share.share(shareOptions);
    
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        console.log('✅ Shared via:', result.activityType);
      } else {
        console.log('✅ Shared successfully');
      }
    } else if (result.action === Share.dismissedAction) {
      console.log('❌ Share dismissed');
    }
  } catch (error) {
    console.error('Error sharing:', error);
  }
}

// Example usage in your video component:
export default function VideoPlayer({ videoId }) {
  return (
    <View>
      <Video source={videoSource} />
      
      <TouchableOpacity onPress={() => shareVideo(videoId)}>
        <Text>📤 Share</Text>
      </TouchableOpacity>
    </View>
  );
}
```

---

## 🔗 Deep Link Handling in Your App

### Step 1: Install Required Package

```bash
npm install @react-navigation/native
# or
yarn add @react-navigation/native
```

### Step 2: Configure Deep Links in App.js

```javascript
import React, { useEffect } from 'react';
import { Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  const navigationRef = React.useRef();
  
  // Configure deep linking
  const linking = {
    prefixes: ['manifestation://', 'https://manifestdream.site'],
    config: {
      screens: {
        VideoPlayer: 'reel/:videoId',
        Home: 'home',
      },
    },
  };
  
  // Handle initial URL when app is opened from closed state
  useEffect(() => {
    const handleInitialUrl = async () => {
      const initialUrl = await Linking.getInitialURL();
      if (initialUrl) {
        console.log('📱 App opened with URL:', initialUrl);
        handleDeepLink(initialUrl);
      }
    };
    
    handleInitialUrl();
    
    // Handle URL when app is already running
    const subscription = Linking.addEventListener('url', ({ url }) => {
      console.log('📱 Deep link received:', url);
      handleDeepLink(url);
    });
    
    return () => subscription.remove();
  }, []);
  
  function handleDeepLink(url) {
    try {
      // Parse the URL
      // Examples:
      // - manifestation://reel/abc123
      // - https://manifestdream.site/reel/abc123
      
      const videoId = extractVideoId(url);
      
      if (videoId) {
        console.log('🎥 Navigating to video:', videoId);
        
        // Navigate to video player screen
        navigationRef.current?.navigate('VideoPlayer', { videoId });
      }
    } catch (error) {
      console.error('Error handling deep link:', error);
    }
  }
  
  function extractVideoId(url) {
    // Handle both schemes
    // manifestation://reel/abc123 -> abc123
    // https://manifestdream.site/reel/abc123 -> abc123
    
    const match = url.match(/reel\/([^/?#]+)/);
    return match ? match[1] : null;
  }
  
  return (
    <NavigationContainer 
      ref={navigationRef}
      linking={linking}
    >
      {/* Your navigation stack */}
    </NavigationContainer>
  );
}

export default App;
```

---

## 🎬 Video Player Screen Example

```javascript
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { supabase } from './supabaseClient';

export default function VideoPlayerScreen({ route, navigation }) {
  const { videoId } = route.params;
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    loadVideo();
  }, [videoId]);
  
  async function loadVideo() {
    try {
      console.log('📥 Loading video:', videoId);
      
      const { data, error } = await supabase
        .from('videos') // Replace with your table name
        .select('*')
        .eq('id', videoId)
        .single();
      
      if (error) throw error;
      
      setVideo(data);
      console.log('✅ Video loaded:', data);
    } catch (error) {
      console.error('❌ Error loading video:', error);
      alert('Video not found');
      navigation.goBack();
    } finally {
      setLoading(false);
    }
  }
  
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text>Loading video...</Text>
      </View>
    );
  }
  
  return (
    <View style={{ flex: 1 }}>
      {/* Your video player component */}
      <Video 
        source={{ uri: video.url }}
        style={{ flex: 1 }}
      />
    </View>
  );
}
```

---

## ⚙️ Android Configuration

### File: `android/app/src/main/AndroidManifest.xml`

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
  
  <application>
    <activity
      android:name=".MainActivity"
      android:launchMode="singleTask"
      android:windowSoftInputMode="adjustResize">
      
      <!-- Standard launcher intent filter -->
      <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
      </intent-filter>
      
      <!-- Deep Link Intent Filter -->
      <intent-filter android:label="manifestation">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        
        <!-- Custom app scheme -->
        <data android:scheme="manifestation" />
        <data android:host="reel" />
      </intent-filter>
      
      <!-- Optional: App Links (for https:// URLs) -->
      <intent-filter android:autoVerify="true">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        
        <data 
          android:scheme="https"
          android:host="manifestdream.site"
          android:pathPrefix="/reel" />
      </intent-filter>
      
    </activity>
  </application>
</manifest>
```

---

## 🍎 iOS Configuration

### File: `ios/YourApp/Info.plist`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <!-- Existing keys... -->
  
  <!-- Deep Link URL Scheme -->
  <key>CFBundleURLTypes</key>
  <array>
    <dict>
      <key>CFBundleURLSchemes</key>
      <array>
        <string>manifestation</string>
      </array>
      <key>CFBundleURLName</key>
      <string>com.manifestom.app</string>
    </dict>
  </array>
  
  <!-- Optional: Universal Links (for https:// URLs) -->
  <key>com.apple.developer.associated-domains</key>
  <array>
    <string>applinks:manifestdream.site</string>
  </array>
  
</dict>
</plist>
```

---

## 🧪 Testing Deep Links

### Test on Android (using adb):

```bash
# Test custom scheme
adb shell am start -W -a android.intent.action.VIEW -d "manifestation://reel/test123" com.manifestom.app

# Test https URL
adb shell am start -W -a android.intent.action.VIEW -d "https://manifestdream.site/reel/test123" com.manifestom.app
```

### Test on iOS (using xcrun):

```bash
# Test custom scheme
xcrun simctl openurl booted "manifestation://reel/test123"

# Test https URL
xcrun simctl openurl booted "https://manifestdream.site/reel/test123"
```

### Test in React Native Console:

```javascript
// Add this to your App.js for debugging
Linking.addEventListener('url', ({ url }) => {
  console.log('🔗 Deep link opened:', url);
  alert('Deep link: ' + url);
});
```

---

## 📊 Full Flow Diagram

```
User clicks share button in app
         ↓
App generates: https://manifestdream.site/reel/abc123
         ↓
User shares to WhatsApp/Instagram/etc
         ↓
Friend clicks the link
         ↓
Browser opens: manifestdream.site/reel/abc123
         ↓
JavaScript detects: Does user have app?
         ↓
    ┌────┴────┐
    ↓         ↓
  YES        NO
    ↓         ↓
Opens app   Shows download button
    ↓         ↓
manifestation://reel/abc123   Redirects to Play Store
    ↓
App catches deep link
    ↓
Extracts video ID: abc123
    ↓
Loads video from Supabase
    ↓
Plays video! 🎉
```

---

## ✅ Checklist

- [ ] Copy share code to your video component
- [ ] Add deep link handling to App.js
- [ ] Update AndroidManifest.xml
- [ ] Update Info.plist (iOS)
- [ ] Test with adb/xcrun
- [ ] Deploy website with reel.html
- [ ] Test on real device!

---

**Pro Tip:** Use `console.log` extensively in your deep link handler to debug issues!
