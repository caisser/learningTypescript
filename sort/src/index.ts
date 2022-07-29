import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
const charactersCollection = new CharactersCollection('Xazaca');
charactersCollection.sort();
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(1);
linkedList.add(0);
linkedList.add(-3);

console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedList.print();
