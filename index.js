let store = {drivers: []}
let driverId = 0
let passengerId = 0
let tripId = 0
class Driver {
  constructor(name) {
    this.Id = ++driverId
    this.name = name
    store.drivers.push(this)
  }
}
