import React from 'react';

// Image that fits to width (on small screens) and doesn't shift layout while loading.
// Adapted from Davide Calignano's blog post:
// http://davidecalignano.it/lazy-loading-with-responsive-images-and-unknown-height/
// To make it fit to large widths as well remove outer container.

function ShiftlessImage({url, width, height}) {
  let outerContainerStyle = {
    maxHeight: height,
    maxWidth: width,
  };
  let containerStyle = {
    display: 'block',
    position: 'relative',
    height: 0,
    paddingBottom: height / width * 100 + '%',
  };
  let imgStyle= {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  };
  return (
    <div style={outerContainerStyle}>
      <div style={containerStyle}>
        <img style={imgStyle} src={url} alt='' />
      </div>
    </div>
  );
}

export default ShiftlessImage;