import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

export const Loader = ({ visible }) => {
  return (
    <div className="Spinner">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="36"
        visible={visible}
      />
    </div>
  );
};
