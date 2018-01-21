import React, {Component} from 'react';
import classNames from 'classnames';
import CommentBody from './CommentBody';
import MinimizeArrow from './MinimizeArrow';
import {SHIFT_DEPTH_LIMIT, MINIMIZE_PAST_DEPTH} from "./constants";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {minimized: props.depth === MINIMIZE_PAST_DEPTH + 1};
  }

  containerClasses = () => {
    let depth = this.props.depth;
    let buriedCommentMargins = depth <= SHIFT_DEPTH_LIMIT ? "ml-6 pl-6" : "";
    let containerMargins = (depth === 0) ? "px-3" : buriedCommentMargins;
    return classNames(
      containerMargins,
      {"border-left": depth > 1 && depth <= SHIFT_DEPTH_LIMIT},
      {"border-left-thick": depth === 1},
    );
  };

  toggleMinimize = () => {
    this.setState({minimized: !this.state.minimized});
  };

  render() {
    return (
      <div className={this.containerClasses()}>
        <MinimizeArrow onClick={this.toggleMinimize} minimized={this.state.minimized} depth={this.props.depth}/>
        <span className="text-very-muted">{this.props.author}</span>
        {!this.state.minimized && <CommentBody {...this.props} />}
      </div>
    );
  }
}

export default Comment;