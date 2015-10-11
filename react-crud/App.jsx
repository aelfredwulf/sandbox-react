'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Form = require('./components/Form.jsx');
var List = require('./components/List.jsx');

var App = React.createClass({

  getInitialState: function () {
    return {
      list: [],
      selected: null
    };
  },

  saveItem: function (text) {
    if (!text) return;

    var list = this.state.list;
    if (this.state.selected) list[this.state.selected.index] = text;
    else list.push(text);
    this.setState({ list: list });
    this.clearSelection();
  },

  selectItem: function (index) {
    var selected = {
      index: index,
      text: this.state.list[index]
    };
    this.setState({ selected: selected });
  },

  deleteItem: function (index) {
    var list = this.state.list;
    list.splice(index, 1);
    this.setState({ list: list });
    this.clearSelection();
  },

  clearSelection: function () {
    this.setState({ selected: null });
  },

  render: function () {
    return (
      <div>

        <h1>TODO</h1>

        <Form
            selected={this.state.selected}
            onSubmit={this.saveItem}
            onCancel={this.clearSelection}
            />

        <List
            list={this.state.list}
            selected={this.state.selected}
            onEdit={this.selectItem}
            onDelete={this.deleteItem}
            />

      </div>
    );
  }

});

ReactDOM.render(<App />, document.getElementById('app-container'));
