# 🚀 Deep Linking Setup for Manifest Dream App

## 📱 How It Works

When users share a video from your app, they get a link like:

```
https://manifestdream.site/reel.html?id=abc123
```

When someone clicks this link:

1. **Has the app?** → Opens directly to that video in the app ✅
2. **No app?** → Redirects to Play Store/App Store to download 📲

---

## 🛠️ Setup Steps

### Step 1: Update Store URLs ⚠️ IMPORTANT

Open `public/reel.html` and update lines 97-98:

```javascript
const CONFIG = {
  appScheme: "manifestation",

  // UPDATE THESE:
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=com.manifestom.app",
  appStoreUrl: "https://apps.apple.com/app/id1234567890", // ← Replace with your real iOS App Store ID

  appOpenTimeout: 2500,
  storeRedirectDelay: 3000,
};
```

### Step 2: Deploy to Your Website

Upload `public/reel.html` to your website so it's accessible at:

```
https://manifestdream.site/reel.html
```

You can do this by:

- Deploying via Netlify (already configured in your project)
- The file is in the `public` folder, so it will be copied automatically when you build

### Step 3: Build and Deploy

```bash
# Build your project
npm run build
# or
bun run build

# Deploy (if using Netlify, just push to GitHub)
git add .
git commit -m "Add deep linking support"
git push
```

Netlify will automatically deploy the `public/reel.html` file!

---

## 🔗 How to Share Videos from Your App

### Option 1: Query Parameter (Easiest - Already Supported!)

```javascript
const videoId = "abc123";
const shareUrl = `https://manifestdream.site/reel.html?id=${videoId}`;

// Share this URL
Share.share({
  title: "Check out my manifestation!",
  message: shareUrl,
  url: shareUrl,
});
```

### Option 2: Clean URL (Requires Server Config)

```javascript
const videoId = "abc123";
const shareUrl = `https://manifestdream.site/reel/${videoId}`;
```

For this to work, you need to add a redirect rule in `netlify.toml`:

```toml
[[redirects]]
  from = "/reel/:videoId"
  to = "/reel.html?id=:videoId"
  status = 200
```

---

## 📲 App Deep Link Configuration

### Android (React Native)

1. **Update `AndroidManifest.xml`:**

```xml
<activity
    android:name=".MainActivity"
    android:launchMode="singleTask">

    <!-- Existing code... -->

    <!-- Add this intent filter for deep links -->
    <intent-filter android:label="manifestation">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />

        <!-- Your app's custom scheme -->
        <data android:scheme="manifestation"
              android:host="reel" />
    </intent-filter>
</activity>
```

2. **Handle the deep link in your app:**

```javascript
import { Linking } from "react-native";

// In your App.js or main component
useEffect(() => {
  // Handle initial URL (when app is closed)
  Linking.getInitialURL().then((url) => {
    if (url) {
      handleDeepLink(url);
    }
  });

  // Handle URL when app is already open
  const subscription = Linking.addEventListener("url", ({ url }) => {
    handleDeepLink(url);
  });

  return () => subscription.remove();
}, []);

function handleDeepLink(url) {
  // url will be like: "manifestation://reel/abc123"
  const videoId = url.split("/").pop();

  // Navigate to the video screen
  navigation.navigate("VideoPlayer", { videoId });
}
```

### iOS (React Native)

1. **Update `Info.plist`:**

```xml
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
```

2. Use the same JavaScript code as Android (React Native handles both platforms)

---

## 🧪 Testing

### Test on Your Phone:

1. Build and deploy your website
2. Open this URL on your phone:

   ```
   https://manifestdream.site/reel.html?id=test123
   ```

3. **Expected behavior:**
   - ✅ If app installed → Opens app to that video
   - ✅ If app not installed → Shows "Download App" button → Redirects to Play Store

### Test Different Scenarios:

| Scenario        | URL to Test                                      |
| --------------- | ------------------------------------------------ |
| With video ID   | `https://manifestdream.site/reel.html?id=abc123` |
| No video ID     | `https://manifestdream.site/reel.html`           |
| Desktop browser | Same URLs (should show download button)          |

---

## 🐛 Troubleshooting

### Deep Link Not Opening App?

1. **Check app scheme:** Make sure `manifestation://` is configured in your app
2. **Android:** Verify `AndroidManifest.xml` has the correct intent filter
3. **iOS:** Check `Info.plist` has the URL scheme
4. **Test the scheme directly:** Open `manifestation://reel/test` in mobile browser

### Video Not Playing?

1. Check that your app correctly extracts the video ID from the deep link
2. Verify the video ID exists in your Supabase database
3. Add console logs in your app's deep link handler

### Redirect Not Working?

1. Make sure `reel.html` is deployed to your website
2. Check browser console for errors (F12 → Console)
3. Verify store URLs are correct in the CONFIG object

---

## 📊 Analytics (Optional)

Track deep link performance by adding analytics:

```javascript
// In reel.html, add to the handleDeepLink function:

// Track when link is opened
gtag("event", "deep_link_opened", {
  video_id: videoId,
  platform: platform.name,
});

// Track when app opens successfully
gtag("event", "app_opened", {
  video_id: videoId,
});

// Track when redirected to store
gtag("event", "store_redirect", {
  video_id: videoId,
  platform: platform.name,
});
```

---

## 🎯 URL Format Summary

| Format      | Example                                  | Notes                  |
| ----------- | ---------------------------------------- | ---------------------- |
| Query param | `manifestdream.site/reel.html?id=abc123` | ✅ Works now           |
| Clean URL   | `manifestdream.site/reel/abc123`         | Needs Netlify redirect |
| Deep link   | `manifestation://reel/abc123`            | App scheme             |

---

## 📝 Next Steps

1. ✅ Update Play Store & App Store URLs in `reel.html`
2. ✅ Deploy your website (Netlify auto-deploys on git push)
3. ✅ Configure deep linking in your React Native app
4. ✅ Update your share functionality to use the new URL format
5. ✅ Test on real devices!

---

**Need help?** Check the browser console (F12) for detailed logs!
