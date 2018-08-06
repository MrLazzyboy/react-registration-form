/* eslint-disable jsx-a11y/label-has-for,react/jsx-one-expression-per-line,react/destructuring-assignment,max-len */
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './App.css';

class InputForm extends Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = this.props.editUser;
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.editUser);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  } // обработчик изменений

  handleSubmit() {
    this.props.updateData(this.state);
    this.setState({
      username: '',
      email: '',
      phone: '',
    });
    this.props.toggle();
  } // обработчик сохранения

  render() {
    if (!this.props.isOpen) return null;

    return (
      <div className="modal-tab">
        <div className="row col-12">
          <div className="col-7">
            <div className="form-group">
              <label className="label" htmlFor="username">Имя</label>
              <input
                id="username"
                name="username"
                className="form-control border__input"
                type="text"
                placeholder="ex. Mr. Anderson"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="col-5">
            <div className="form-group">
              <label className="label" htmlFor="phone">Телефон</label>
              <input
                id="phone"
                name="phone"
                className="form-control border__input"
                type="text"
                placeholder="ex. 8 999 888 77 66"
                value={this.state.phone}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row col-12">
          <div className="col-7">
            <div className="form-group">
              <label className="label" htmlFor="email">E-Mail</label>
              <input
                id="email"
                name="email"
                className="form-control border__input"
                type="text"
                placeholder="ex. example@gmail.com"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="col-5">
            <button
              type="button"
              className="btn-save"
              onClick={this.handleSubmit}
            >
              Сохранить
            </button>
          </div>
        </div>
        <div className="row col-12">
          <i className="fas fa-angle-up add-icon" />
          <i className="fas fa-angle-up add-icon ml-auto" />
        </div>
      </div>
    );
  }
}

export default InputForm;
