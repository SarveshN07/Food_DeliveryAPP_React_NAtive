# React Navigation Food Delivery App

## Project Overview

This is a React Native food delivery demo built with Expo and React Navigation. It demonstrates onboarding, authentication, nested navigation, bottom tabs, a drawer, cart state, and persistent login using AsyncStorage.

The app flow currently includes:

- Onboarding screen
- Login screen with persistent auth state
- Main app with bottom tabs
- Nested home stack for restaurant details and cart
- Drawer navigation inside the Profile tab
- Shared cart context with an Orders badge

## Tech Stack

- Expo SDK 55
- React Native 0.83
- React 19
- TypeScript
- React Navigation
- React Native Gesture Handler
- React Native Reanimated
- React Native Worklets
- React Native Safe Area Context
- AsyncStorage

## How to Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the app:

```bash
npm start
```

3. Run on a platform:

```bash
npm run android
npm run ios
npm run web
```

## Navigation Structure

The app uses conditional navigation based on authentication state.

```text
Root
├── Auth Stack
│   ├── OnBoarding
│   └── Login
└── Main App Stack
    └── Bottom Tabs
        ├── Home Stack
        │   ├── Home
        │   ├── RestaurantDetails
        │   └── Cart
        ├── Profile Drawer
        │   ├── Profile
        │   ├── My Orders
        │   ├── Settings
        │   ├── Help
        │   └── Logout
        ├── Search
        └── Orders
```

### Notes

- The onboarding screen routes to Login.
- The Login button sets `isAuthenticated = true`.
- Logout resets `isAuthenticated = false` and returns to the auth flow.
- The Orders tab shows a badge based on `cartItems.length`.
- The CartContext keeps restaurant selections in shared state.



## Assumptions Made

- Any username and password are accepted for login.
- Auth state is persisted with AsyncStorage, but no backend authentication exists yet.
- The drawer is nested under the Profile tab.
- The Orders screen is used to display cart items and the clear cart action.
- Deep linking is  not implemented yet.
