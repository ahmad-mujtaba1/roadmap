import React, { Component } from "react";
import "./counter.css";
class Counter extends Component {
  getbadges() {
    let clases = "badge bg-";
    clases += this.props.counter.value === 0 ? "warning" : "primary";
    return clases;
  }
  formateCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }

  render() {
    const { onIncreament, onDelete1, onDelete, counter } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-1">
            <span className={this.getbadges()}>{this.formateCount()}</span>
          </div>
          <div className="col-2">
            <button
              onClick={() => onIncreament(counter)}
              className="btn btn-secondary btn-sm m-1"
            >
              +
            </button>
            <button
              onClick={() => onDelete1(counter)}
              className="btn btn-danger btn-sm "
              disabled={this.props.counter.value === 0}
            >
              -
            </button>
            <button
              onClick={() => onDelete(counter.id)}
              className="btn btn-danger btn-sm m-2"
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
