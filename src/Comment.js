import React, { Component } from 'react';
import ReplyVoteMore from './ReplyVoteMore';

class Comment extends Component {
  replies() {
    if(this.props.replies.length > 0) {
      return <Comment {...this.props.replies[0]}/>;
    }
  }
  render() {
    console.log(this.props);
    let props = this.props;
    if(!props.replies.length) {
      return null;
    }
    return (
      <div className="ml-3 mr-0">
        <i className="fa fa-arrow-circle-down mr-2 text-info" aria-hidden="true"></i>
        <span className="text-muted">{props.author}</span>
        <div>{props.body}</div>
        <ReplyVoteMore />
        <Comment {...props.replies[0]}/>
      </div>
    );
  }
}

export default Comment;