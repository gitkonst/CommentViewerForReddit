import React, { Component } from 'react';
import classNames from 'classnames'
import ReplyScoreMore from './ReplyScoreMore';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {minimized: false};
  }
  minimizable_part = () => {
    return (
      <div>
        <div>{this.props.body}</div>
        <ReplyScoreMore score={this.props.score}/>
        <Comment {...this.props.replies[0]} depth={this.props.depth + 1}/>
      </div>
   );
  }

  toggleMinimize = (event) => {
    event.preventDefault();
    this.setState({minimized: !this.state.minimized});
  }

  render() {
    if(!this.props.replies.length) {
      return null;
    }
    let arrowClassNames = classNames(
      "fa fa-arrow-circle-down mr-2 no-selection",
      {"text-info": this.props.depth === 0},
      {"text-very-muted":  this.props.depth !== 0},
      {"rotate-minus-90": this.state.minimized},
      {"no-rotate": !this.state.minimized},
    );

    let container_margins = (this.props.depth === 0) ? "mx-3" : "ml-3 mr-0";

    return (
      <div className={container_margins}>
        <i className={arrowClassNames} aria-hidden="true" role="button" onClick={this.toggleMinimize}></i>
        <span className="text-very-muted">{this.props.author}</span>
        {!this.state.minimized && this.minimizable_part()}
      </div>
    );
  }
}

export default Comment;