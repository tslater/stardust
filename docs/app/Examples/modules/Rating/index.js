import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

export default class RatingTypesExamples extends Component {
  render() {
    return (
      <div>
        <ExampleSection title='Types'>
          <ComponentExample
            title='Rating'
            description='A basic rating'
            examplePath='modules/Rating/Types/Rating'
          />
          <ComponentExample
            title='Star'
            description='A rating can use a set of star icons'
            examplePath='modules/Rating/Types/Star'
          />
          <ComponentExample
            title='Heart'
            description='A rating can use a set of heart icons'
            examplePath='modules/Rating/Types/Heart'
          />
        </ExampleSection>

        <ExampleSection title='Variations'>
          <ComponentExample
            title='Size'
            description='A rating can vary in size'
            examplePath='modules/Rating/Variations/Size'
          />
        </ExampleSection>
      </div>
    )
  }
}
