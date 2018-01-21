import React from 'react';
import classNames from 'classnames';

function MinimizeArrow({minimized, depth, onClick}) {
  let arrowClasses = classNames(
    "fa fa-arrow-circle-down mr-2 no-selection",
    {"text-info": depth === 0},
    {"text-very-muted": depth !== 0},
    {"rotate-minus-90": minimized},
    {"no-rotate": !minimized},
  );
  return (
    <i className={arrowClasses} aria-hidden="true" role="button" onClick={onClick}/>
  );
}

export default MinimizeArrow;