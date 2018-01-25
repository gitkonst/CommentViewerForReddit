import React, { Component } from 'react';
import ReplyScoreMore from './ReplyScoreMore';
import CommentArray from './CommentArray';
import ShiftlessImage from './ShiftlessImage';
import SortSelector from './SortSelector';
import SortTypes from './SortTypes';

import submissionJSON from './sample_reddit_json_14.01.18';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {activeSortType: SortTypes.best};
  }

  changeSortType = (newSortType) => {
    if(newSortType !== this.state.activeSortType) {
      this.setState({activeSortType: newSortType});
    }
  };

  render() {
    const gif = submissionJSON.preview.images[0].variants.gif.source;
    return (
      <div className="container px-0 mb-4">
        <div className="text-muted px-2">
          <p className="text-primary my-1">{submissionJSON.subreddit_name_prefixed}</p>
          <h4><small>{submissionJSON.title}</small></h4>
          <p className="my-2">u/{submissionJSON.author}</p>
        </div>
        {/*<ShiftlessImage {...gif}/>*/}
        <div className="pr-3">
          <ReplyScoreMore score={submissionJSON.score}/>
        </div>
        <hr className="mt-0 mb-2"/>
        <SortSelector changeSortType={this.changeSortType} activeSortType={this.state.activeSortType}/>
        <CommentArray comment_prop_array={submissionJSON.comments}/>
      </div>
    );
  }
}

export default App;
