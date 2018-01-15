import React, { Component } from 'react';
import postJSON from './sample_reddit_json_14.01.18';
import './App.css';


class App extends Component {
  render() {
    let gif = postJSON.preview.images[0].variants.gif.source;
    return (
      <div className="App text-muted">
        <div style={{margin: "10px"}}>
          <div className="text-primary">{postJSON.subreddit_name_prefixed}</div>
          <h4>{postJSON.title}</h4>
          <div>u/{postJSON.author}</div>
        </div>
        <img src={gif.url} style={{width: "100%", maxWidth: gif.width}}/>
        <div>{postJSON.num_comments} Comments</div>
      </div>
    );
  }
}

export default App;
