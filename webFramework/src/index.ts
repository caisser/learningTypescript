import { User } from './models/User';

const user = new User({ name: 'uweueaweao', age: 3 });

user.events.on('change', () => {
  console.log('changed');
});

user.events.trigger('change');
