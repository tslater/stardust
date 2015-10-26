import React, {Component} from 'react';
import {Dropdown} from 'stardust';

export default class DropdownSearchSelectionExample extends Component {
  render() {
    const options = [
      {value: 'item', text: 'File'},
      {value: 'item', text: 'Open'}
    ];
    return (
      <Dropdown className='search selection' options={options} />
    );
  }
}
