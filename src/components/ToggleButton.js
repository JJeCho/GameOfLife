import React from 'react'
import cn from 'classnames'

const NO_OP = () => null

const buttonClasses = (on) => cn('btn', 'btn-default', {
  'active': on
})

export default ({
  on,
  label,
  onClass = 'fa-pause',
  offClass = 'fa-play',
  onClick = NO_OP
}) => (
  <label htmlFor='autoplay' className={buttonClasses(on)}>
    <input
      id='autoplay'
      style={{ display: 'none' }}
      type='checkbox'
      onChange={onClick}
    /> {label}
  </label>
)