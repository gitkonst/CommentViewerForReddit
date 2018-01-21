import React, { Component } from 'react';

function ReplyScoreMore({score}) {
  return (
    <div className="clearfix">
      <ul className="list-inline container-fluid text-very-muted float-right float-md-left py-2 my-0 px-2">
        <li className="list-inline-item pl-0 pr-3">
          <i className="fa fa-reply" aria-hidden="true" role="button"/>
        </li>
        <li className="list-inline-item px-1">
          <i className="fa fa-ellipsis-h" aria-hidden="true" role="button"/>
        </li>
        <li className="list-inline-item px-1 text-super-muted no-selection" aria-hidden="true">｜</li>
        <li className="list-inline-item px-1" role="button">
          <i className="fa fa-arrow-up" aria-hidden="true"/>
        </li>
        <li className="list-inline-item px-1">{score}</li>
        <li className="list-inline-item px-1" role="button">
          <i className="fa fa-arrow-down" aria-hidden="true" role="button"/>
        </li>
      </ul>
    </div>
  );
}

export default ReplyScoreMore;