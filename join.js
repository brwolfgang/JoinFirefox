console.log("Loading file join.js");
console.log("Join started, trying to get device list...");
joinWebApi.devices(function(devices){
	contextMenu.update(devices);
});
console.log("Updating context menu...");
contextMenu.update(joindevices.storedDevices);