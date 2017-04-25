import * as React from 'react';
import * as ReactDom from 'react-dom';
import {observable, computed} from 'mobx';
import {observer} from 'mobx-react';
import {PersonStore, PersonModel} from './person-store';

interface IProps {
  onAdd: (data: any) => any;
}

interface IState {
}

@observer
class FormView extends React.Component<IProps, IState> {
  @observable id: string;
  @observable firstName: string;
  @observable lastName: string;
  @observable age: number;

  handleAdd = () => {
    const {firstName, lastName, age} = this;
    const id = 'new-' + Date.now();
    this.props.onAdd({id, firstName, lastName, age});
    const form = document.querySelector('.form-edit form') as HTMLFormElement;
    form.reset();
  }

  handleChangeFirstName = (event) => {
    this.firstName = event.target.value;
  }

  handleChangeLastName = (event) => {
    this.lastName = event.target.value;
  }

  handleChangeAge = (event) => {
    this.age = event.target.value;
  }

  render() {
    return (
      <div className="form-edit">
        <form action="#">
          <div>
            <div className="mdl-textfield mdl-js-textfield">
              <input className="mdl-textfield__input"
                     type="text"
                     id="form-first-name"
                     onChange={this.handleChangeFirstName}
              />
              <label className="mdl-textfield__label"
                     htmlFor="form-first-name">First Name</label>
            </div>
          </div>
          <div>
            <div className="mdl-textfield mdl-js-textfield">
              <input className="mdl-textfield__input"
                     type="text"
                     id="form-last-name"
                     onChange={this.handleChangeLastName}
              />
              <label className="mdl-textfield__label"
                     htmlFor="form-last-name">Last Name</label>
            </div>
          </div>
          <div>
            <div className="mdl-textfield mdl-js-textfield">
              <input className="mdl-textfield__input"
                     type="text"
                     pattern="-?[0-9]*(\.[0-9]+)?"
                     id="form-age"
                     onChange={this.handleChangeAge}
              />
              <label className="mdl-textfield__label" htmlFor="form-age">Age</label>
              <span className="mdl-textfield__error">Input is not a number!</span>
            </div>
          </div>
          <div>
            <button className="mdl-button mdl-js-button mdl-button--raised"
                    onClick={this.handleAdd}>Создать</button>
          </div>
        </form>
      </div>
    )
  }
}

export default FormView;
