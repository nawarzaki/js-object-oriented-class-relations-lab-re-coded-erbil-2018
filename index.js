let store = {driver: []}
let driverId = 0
class Driver {
  constructor(name) {
    this.Id = ++driverId
    this.name = name
    store.push(this)
  }
}
