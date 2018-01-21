import React, { Component } from 'react';
import CommentArray from './CommentArray';
import ReplyScoreMore from './ReplyScoreMore';

class CommentBody extends Component {
  body_html = () => {
    return {__html: this.props.body_html };
  };

  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={this.body_html()}/>
        <ReplyScoreMore score={this.props.score}/>
        <CommentArray comment_prop_array={this.props.replies}/>
      </div>
    );
  }
}

export default CommentBody;