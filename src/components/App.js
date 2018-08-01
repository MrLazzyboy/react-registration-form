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
    }
  }

clickHandler() {
    console.log(`it was a pen`);
}

clickHandlerSecond() {
        console.log(`it was a close tab`);
    }

  render() {
  const { users } = this.state;

    return (
      <div className="App">
        <div className='main-table'>
          <div className='col-4 text-left'>
            <h3>Клиенты</h3><br/>
            <span className="row"><i className="fas fa-plus-circle mr-2 ml-2"/><p>Добавить клиента</p></span>
          </div>
          <div className="row col-12">
              <div className="col-6">
                  Имя<input type="text"/>
              </div>
              <div className="col-6">
                  Телефон<input type="text"/>
              </div>
          </div>
          <div className="row col-12">
              <div className="col-6">
                  E-mail<input type="text"/>
              </div>
              <div className="col-6">
                  <button type="button">Сохранить</button>
              </div>
          </div>
            <table className="table table-borderless col-12 ">
          <thead>
            <tr>
              <th className="col-2"/>
              <th className="col-2">Клиент</th>
              <th className="col-2">Телефон</th>
              <th className="col-2">Email</th>
              <th className="col-1">Дата последнего посещения</th>
              <th className="col-1">Сумма оплат</th>
              <th className="col-1">Колличество посещений</th>
              <th className="col-1">Активный абонемент</th>
            </tr>
          </thead>
          <tbody>
            {users.map( row =>
            (
              <tr key={row.id}>
                <td>
                  <div className="col">
                      <i className="fas fa-pen mr-2" onClick={this.clickHandler} />
                      <i className="fas fa-times" onClick={this.clickHandlerSecond} />
                  </div>
                </td>
                <td>{row.username}</td>
                <td>{row.phone}</td>
                <td>{row.email}</td>
                <td>{row.last_visit}</td>
                <td>{row.summ_of_payments}</td>
                <td>{row.summ_of_visits}</td>
                <td>{row.active_card}</td>
              </tr>
            )
            )}
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default App;
