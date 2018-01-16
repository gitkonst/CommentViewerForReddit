import React, { Component } from 'react';

export default function ReplyUpvotesMore(props) {
  let {num_upvotes} = props;
  return (
    <ul className="list-inline container-fluid text-muted float-right float-md-left py-2">
      <li className="list-inline-item px-1">
        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
      </li>
      <li className="list-inline-item px-1">|</li>
      <li className="list-inline-item px-1">
        <i class="fa fa-arrow-up" aria-hidden="true"></i>
      </li>
      <li className="list-inline-item px-1">{num_upvotes}</li>
      <li className="list-inline-item px-1">
        <i class="fa fa-arrow-down" aria-hidden="true"></i>
      </li>
    </ul>
  );
}