import React, { Component } from 'react';
import Comment from './Comment';

function TopLevelComments({comments_props}) {
  return (
    <div className="mb-4">
      {comments_props.map(comment_prop => (
        <Comment
          {...comment_prop}
          depth={0}
          key={comment_prop.id}
        />
      ))}
    </div>
  );
}

export default TopLevelComments;