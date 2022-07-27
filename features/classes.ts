class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('brum brum');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
    console.log(this.wheels);
    console.log(this.color);
  }
}

const car = new Car(4, 'blue');
car.startDrivingProcess();
