import React, {Component} from 'react';
import {Dropdown} from 'stardust';

export default class DropdownDropdownExample extends Component {
  render() {
    const options = [
      {value: '', text: 'hello out there?'},
      {value: 'item', text: 'File'},
      {value: 'item', text: 'Open'},
    ];
    return (
      <Dropdown options={options} text='does this work?'/>
    );
  }
}
