'use strict';

var React = require('react');

var Form = React.createClass({

  componentDidUpdate: function (prevProps, prevState) {
    var selected = this.props.selected;
    var input = this.refs.text;
    if (selected) {
      input.value = selected.text;
      input.select();
    }
    else {
      input.value = '';
      input.focus();
    }
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var input = this.refs.text;
    this.props.onSubmit(input.value);
    input.value = '';
    input.focus();
  },

  handleCancel: function () {
    this.props.onCancel();
  },

  render: function () {
    var selected = this.props.selected;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
            type='text'
            ref='text'
            placeholder='Type a description'
            autoFocus={true}
            />
          <button>{ selected ? 'Save' : 'Add' }</button>
          <button type='button' className={ selected ? '' : 'hide' } onClick={this.handleCancel}>Cancel</button>
      </form>
    );
  }

});

module.exports = Form;
