import React, { Component } from 'react';
import ReplyVoteMore from './ReplyVoteMore';
import Comment from './Comment';

import submissionJSON from './sample_reddit_json_14.01.18';

class App extends Component {
  render() {
    let gif = submissionJSON.preview.images[0].variants.gif.source;
    return (
      <div>
        <div className="container-fluid text-muted">
          <p className="text-primary my-1">{submissionJSON.subreddit_name_prefixed}</p>
          <h4><small>{submissionJSON.title}</small></h4>
          <p className="my-2">u/{submissionJSON.author}</p>
        </div>
        {/*
        <img
          src={gif.url}
          className="img-fluid d-block"
          alt="Submission image/animation"
        />
        */}
        <ReplyVoteMore num_upvotes={submissionJSON.ups}/>
        <hr className="my-0"/>
        <Comment
          {...submissionJSON.comments[0]}
          depth={0}
        />
      </div>
    );
  }
}

export default App;
