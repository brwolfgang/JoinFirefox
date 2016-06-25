console.log("Loading file join.js");
console.log("Join started, trying to get device list...");

joinWebApi.devices(function(devices){
	contextMenu.update(devices);
});

console.log("Updating context menu...");
contextMenu.update(joindevices.storedDevices);

var deviceImages = {};
deviceImages[""+DEVICE_TYPE_ANDROID_PHONE] =function(device){return "phone.png";};
deviceImages[""+DEVICE_TYPE_ANDROID_TABLET]=function(device){return"tablet.png";};
deviceImages[""+DEVICE_TYPE_CHROME_BROWSER]=function(device){return"chrome.png";};
deviceImages[""+DEVICE_TYPE_WIDNOWS_PC]=function(device){return"windows10.png";};
deviceImages[""+DEVICE_TYPE_FIREFOX]=function(device){return"firefox.png";};
deviceImages[""+DEVICE_TYPE_GROUP]=function(device){return device.deviceId.substring(6) + ".png"};
deviceImages[""+DEVICE_TYPE_ANDROID_TV]=function(device){return "tv.png"};
var devicesJson = localStorage["devices"];

var devices = null;
if(devicesJson){
	devices = JSON.parse(devicesJson);
}
