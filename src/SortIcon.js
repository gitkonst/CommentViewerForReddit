import React from 'react';
import classNames from 'classnames';
//import SortTypes from './SortTypes';

function SortIcon({sortType, active}) {
  const textClass = active ? "text-primary" : "text-very-muted";
  const className = classNames(
    sortType.iconClass,
    textClass,
    "fa mr-2",
  );
  return (
    <i className={className} aria-hidden="true"/>
  );
}

export default SortIcon;
