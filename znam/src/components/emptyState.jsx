import React from 'react';
import ReactBodymovin from 'react-bodymovin';
import animation from './../animations/empty-state.json';
 
const EmptyState = () => {
  const bodymovinOptions = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: animation
  }
 
  return (
    <React.Fragment>
      <ReactBodymovin options={bodymovinOptions} />
    </React.Fragment>
  )
}

export default EmptyState;