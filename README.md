# A² Builder Android APK + AAB cloud build template

This repository is a starter for building a web project as an Android app with GitHub Actions.

## What it does
- Packages the contents of `web/` inside a Capacitor Android WebView app.
- Builds a debug APK for installation/testing.
- Builds a release AAB artifact (unsigned by default; Play Console publishing requires signing with a persistent upload key).
- Uploads both files as a GitHub Actions artifact named `android-build-output`.

## Setup
1. Create a GitHub repository and upload all files from this template.
2. Put your app HTML/CSS/JS and assets in `web/`. Include `web/index.html`.
3. In GitHub, open Actions and run **Build Android APK + AAB**.
4. Open the completed workflow run, download `android-build-output`, and extract the APK and AAB.

## Free-tier note
GitHub Actions has usage limits and plan-dependent quotas. Public repositories usually provide a free route, but check your account's current limits. Build artifacts expire according to repository settings.

## Signing note
The APK is a debug build intended for testing. The AAB is an unsigned release bundle; before Play Store upload, configure a persistent upload keystore and GitHub Actions secrets. Never commit keystore files or passwords to the repository.
