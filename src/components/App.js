/* eslint-disable react/jsx-one-expression-per-line,jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    };
  }

  clickHandler() {
    console.log('it was a pen');
  }

  clickHandlerSecond() {
    console.log('it was a close tab');
  }

  render() {
    const { users } = this.state;

    return (
      <div className="App">
        <div className="main-table">
          <div className="col-4 text-left">
            <h3 className="header-form">
Клиенты
            </h3>
            <span className="row">
              <i className="fas fa-plus-circle mr-2 ml-2 add-icon" />
              <p className="add">
Добавить клиента
              </p>
            </span>
          </div>
          <div className="modal-tab">
            <div className="row col-12">
              <div className="col-7">
                <div className="form-group">
                  <label className="label">Имя</label>
                  <input
                    className="form-control border__input"
                    type="text"
                    placeholder="ex. Mr. Anderson"
                  />
                </div>
              </div>
              <div className="col-5">
                <div className="form-group">
                  <label className="label">Телефон</label>
                  <input
                    className="form-control border__input"
                    type="text"
                    placeholder="ex. 8 999 888 77 66"
                  />
                </div>
              </div>
            </div>
            <div className="row col-12">
              <div className="col-7">
                <div className="form-group">
                  <label className="label">E-Mail</label>
                  <input
                    className="form-control border__input"
                    type="text"
                    placeholder="ex. example@gmail.com"
                  />
                </div>
              </div>
              <div className="col-5">
                <button type="button" className="btn-save">
                  Сохранить
                </button>
              </div>
            </div>
          </div>
          <div className="pl-3 pr-3">
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
                        <i className="fas fa-pen mr-2" onClick={this.clickHandler} />
                        <i className="fas fa-times" onClick={this.clickHandlerSecond} />
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
