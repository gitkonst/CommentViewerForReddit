import React, {Component} from "react";
import SortTypes from "./SortTypes";
import SortIcon from "./SortIcon";

class SortSelector extends Component {
  sortTypeToItem = (sortType) => {
    return (
      <div
        className="dropdown-item pl-3" role="button"
        onClick={() => {this.props.changeSortType(sortType)}}
        key={sortType.name}
      >
        <SortIcon sortType={sortType} active={this.props.activeSortType === sortType}/>
        <span className="ml-2">{sortType.name}</span>
      </div>
    );
  };

  render() {
    return (
      <div className="mb-3">
        <div className="dropdown">
          <button
            className="btn text-very-muted border-0 btn-secondary dropdown-toggle" type="button"
            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
          >
            <SortIcon sortType={this.props.activeSortType}/>
            {this.props.activeSortType.name}
          </button>
          <div className="dropdown-menu darken-background" aria-labelledby="dropdownMenuButton">
            <div className="mx-4 small text-very-muted" href="#">
              SORT COMMENTS BY :
            </div>
            <div className="dropdown-divider"/>
            {Object.values(SortTypes).map(this.sortTypeToItem)}
          </div>
        </div>
      </div>
    );
  }
}
export default SortSelector;
