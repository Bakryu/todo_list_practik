import React, { Component } from "react";
import SearchPanel from "../SearchPanel";
import TodoItem from "../TodoItem";
import "./App.css";

export default class App extends Component {
  state = {
    list: [
      { id: 1, value: "111", done: false },
      { id: 2, value: "1123", done: false },
      { id: 3, value: "222111", done: false },
    ],
    addInputValue: "",
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ addInputValue: value });
  };

  addListItem = (event) => {
    event.preventDefault();
    this.setState(({ addInputValue, list }) => {
      if (addInputValue) {
        const newList = [
          ...list,
          { id: Date.now(), done: false, value: addInputValue },
        ];

        return { list: newList, addInputValue: "" };
      }
    });
  };

  removeHandler = (id) => {
    this.setState(({ list }) => {
      const newList = list.filter((item) => item.id !== id);
      return { list: newList };
    });
  };
  doneHandler = (id) => {
    this.setState(({ list }) => {
      const newList = list.map((listItem) => {
        if (listItem.id === id) {
          listItem.done = !listItem.done;
        }
        return listItem;
      });
      return { list: newList };
    });
  };

  render() {
    return (
      <div className="App">
        <SearchPanel
          addListItem={this.addListItem}
          value={this.state.addInputValue}
          handleChange={this.handleChange}
        />
        <ul>
          {this.state.list.map(({ id, value, done }) => {
            return (
              <React.Fragment key={id}>
                <TodoItem
                  id={id}
                  value={value}
                  done={done}
                  removeHandler={this.removeHandler}
                  doneHandler={this.doneHandler}
                />
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    );
  }
}
