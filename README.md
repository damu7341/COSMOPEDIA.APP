# Cosmopedia 🚀
VISIT IT:-

 https://damu7341.github.io/COSMOPEDIA.APP/ 
Search any spacecraft and explore its full mission story, from launch to the end of its mission.

## Features
- Search by name, destination or launch year
- Filter by space agency
- Mission timeline for each spacecraft
- Save favorites (stored on your device)
- Works offline

## Built with
- [Flutter](https://flutter.dev)
- Spacecraft data stored in `assets/spacecraft.json`

## Run locally
```
flutter create . --org com.yourname --project-name cosmopedia
flutter pub get
flutter run
```

## Build with GitHub Actions
Go to **Actions → Build Cosmopedia → Run workflow**. When it finishes, download the APK and AAB from **Artifacts**.
Signing needs two repository secrets: `KEYSTORE_BASE64` and `KEYSTORE_PASSWORD`.

## Add a spacecraft
Add an entry to `assets/spacecraft.json` using the same format as the existing ones.

## Data credits
Mission information is compiled from public sources such as NASA, ISRO and ESA.

## License
MIT. See the [LICENSE](LICENSE) file.
