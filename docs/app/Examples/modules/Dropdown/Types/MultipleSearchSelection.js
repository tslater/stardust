import React, {Component} from 'react';
import {Dropdown} from 'stardust';

export default class DropdownMultipleSearchSelectionExample extends Component {
  render() {
    const options = [
      {value: 'item', text: 'Alabama'},
      {value: 'item', text: 'California'},
      {value: 'item', text: 'Delaware'},
      {value: 'item', text: 'Florida'},
      {value: 'item', text: 'Georgia'},
      {value: 'item', text: 'Idaho'},
      {value: 'item', text: 'Indiana'},
      {value: 'item', text: 'Kansas'},
      {value: 'item', text: 'Nevada'}
    ];
    return (
      <Dropdown className='fluid search' options={options} multiple='' />
    );
  }
}
