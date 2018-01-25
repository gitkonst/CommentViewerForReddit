import React from 'react';
import {SHIFT_DEPTH_LIMIT} from "./constants";

function DepthBullets({depth}) {
  let count = Math.max(depth - SHIFT_DEPTH_LIMIT, 0);
  const bullets = [];
  while(count--) {
    bullets.push(
      <span className="text-info mr-1" key={count}>
      •
      </span>
    )
  }
  return bullets;
}

export default DepthBullets;
