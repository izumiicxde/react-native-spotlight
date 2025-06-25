# 📸 Spotlight

Spotlight is a mobile-first React Native app built using **Expo Router**. It emulates core features of Instagram: real-time feed, user authentication, profiles, post creation, and notifications — using **Clerk** for authentication and **Convex** for backend operations.

---

## 🧱 Tech Stack

- React Native (Expo)
- Expo Router
- Clerk (Authentication)
- Convex (Real-time database)
- TypeScript
- React Navigation
- Date-fns
- Expo Image Picker, File System, Secure Store

---

## 📲 Features

- Authentication flow via Clerk
- Home feed with real-time post updates
- Post creation with image picker
- Notifications screen for alerts
- Profile screens (self and others)
- Bookmark functionality
- Dynamic user routing
- Secure token storage

---

## 📁 Folder Structure

```
/app
  /(auth)
    login.tsx                   # Auth screen
  /(tabs)                       # Tab navigation
    _layout.tsx                 # Tab layout
    bookmarks.tsx               # Saved posts
    create.tsx                  # Create new post
    index.tsx                   # Feed
    notifications.tsx           # Notifications
    profile.tsx                 # User profile
  /user
    [id].tsx                    # Dynamic user profile
    _layout.tsx
    layout.tsx
  index.tsx                     # Default root

/assets                         # Static assets
/components                     # Reusable UI components
/constants                      # App-wide constants
/convex                         # Convex functions and queries
/providers                      # Context providers (e.g., auth)
/styles                         # Global styles

.env.example
.env.local
.gitignore
app.json
package.json
```

---

## 🔐 Environment Variables

Configure environment values in `.env.local` or through CI/CD secrets:

```
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
EXPO_PUBLIC_CLERK_FRONTEND_API_URL=your_clerk_frontend_url
CONVEX_DEPLOYMENT=your_convex_deployment_id
EXPO_PUBLIC_CONVEX_URL=your_convex_url
```

---

## 🚀 Getting Started

1. Install dependencies:
   `npm install` or `yarn install`

2. Add environment variables

3. Start the app:
   `npm run start`
   or platform-specific:
   `npm run android`
   `npm run ios`
   `npm run web`

---

## 🔍 Scripts

- `start`: Start dev server
- `android`, `ios`, `web`: Launch platform targets
- `lint`: Run lint checks
- `reset-project`: Custom reset logic in `scripts/reset-project.js`

---

## 🛠 Development Notes

- Auth persistence via `expo-secure-store`
- File/image handling with `expo-image-picker` and `expo-file-system`
- Navigation managed by `expo-router` and dynamic routes
- Convex used for data queries, mutations, and real-time subscriptions

---

## 📦 Deployment

Deployed via Expo. All config uses `EXPO_PUBLIC_` for safe runtime exposure.

---

## 📄 License

MIT
