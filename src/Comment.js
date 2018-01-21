import React, { Component } from 'react';
import classNames from 'classnames';
import CommentBody from './CommentBody';
import MinimizeArrow from './MinimizeArrow';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {minimized: false};
  }

  containerClasses = () => {
    let containerMargins = (this.props.depth === 0) ? "px-3" : "ml-6 pl-6 pr-0";
    return classNames(
      containerMargins,
      {"border-left": this.props.depth > 1},
      {"border-left-thick": this.props.depth === 1},
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