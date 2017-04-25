export class PersonModel {
  id: string;
  firstName: string;
  lastName: string;
  age: string;

  constructor(data) {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.age = data.age;
  }
}

export class PersonStore {
  state: PersonModel[];

  constructor(initialState: PersonModel[] = []) {
    this.state = initialState;
  }

  add = (data) => this.state.push(new PersonModel(data));

  edit = (data) => {
    let editPerson = this.find(data.id);

    if (editPerson == null) {
      return;
    }

    editPerson.firstName = data.firstName;
    editPerson.lastName = data.lastName;
    editPerson.age = data.age;
  }

  remove = (id: string) => {
    let newState = this.state.filter(person => person.id !== id);

    this.state = newState;
  }

  find = (id) => this.state.find(person => person.id === id);
}
