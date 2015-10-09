'use strict';

var React = require('react');

var Form = React.createClass({

  handleSubmit: function (e) {
    e.preventDefault();
    var selected = this.props.selected;
    var input = this.refs.text.getDOMNode();
    this.props.onSubmit({
      index: selected ? selected.index : null,
      text: input.value
    });
    input.value = '';
    input.focus();
  },

  handleCancel: function () {
    this.props.onCancel();
  },

  render: function () {
    var selected = this.props.selected || {};
    var editMode = selected.index != null;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
            key={+new Date()}
            type='text'
            ref='text'
            defaultValue={selected.text}
            placeholder='Type a description'
            autoFocus={true}
            />
          <button>{ editMode ? 'Save' : 'Add' }</button>
          <button className={ editMode ? '' : 'hide' } onClick={this.handleCancel}>Cancel</button>
      </form>
    );
  }

});

module.exports = Form;
