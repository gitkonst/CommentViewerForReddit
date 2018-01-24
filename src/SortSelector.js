import React from 'react';

function SortSelector(props) {
  return (
    <div class="mb-3">
      <div className="dropdown">
          <button className="btn text-very-muted border-0 btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Best
          </button>
          <div className="dropdown-menu darken-background" aria-labelledby="dropdownMenuButton">
            <div className="mx-4 small text-very-muted" href="#">SORT COMMENTS BY :</div>
            <div className="dropdown-divider"/>
            <a className="dropdown-item pl-3" href="#">
              <i className="fa fa-fire mr-4 text-very-muted" aria-hidden="true"/>
              Best
            </a>
            <a className="dropdown-item pl-3" href="#">
              <i className="fa fa-certificate mr-4 text-very-muted" aria-hidden="true"/>
              New
            </a>
          </div>
        </div>
    </div>
  );
}

export default SortSelector;
