import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import AutoControlledComponent from '../../utils/AutoControlledComponent'
import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'
import * as sui from '../../utils/semanticUtils'

const _meta = {
  library: META.library.semanticUI,
  name: 'Rating',
  type: META.type.module,
  props: {
    clearable: [true, false, 'auto'],
    icon: ['star', 'heart'],
    size: _.without(sui.sizes, 'medium', 'big'),
  },
}

class Rating extends AutoControlledComponent {
  static propTypes = {
    /** Additional className. */
    className: PropTypes.string,

    /**
     * You can clear the rating by clicking on the current start rating.
     * By default a rating will be only clearable if there is 1 icon.
     * Setting to `true`/`false` will allow or disallow a user to clear their rating.
     */
    clearable: PropTypes.oneOf(_meta.props.clearable),

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

    /** You can disable or enable interactive rating.  Makes a read-only rating. */
    disabled: PropTypes.bool,

    /** Called with (event, { rating, maxRating }) after user selects a new rating. */
    onRate: PropTypes.func,
  }

  static defaultProps = {
    clearable: 'auto',
    maxRating: 1,
  }

  static _meta = _meta

  static autoControlledProps = [
    'rating',
  ]

  handleIconHover = (index) => {
    const { disabled } = this.props
    if (disabled) return

    this.setState({
      selectedIndex: index,
    })
  }

  handleIconClick = (e, index) => {
    const { clearable, disabled, maxRating, onRate } = this.props
    const { rating } = this.state
    let newRating = index + 1

    if (disabled) return

    // toggle
    if (clearable === 'auto' && maxRating === 1) {
      newRating = +!rating
    }

    // clearable
    if (clearable === true && newRating === rating) {
      newRating = 0
    }

    // set
    this.trySetState({ rating: newRating })
    if (onRate) onRate(e, { rating: newRating, maxRating })
  }

  renderIcons = () => {
    const { maxRating } = this.props
    const { rating, selectedIndex } = this.state

    return _.times(maxRating, (i) => {
      const classes = cx(
        selectedIndex >= i && 'selected',
        rating >= i + 1 && 'active',
        'icon'
      )
      return (
        <i
          key={i}
          className={classes}
          onClick={(e) => this.handleIconClick(e, i)}
          onMouseEnter={() => this.handleIconHover(i)}
          onMouseLeave={() => this.handleIconHover(-1)}
        />
      )
    })
  }

  render() {
    const { className, disabled, icon, rating, size } = this.props
    const { selectedIndex } = this.state

    const classes = cx(
      'ui',
      size,
      icon,
      disabled && 'disabled',
      !disabled && selectedIndex >= 0 && 'selected',
      'rating',
      className,
    )

    const rest = getUnhandledProps(Rating, this.props)

    return (
      <div {...rest} className={classes}>
        {this.renderIcons()}
      </div>
    )
  }
}

export default Rating
