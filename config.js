// ============================================================
// CONFIGURE ALL APP DETAILS HERE
// ============================================================

window.APP_CONFIG = {
  appA: {
    name: "App A",                                          // TODO: display name
    ios: {
      storeUrl: "https://apps.apple.com/us/app/id660238716", // TODO: App Store URL
      scheme: "app-a://",                                   // TODO: custom URL scheme
    },
    android: {
      storeUrl: "https://play.google.com/store/apps/details?id=com.example.app_a", // TODO
      packageName: "com.example.app_a",                     // TODO: package name
      scheme: "app-a://",                                   // TODO: custom URL scheme
    },
  },

  appB: {
    name: "App B",                                          // TODO: display name
    ios: {
      storeUrl: "https://apps.apple.com/app/idTODO_APP_ID_B", // TODO: App Store URL
      scheme: "app-b://",                                   // TODO: custom URL scheme
    },
    android: {
      storeUrl: "https://play.google.com/store/apps/details?id=com.example.app_b", // TODO
      packageName: "com.example.app_b",                     // TODO: package name
      scheme: "app-b://",                                   // TODO: custom URL scheme
    },
  },

  // App A is the default fallback when no app is installed
  fallbackApp: "appA",
};
