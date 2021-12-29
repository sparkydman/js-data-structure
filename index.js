'use-strict';
class Phonebook {
  constructor() {
    this.numbers = [];
  }

  all() {
    return this.numbers;
  }
  size() {
    return this.numbers.length;
  }
  add(phone) {
    if (this.numbers.map((n) => n.number).indexOf(phone.number) !== -1) return;
    this.numbers.push(phone);
  }
  isEmpty() {
    return this.numbers.length === 0;
  }
  remove(number) {
    if (this.numbers.map((n) => n.number).indexOf(number) === -1) return;
    this.numbers = this.numbers.filter((phone) => phone.number !== number);
  }
  addAt(phone, index) {
    this.numbers.splice(index, 0, phone);
  }
}

const phonebook = new Phonebook();

phonebook.add({
  name: 'John Doe',
  number: '09023434533',
  email: 'john@doe.com',
  createdAt: '23-12-2021',
});
phonebook.add({
  name: 'Willam Doe',
  number: '09023434233',
  email: 'willam@doe.com',
  createdAt: '23-12-2021',
});
phonebook.add({
  name: 'kate Doe',
  number: '09023430233',
  email: 'kate@doe.com',
  createdAt: '23-12-2021',
});

console.log(phonebook.all());
console.log(phonebook.size());
console.log(phonebook.isEmpty());
console.log(phonebook.remove('09023434233'));
console.log(phonebook.all());
phonebook.addAt(
  {
    name: 'Kelvin Doe',
    number: '08023430233',
    email: 'Kelvin@doe.com',
    createdAt: '23-12-2021',
  },
  1
);
console.log(phonebook.all());
