const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = []; //[['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const car1 = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with loop functions
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDates: (string | Date)[] = [new Date(), '2030-10-10'];
