import React, {Component} from 'react';
import {Dropdown} from 'stardust';

export default class DropdownSelectionExample extends Component {
  render() {
    const options = [
      {value: 'item', text: 'Yes'},
      {value: 'item', text: 'No'},
      {value: 'item', text: 'Uncertain'}
    ];
    return (
      <Dropdown className='Selection' options={options} />
    );
  }
}
