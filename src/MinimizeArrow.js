import React from 'react';
import classNames from 'classnames';

function MinimizeArrow({minimized, depth, onClick}) {
  const rotate = minimized ? "rotate-minus-90" : "no-rotate";
  const text = (depth === 0) ? "text-info" : "text-very-muted";
  const arrowClasses = classNames(
    "fa fa-arrow-circle-down mr-2",
    text, rotate,
  );
  return (
    <i className={arrowClasses} aria-hidden="true" role="button" onClick={onClick}/>
  );
}

export default MinimizeArrow;