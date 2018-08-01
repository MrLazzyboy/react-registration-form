/* eslint-disable jsx-a11y/label-has-for,react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import './App.css';

class InputForm extends Component {
  render() {
    return (
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
    );
  }
}

export default InputForm;
