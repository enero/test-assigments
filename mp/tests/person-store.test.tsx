import {PersonStore, PersonModel} from '../src/components/person-store';

describe('Person Model', () => {
  it('It creates Person Model', () => {
    const model = new PersonModel({
      id: 1,
      firstName: 'Ivan',
      lastName: 'Petrov',
      age: 25
    })

    expect(model.firstName).toBe('Ivan');
    expect(model.lastName).toBe('Petrov');
    expect(model.age).toBe(25);
  });

  it('It creates, modifies and deletes persons in store', () => {
    const personOne = new PersonModel({
      id: 1,
      firstName: 'Ivan',
      lastName: 'Petrov',
      age: 25
    });

    const personTwo = new PersonModel({
      id: 2,
      firstName: 'Igor',
      lastName: 'Fedotov',
      age: 30
    })

    const store = new PersonStore();
    expect(store.state.length).toBe(0);
    console.log('Store is created');

    store.add(personOne);
    store.add(personTwo);
    expect(store.state.length).toBe(2);
    console.log('Person One and Two are added to Store');

    personOne.firstName = 'Nikolay';
    store.edit(personOne);
    const personOneEdited = store.find(personOne.id);
    expect(personOneEdited.firstName).not.toBe('Ivan');
    expect(personOneEdited.firstName + ' ' + personOneEdited.lastName).toBe('Nikolay Petrov');
    console.log('Person One is edited');

    store.remove(personOne.id);
    expect(store.find(personOne.id)).toBeUndefined();
    expect(store.state.length).toBe(1);
    console.log('Person One is removed');
  });

});
