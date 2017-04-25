import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import {PersonStore, PersonModel} from './components/person-store';
import FormView from './components/form';
import TableView from './components/table';

import * as jsonData from './mates.json';

const initialState: PersonModel[] = [];

[].forEach.call(jsonData, data => initialState.push({
  id: data.guid,
  firstName: data.name.first,
  lastName: data.name.last,
  age: data.age
}));

interface IState {
  personStore: PersonStore;
}

@observer
class AppView extends React.Component<{}, {}> {
  state: IState = {
    personStore: new PersonStore(initialState)
  };

  handleAdd = (data) => {
    this.state.personStore.add(data);
    this.forceUpdate();
  }

  handleRemove = (id: string) => {
    this.state.personStore.remove(id);
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <div className="mdl-grid app-layout">
          <div className="mdl-cell mdl-cell--8-col">
            <TableView store={this.state.personStore}
                       onRemove={this.handleRemove} />
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <FormView onAdd={this.handleAdd} />
          </div>
        </div>
        <DevTools />
      </div>
    );
  }
}

ReactDOM.render(<AppView />, document.getElementById('root'));
