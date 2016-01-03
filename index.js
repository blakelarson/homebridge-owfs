var owClient = require('owfs').Client;
var owCon = new owClient("localhost", 4304);
var Service, Characteristic;

module.exports = function(homebridge) {
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;
  homebridge.registerAccessory("homebridge-owfs", "owfs", TemperatureAccessory);
}

function TemperatureAccessory(log, config) {
  this.log = log;
  this.name = config["name"];
  this.device = config["device"];

  this.service = new Service.TemperatureSensor(this.name);

  this.service
    .getCharacteristic(Characteristic.CurrentTemperature)
    .on('get', this.getState.bind(this));
}

TemperatureAccessory.prototype.getState = function(callback) {
  ds18b20.temperature(this.device, function(err,value){
    callback(err, value);
  });
}

TemperatureAccessory.prototype.getServices = function() {
  return [this.service];
}


