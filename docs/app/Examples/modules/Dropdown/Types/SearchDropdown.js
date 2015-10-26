import React, {Component} from 'react';
import {Dropdown} from 'stardust';

export default class DropdownMultipleSelectionExample extends Component {
  render() {
    const options = [
      {value: 'item', text: 'Ruby'},
      {value: 'item', text: 'MongoDB'},
      {value: 'item', text: 'AngularJS'}
    ];
    return (
      <Dropdown className='search' options={options} />
    );
  }
}
