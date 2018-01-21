import React, { Component } from 'react';
import classNames from 'classnames'
import ReplyScoreMore from './ReplyScoreMore';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {minimized: false};
  }
  body_html() {
    return {__html: this.props.body_html };
  }
  minimizable_part = () => {
    return (
      <div>
        <div dangerouslySetInnerHTML={this.body_html()}/>
        <ReplyScoreMore score={this.props.score}/>
        {this.props.replies.map(comment_prop => (
          <Comment
            {...comment_prop}
            depth={this.props.depth + 1}
            key={comment_prop.id}
          />
        ))}
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

    let containerMargins = (this.props.depth === 0) ? "px-3" : "ml-6 pl-6 pr-0";
    let containerClases = classNames(
      containerMargins,
      {"border-left": this.props.depth > 1},
      {"border-left-thick": this.props.depth === 1},
    );

    return (
      <div className={containerClases}>
        <i className={arrowClassNames} aria-hidden="true" role="button" onClick={this.toggleMinimize} />
        <span className="text-very-muted">{this.props.author}</span>
        {!this.state.minimized && this.minimizable_part()}
      </div>
    );
  }
}

export default Comment;