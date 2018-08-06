/* eslint-disable jsx-a11y/click-events-have-key-events,react/jsx-one-expression-per-line,no-unused-vars,react/no-access-state-in-setstate,react/destructuring-assignment,max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputForm from './InputForm';

class App extends Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      users: [
        {
          id: 1,
          username: 'Андрей Петрович',
          phone: '89999999999',
          email: 'example@example.example',
          last_visit: '----',
          summ_of_payments: '----',
          summ_of_visits: '----',
          active_card: '----',
        },
        {
          id: 2,
          username: 'John Doe',
          phone: '4815162342',
          email: 'pie@isalie.cz',
          last_visit: '----',
          summ_of_payments: '----',
          summ_of_visits: '----',
          active_card: '----',
        },
      ],
      isOpen: false,
      editUser: {
        id: null,
        username: '',
        phone: '',
        email: '',
      },
    };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  // вкл/выкл отображения компонента

  editHandler(id) {
    return (event) => {
      const newState = this.state;
      const user = newState.users.find(item => item.id === id);
      this.setState({ editUser: user });
      this.setState({ isOpen: true });
    };
  }
  // обработчик редактирования

  deleteHandler(id) {
    return (event) => {
      const newState = this.state;
      const user = newState.users.find(item => item.id === id);
      newState.users.splice(newState.users.indexOf(user), 1);
      this.setState(newState);
    };
  }
  // обработчик удаления

  closeIconDisplay() {
    return (
      this.state.isOpen ? <i className="fas fa-times add-icon pointer" onClick={this.toggle} /> : null
    );
  }
  // отображение иконки крестика

  updateData(value) {
    const newState = this.state;

    if (value.id === null) {
      const newUser = {
        ...value,
        id: this.idGenerator(),
        last_visit: '----',
        summ_of_payments: '----',
        summ_of_visits: '----',
        active_card: '----',
      };
      newState.users.push(newUser);
    } else {
      const oldUser = newState.users.find(item => item.id === value.id);
      newState.users.splice(newState.users.indexOf(oldUser), 1, value);
    }

    this.setState(newState);
    this.setState({
      editUser: {
        id: null,
        username: '',
        phone: '',
        email: '',
      },
    });
  }
  // колбэк для возврата информации из компонента ввода

  idGenerator() {
    return `_${Math.random().toString(36).substr(2, 9)}`;
  }
  // генерируем уникальный id

  render() {
    const { users } = this.state;
    return (
      <div className="App">
        <div className="main-table">
          <div className="row text-left">
            <div className="col-4 ml-4">
              <h3 className="header-form">Клиенты</h3>
              <span className="row">
                <i className="fas fa-plus-circle mr-2 ml-2 add-icon pointer" onClick={this.toggle} />
                <p className="add">Добавить клиента</p>
              </span>
            </div>
            <span className="col text-right mr-4 mt-4">
              {this.closeIconDisplay()}
            </span>
          </div>
          <div className="pl-3 pr-3">
            <InputForm
              isOpen={this.state.isOpen}
              editUser={this.state.editUser}
              updateData={this.updateData}
              toggle={this.toggle}
            />
            <hr />
            <table className="table table-borderless col-12 ">
              <thead>
                <tr>
                  <th className="th-own" />
                  <th className="th-own">Клиент</th>
                  <th className="th-own">Телефон</th>
                  <th className="th-own">Email</th>
                  <th className="th-own">Дата последнего посещения</th>
                  <th className="th-own">Сумма оплат</th>
                  <th className="th-own">Колличество посещений</th>
                  <th className="th-own">Активный абонемент</th>
                </tr>
              </thead>
              <tbody>
                {users.map(row => (
                  <tr key={row.id}>
                    <td align="left">
                      <div className="col d-inline-flex">
                        <i className="fas fa-pen mr-2 pointer" onClick={this.editHandler(row.id)} />
                        <i className="fas fa-times pointer" onClick={this.deleteHandler(row.id)} />
                      </div>
                    </td>
                    <td className="table-font">
                      {row.username}
                    </td>
                    <td className="table-font">
                      {row.phone}
                    </td>
                    <td className="table-font">
                      {row.email}
                    </td>
                    <td className="table-font">
                      {row.last_visit}
                    </td>
                    <td className="table-font">
                      {row.summ_of_payments}
                    </td>
                    <td className="table-font">
                      {row.summ_of_visits}
                    </td>
                    <td className="table-font">
                      {row.active_card}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
