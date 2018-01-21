import React, { Component } from 'react';

function ReplyScoreMore({score}) {
  return (
    <div className="clearfix">
      <ul className="list-inline container-fluid text-very-muted float-right float-md-left py-2 mb-0">
        <li className="list-inline-item pl-0 pr-3">
          <i class="fa fa-reply" aria-hidden="true" role="button"></i>
        </li>
        <li className="list-inline-item px-1">
          <i className="fa fa-ellipsis-h" aria-hidden="true" role="button"></i>
        </li>
        <li className="list-inline-item px-1 text-super-muted no-selection">｜</li>
        <li className="list-inline-item px-1" role="button">
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </li>
        <li className="list-inline-item px-1">{score}</li>
        <li className="list-inline-item px-1" role="button">
          <i className="fa fa-arrow-down" aria-hidden="true" role="button"></i>
        </li>
      </ul>
    </div>
  );
}

export default ReplyScoreMore;