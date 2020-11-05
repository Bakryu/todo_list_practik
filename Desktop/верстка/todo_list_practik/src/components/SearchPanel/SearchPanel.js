import React, { Component } from "react";
import "./searchPanel.css";

export default class SearchPanel extends Component {
  render() {
    const { value, handleChange, addListItem } = this.props;
    return (
      <form onSubmit={addListItem}>
        <input value={value} onChange={handleChange} />
        <button className="btn" type="submit">
          Добавить
        </button>
      </form>
    );
  }
}
