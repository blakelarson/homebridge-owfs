var owClient = require('owfs').Client;
var owCon = new owClient("localhost", 4304);
var Service, Characteristic;

module.exports = function(homebridge) {
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;
  homebridge.registerPlatform("homebridge-owfs", "owfs", owfsPlatform);
}

function owfsPlatform(log, config) {
  this.log = log;
  this.name = config["name"];
  this.device = config["device"];

  this.service = new Service.TemperatureSensor(this.name);

  this.service
    .getCharacteristic(Characteristic.CurrentTemperature)
    .on('get', this.getState.bind(this));
}

owfsPlatform.prototype.getState = function(callback) {
  owCon.read(this.device + '/temperature', function(err, result){
    callback(err, value);
  });
}

owfsPlatform.prototype.getServices = function() {
  return [this.service];
}

