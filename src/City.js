import React from 'react';

export default function City(props) {
  return (
    <div className="city">
      {/* this component should take 3 props: waterfrontId, skylineId, and castleId */}
      {/* use these 3 ids inside img tags to load the appropriate images that live in the public directory */}
      <img src={`waterfront-${props.waterfrontId}.jpeg`} />
      <img src={`skyline-${props.skylineId}.jpeg`} />
      <img src={`castle-${props.castleId}.jpeg`} />
    </div>
  );
}
