import React from 'react';
import Comment from './Comment';

function CommentArray({comment_prop_array}) {
  return (
    <div>
      {comment_prop_array.map(comment_prop => (
        <Comment
          {...comment_prop}
          key={comment_prop.id}
        />
      ))}
    </div>
  );
}

export default CommentArray;