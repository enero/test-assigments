import * as React from 'react';
import {PersonStore, PersonModel} from './person-store';

interface IProps {
  data: PersonModel;
  num: number;
  onEdit: any;
  onRemove: any;
}

interface IState {
  isEditMode?: boolean;
}

export class Row extends React.Component<IProps, {}> {
  state: IState = {
    isEditMode: false
  };

  firstNameRef: HTMLInputElement;
  lastNameRef: HTMLInputElement;
  ageRef: HTMLInputElement;

  initFirstNameRef = (ref) => this.firstNameRef = ref;
  initLastNameRef = (ref) => this.lastNameRef = ref;
  initAgeRef = (ref) => this.ageRef = ref;

  handleEdit = (): void => {
    this.setState({isEditMode: !this.state.isEditMode});
  }

  handleRemove = (): void => {
    this.props.onRemove(this.props.data.id);
  }

  handleSave = (): void => {
    this.props.onEdit({
      id: this.props.data.id,
      firstName: this.firstNameRef.value,
      lastName: this.lastNameRef.value,
      age: this.ageRef.value
    });

    this.setState({isEditMode: false});
  }

  handleCancel = (): void => {
    this.firstNameRef.value = this.props.data.firstName;
    this.lastNameRef.value = this.props.data.lastName;
    this.ageRef.value = this.props.data.age;

    this.setState({isEditMode: false});
  }

  render() {
    return (
      <tr>
        <td>{this.props.num}</td>
        <td className="mdl-data-table__cell--non-numeric">
          <input ref={this.initFirstNameRef}
                 type="text"
                 className={'table-cell table-cell_first-name editable ' + (this.state.isEditMode ? '' : 'readonly')}
                 defaultValue={this.props.data.firstName}
                 readOnly={!this.state.isEditMode}
          />
        </td>
        <td className="mdl-data-table__cell--non-numeric">
          <input ref={this.initLastNameRef}
                 type="text"
                 className={'table-cell table-cell_last-name editable ' + (this.state.isEditMode ? '' : 'readonly')}
                 defaultValue={this.props.data.lastName}
                 readOnly={!this.state.isEditMode}
          />
        </td>
        <td>
          <input ref={this.initAgeRef}
                 type="text"
                 className={'table-cell table-cell_age editable ' + (this.state.isEditMode ? '' : 'readonly')}
                 defaultValue={this.props.data.age}
                 readOnly={!this.state.isEditMode}
          />
        </td>
        <td>
          <button className="mdl-button mdl-js-button mdl-button--primary"
                  onClick={this.state.isEditMode ? this.handleSave : this.handleEdit}
          >{this.state.isEditMode ? 'Save' : 'Edit'}</button>
        </td>
        <td>
          <button className="mdl-button mdl-js-button mdl-button--accent"
                  onClick={this.state.isEditMode ? this.handleCancel : this.handleRemove}
          >{this.state.isEditMode ? 'Cancel' : 'Remove'}</button>
        </td>
      </tr>
    );
  }
};
