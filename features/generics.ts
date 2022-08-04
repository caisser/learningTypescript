class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayofAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayofAnything<string>(['a', 'b']);

// Example of generics with function
function printStrings(arr: string[]): void {
  arr.forEach((el) => {
    console.log(el);
  });
}
function printNumbers(arr: number[]) {
  arr.forEach((el) => {
    console.log(el);
  });
}

function printAny<T>(arr: T[]) {
  arr.forEach((el) => {
    console.log(el);
  });
}

// constrains

class Car {
  print() {
    console.log('Im a car');
  }
}

class House {
  print() {
    console.log('Im a house');
  }
}

interface Printable {
  print(): void;
}

function printHouseOrCar<T extends Printable>(arr: T[]) {
  arr.forEach((el) => {
    el.print();
  });
}

printHouseOrCar<House>([new House(), new House()]);
printHouseOrCar<Car>([new Car(), new Car()]);
