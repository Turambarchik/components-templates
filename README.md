# Components Templates

## 🚀 What is this?
A collection of reusable React Native UI component templates organized by `atoms`, `molecules`, and `reanimated` examples. It provides copy-ready building blocks for common app UI patterns and animations.

## 🎯 Problem it solves
Building polished mobile UI components repeatedly across projects is time-consuming and inconsistent. This repository centralizes practical component templates so teams can start from proven patterns instead of rebuilding from scratch.

## ✨ Key Features
- Atomic structure with foundational components (`atoms`) and composed UI blocks (`molecules`).
- Ready-made UX patterns such as toasts, loaders, sticky headers, empty states, and order status displays.
- Reanimated-driven UI examples including carousels and circular/semi-circular/double progress bars.
- TypeScript component definitions and prop types for safer integration.
- Theme-oriented styling via `styled-components` for consistent design tokens.

## 🛠 Tech Stack
- React Native
- TypeScript
- `styled-components`
- `react-native-reanimated`
- `react-native-reanimated-carousel`
- `react-native-svg`

## ⚡ Quick Start
```bash
git clone <your-fork-or-this-repo-url>
cd components-templates
```

Install the core dependencies in your React Native app:

```bash
npm install styled-components react-native-reanimated react-native-reanimated-carousel react-native-svg react-native-flash-message react-native-modal react-i18next ramda
```

Then copy the needed component folders (`atoms/`, `molecules/`, `reanimated/`) into your app and adjust project-specific imports (for example `theme/*`, `helpers/*`, `store/*`).

## 📌 Notes
- This repository is a template collection, not a standalone runnable app package.
- Many components expect existing app infrastructure (theme, helpers, routes, localization, store).
- Some filenames include typos (for example `loader.styles..ts`, `radioButon.styles.ts`)—rename as needed when integrating.
