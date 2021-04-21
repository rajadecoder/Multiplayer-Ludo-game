cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-fs-plugin-fullscreen.Fullscreen",
    "file": "plugins/cordova-fs-plugin-fullscreen/www/Fullscreen.js",
    "pluginId": "cordova-fs-plugin-fullscreen",
    "clobbers": [
      "Fullscreen"
    ]
  },
  {
    "id": "cordova-plugin-admob-simple.AdMob",
    "file": "plugins/cordova-plugin-admob-simple/www/AdMob.js",
    "pluginId": "cordova-plugin-admob-simple",
    "clobbers": [
      "window.plugins.AdMob"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-admob-sdklibs": "2.1.6",
  "cordova-fs-plugin-fullscreen": "1.0.2",
  "cordova-plugin-admob-simple": "3.3.4",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-vibration": "3.0.1",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});