'use strict';

var React = require('react');

var List = React.createClass({

  handleEdit: function (index) {
    this.props.onEdit(index);
  },

  handleDelete: function (index) {
    this.props.onDelete(index);
  },

  render: function () {
    var _this = this;
    var selected = this.props.selected || {};
    var itemList = this.props.list.map(function (text, index) {
      return (
        <div key={index} className={ 'item' + (index === selected.index ? ' selected' : '') }>
          <span className='item-order'>#{index + 1}</span>
          <span className='item-text'>{text}</span>
          <a onClick={_this.handleEdit.bind(null, index)}>[edit]</a>
          <a onClick={_this.handleDelete.bind(null, index)}>[delete]</a>
        </div>
      );
    });

    return (
      <div className='list'>
        {itemList}
      </div>
    );
  }

});

module.exports = List;
