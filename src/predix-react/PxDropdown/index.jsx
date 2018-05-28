// https://www.predix-ui.com/#/elements/px-dropdown
import React from 'react'
import PropTypes from 'prop-types'
import stylePropType from 'react-style-proptype'

import '../../../bower_components/px-dropdown/px-dropdown.html'

import PolymerComponent from '../PolymerComponent'

import styles from './PxDropdown.module.scss'

export default function PxDropdown({
  id,
  containerClasses,
  dropdownClasses,
  label,
  labelClasses,
  items,
  displayValue,
  disableSelect,
  onSelect,
  onDropdownClick,
  dropdownStyle,
  buttonStyle,
  horizontalAlign,
  disableDynamicAlign,
  selected,
}) {
  const Poly = (
    <PolymerComponent
      tag="px-dropdown"
      id={id}
      className={`${styles.root} ${dropdownClasses}`.trim()}
      items={items}
      displayValue={displayValue}
      on-selected-changed={onSelect}
      style={dropdownStyle}
      buttonStyle={buttonStyle}
      horizontalAlign={horizontalAlign}
      disableDynamicAlign={disableDynamicAlign}
      selected={selected}
      disableSelect={disableSelect}
      on-px-dropdown-click={onDropdownClick}
      twoWayDataProp={{ prop: 'selected', event: 'selected-changed' }}
    />
  )

  if (label) {
    return (
      <div className={`flex flex--row flex--middle ${containerClasses}`.trim()}>
        {label ? <span className={`u-mr ${labelClasses}`.trim()}>{label}</span> : null}
        {Poly}
      </div>
    )
  }

  return Poly
}

PxDropdown.propTypes = {
  id: PropTypes.string,
  containerClasses: PropTypes.string,
  dropdownClasses: PropTypes.string,
  label: PropTypes.string,
  labelClasses: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      val: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]).isRequired,
      disabled: PropTypes.bool,
      disableSelect: PropTypes.bool,
      selected: PropTypes.bool,
      icon: PropTypes.string,
      color: PropTypes.string,
    }),
  ).isRequired,
  displayValue: PropTypes.string,
  onSelect: PropTypes.func,
  onDropdownClick: PropTypes.func,
  buttonStyle: PropTypes.oneOf(['bare', 'bare--primary', 'default', 'tertiary', 'icon']),
  horizontalAlign: PropTypes.oneOf(['left', 'right']),
  disableDynamicAlign: PropTypes.bool,
  disableSelect: PropTypes.bool,
  dropdownStyle: stylePropType,
  selected: PropTypes.string,
}

PxDropdown.defaultProps = {
  id: '',
  containerClasses: '',
  dropdownClasses: '',
  label: null,
  labelClasses: '',
  displayValue: 'Select',
  dropdownStyle: {},
  buttonStyle: 'default',
  horizontalAlign: 'left',
  disableDynamicAlign: false,
  disableSelect: false,
  selected: null,
  onSelect: () => {},
  onDropdownClick: () => {},
}