import * as React from 'react';
import {PersonStore, PersonModel} from './person-store';
import {Row} from './row';

interface IProps {
  store: PersonStore;
  onRemove: any;
}

export class TableView extends React.Component<IProps, {}> {
  render() {
    let persons = this.props.store.state;

    return (
      <table className="mdl-data-table mdl-js-data-table">
        <thead>
          <tr>
            <th>#</th>
            <th className="mdl-data-table__cell--non-numeric">First Name</th>
            <th className="mdl-data-table__cell--non-numeric">Last Name</th>
            <th>Age</th>
            <th colSpan={2}></th>
          </tr>
        </thead>
        <tbody>
          {
            persons && persons.map((personModel, index) => {
              return (
                <Row key={personModel.id}
                     num={index + 1}
                     data={personModel}
                     onEdit={this.props.store.edit}
                     onRemove={this.props.onRemove}
                />
              )
            })
          }
        </tbody>
      </table>
    );
  }
}

export default TableView;
