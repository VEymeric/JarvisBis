cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-calendar/www/Calendar.js",
        "id": "cordova-plugin-calendar.Calendar",
        "pluginId": "cordova-plugin-calendar",
        "clobbers": [
            "Calendar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-speechrecognition/www/speechRecognition.js",
        "id": "cordova-plugin-speechrecognition.SpeechRecognition",
        "pluginId": "cordova-plugin-speechrecognition",
        "merges": [
            "window.plugins.speechRecognition"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-calendar": "4.5.5",
    "cordova-plugin-compat": "1.0.0",
    "cordova-plugin-console": "1.0.7",
    "cordova-plugin-speechrecognition": "1.1.2",
    "cordova-plugin-whitelist": "1.3.2"
}
// BOTTOM OF METADATA
});