@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('Se undio')
  pilot(@paramDecorator speed: string, @paramDecorator wave: boolean): void {
    if (speed === 'fast') {
      console.log('wiiiii');
    } else {
      console.log('nothing');
    }
    throw new Error();
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function paramDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log(target, key);
}

function logError(message: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(message);
      }
    };
  };
}
