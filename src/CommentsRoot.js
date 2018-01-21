import React, { Component } from 'react';
import Comment from './Comment';

function CommentsRoot({comments_props}) {
  return (
    <div className="container px-0 mb-4">
      {comments_props.map(comment_prop => (
        <Comment
          {...comment_prop}
          key={comment_prop.id}
        />
      ))}
    </div>
  );
}

export default CommentsRoot;