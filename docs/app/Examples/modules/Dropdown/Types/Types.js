import React, {Component} from 'react';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';

export default class DropdownTypesExamples extends Component {
  render() {
    return (
      <ExampleSection title='Types'>
        <ComponentExample
          title='Dropdown'
          description='A basic dropdown'
          examplePath='modules/Dropdown/Types/Dropdown'
        />
        <ComponentExample
          title='Selection'
          description='A dropdown can be used to selected between choices in a form'
          examplePath='modules/Dropdown/Types/Selection'
        />
        <ComponentExample
          title='Search Selection'
          description='A selection dropdown can allow a user to search through a large list of choices'
          examplePath='modules/Dropdown/Types/SearchSelection'
        />
        <ComponentExample
          title='Multiple Selection'
          description='A selection dropdown can allow a user to make multiple selctions'
          examplePath='modules/Dropdown/Types/MultipleSelection'
        />
        <ComponentExample
          title='Multiple Search Selection'
          description='A selection dropdown can allow a user to make multiple search selections'
          examplePath='modules/Dropdown/Types/MultipleSearchSelection'
        />
        <ComponentExample
          title='Search Dropdown'
          description='A dropdown can be searchable'
          examplePath='modules/Dropdown/Types/SearchDropdown'
        />
      </ExampleSection>
    );
  }
}
