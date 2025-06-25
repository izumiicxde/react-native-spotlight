# 📸 Spotlight

Spotlight is a mobile-first React Native application built using **Expo Router**. It replicates core Instagram-like functionality — including real-time posts feed, authentication, user profiles, content creation, and notifications — leveraging **Clerk** for authentication and **Convex** for real-time backend capabilities.

---

## 🧱 Tech Stack

- React Native (via Expo)
- Expo Router
- Clerk – Authentication
- Convex – Real-time database
- TypeScript
- React Navigation
- Date-fns – Time formatting
- Vector Icons – UI icons

---

## 📲 Features

- User Authentication (Clerk)
- Home Feed displaying all posts
- Create Post screen with media picker
- User Profile with posts
- Other Users' Profile via dynamic routes
- Notifications screen for interactions
- Real-time updates via Convex
- Persistent secure sessions via `expo-secure-store`

---

## 📁 Folder Structure (Key)

```
/app
  /_layout.tsx              // Global layout
  /index.tsx                // Feed/Home screen
  /profile.tsx              // User's own profile
  /notifications.tsx        // Notification screen
  /create.tsx               // Create post screen
  /user/[id].tsx            // Other user profiles (dynamic route)
  /auth/                    // Authentication screens

/scripts/
  reset-project.js          // Cleanup and reset utility

/env                        // Loaded via EXPO_PUBLIC_ vars
```

---

## 🔐 Environment Variables

Create a `.env` file in the root or configure using `.env.local` depending on your setup.

```
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
EXPO_PUBLIC_CLERK_FRONTEND_API_URL=your_clerk_frontend_url
CONVEX_DEPLOYMENT=your_convex_deployment_id
EXPO_PUBLIC_CONVEX_URL=your_convex_url
```

---

## 🚀 Getting Started

1. Install dependencies:

   npm install
   or
   yarn install

2. Setup environment variables

3. Start the development server:

   npm run start

   To open on specific platforms:

   npm run android # Android emulator/device
   npm run ios # iOS simulator/device
   npm run web # Web

---

## 🔍 Scripts

- `start`: Start Expo dev server
- `android`: Start project on Android
- `ios`: Start project on iOS
- `web`: Start project on Web
- `lint`: Run Expo lint
- `reset-project`: Reset using custom script (`./scripts/reset-project.js`)

---

## 🛠 Development Notes

- Auth is handled via `@clerk/clerk-expo`, integrated with `expo-secure-store` for token persistence.
- Convex handles real-time data; mutations and queries are used for post creation and feed updates.
- Navigation is handled using `@react-navigation/native` and `expo-router`.
- Post creation uses `expo-image-picker` for media and `expo-file-system` for handling uploads.

---

## 📦 Deployment

Expo-hosted. All runtime configuration is sourced via `EXPO_PUBLIC_` prefixed environment variables.

---

## 📄 License

MIT
