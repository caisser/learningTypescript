import 'reflect-metadata';

// const plane = {
//   color: 'red',
// };

// // Reflect.defineMetadata('note', 'hi there', plane);

// // console.log(plane);

// // const note = Reflect.getMetadata('note', plane);
// // console.log(note);

// Reflect.defineMetadata('note', 'Hi', plane, 'color');

// console.log(plane);

// const note = Reflect.getMetadata('note', plane, 'color');
// console.log(note);

//Classes:

@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('123')
  fly(): void {
    console.log('Flying');
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}
