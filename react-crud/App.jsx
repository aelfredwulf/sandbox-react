'use strict';

var React = require('react');

var Form = require('./components/Form.jsx');
var List = require('./components/List.jsx');

var App = React.createClass({

  getInitialState: function() {
    return {
      list: [],
      selected: null
    };
  },

  saveItem: function (item) {
    if (!item.text) return;

    var list = this.state.list;
    if (item.index != null) list[item.index] = item.text;
    else list.push(item.text);
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

React.render(<App />, document.getElementById('app-container'));
