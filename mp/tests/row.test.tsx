import * as React from 'react';
import {TableView} from '../src/components/table';
import {mount} from 'enzyme';
import {PersonModel, PersonStore} from '../src/components/person-store';

test('Row component renders the text of the person', () => {
  const person = new PersonModel({
    id: 2,
    firstName: 'Petr',
    lastName: 'Romanov',
    age: 28
  });

  const store = new PersonStore();
  store.add(person);
  const removeFn = (id) => {};
  const wrapper = mount(
    <TableView store={store} onRemove={removeFn} />
  );

  const firstName = wrapper.find('.table-cell_first-name');
  const lastName = wrapper.find('.table-cell_last-name');
  const age = wrapper.find('.table-cell_age');

  console.log(wrapper.text());
  //expect(firstName.value.toBe('Petr');
});
