import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import AutoControlledComponent from '../../utils/AutoControlledComponent'
import META from '../../utils/Meta'
import { customPropTypes, getUnhandledProps } from '../../utils/propUtils'
import * as sui from '../../utils/semanticUtils'

const _meta = {
  library: META.library.semanticUI,
  name: 'Rating',
  type: META.type.module,
  props: {
    icon: ['star', 'heart'],
    size: _.without(sui.sizes, 'medium', 'big'),
  },
}

class Rating extends AutoControlledComponent {
  static _meta = _meta

  static autoControlledProps = [
    'rating',
  ]

  static defaultProps = {
    clearable: 'auto',
    maxRating: 1,
  }

  static propTypes = {
    /** Additional className. */
    className: PropTypes.string,

    /**
     * You can clear the rating by clicking on the current start rating.
     * By default a rating will be only clearable if there is 1 icon.
     * Setting to `true`/`false` will allow or disallow a user to clear their rating.
     */
    clearable: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf([
        'true',
        'false',
        'auto',
      ])
    ]),

    /** A rating can use a set of icons. */
    icon: PropTypes.oneOf(_meta.props.icon),

    /** The total number of icons. */
    maxRating: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),

    /** The current number of active icons. */
    rating: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),

    /** The initial rating value. */
    defaultRating: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),

    /** A progress bar can vary in size. */
    size: PropTypes.oneOf(_meta.props.size),

    /** You can disable or enable interactive rating. */
    disabled: PropTypes.bool,

    /** Called with (event, { rating, maxRating }) after user selects a new rating. */
    onRate: PropTypes.func,
  }

  handleIconHover = (index) => {
    this.setState({
      selectedIndex: index,
    })
  }

  handleIconClick = (index) => {
    // TODO handle toggle
    this.setState({
      activeIndex: index,
    })
  }

  renderIcons = () => {
    const { maxRating } = this.props
    const { activeIndex, selectedIndex } = this.state

    return _.times(maxRating, (i) => {
      const classes = cx(
        _.isNumber(selectedIndex) && selectedIndex >= i && 'selected',
        _.isNumber(activeIndex) && activeIndex >= i && 'active',
        'icon'
      )
      return (
        <i
          key={i}
          className={classes}
          onClick={() => this.handleIconClick(i)}
          onMouseEnter={() => this.handleIconHover(i)}
          onMouseLeave={() => this.handleIconHover(null)}
        />
      )
    })
  }

  render() {
    const { className, icon, maxRating, rating, size } = this.props
    const { selectedIndex } = this.state

    const classes = cx(
      'ui',
      size,
      icon,
      _.isNumber(selectedIndex) && 'selected',
      'rating',
      className,
    )

    const rest = getUnhandledProps(Rating, this.props)

    return (
      <div {...rest} className={classes} data-rating={rating} data-max-rating={maxRating}>
        {this.renderIcons()}
      </div>
    )
  }
}

export default Rating
