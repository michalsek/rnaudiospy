import React from 'react';
import { Line, vec } from '@shopify/react-native-skia';

import { useCanvas } from '../Canvas';

const Axes: React.FC = () => {
  const { size, canvasPan } = useCanvas();

  return (
    <>
      <Line
        p1={vec(canvasPan.x, 0)}
        p2={vec(canvasPan.x, size.height)}
        style="stroke"
        strokeWidth={1}
        color="#888"
      />
      <Line
        p1={vec(0, canvasPan.y + size.height / 2)}
        p2={vec(size.width, canvasPan.y + size.height / 2)}
        style="stroke"
        strokeWidth={1}
        color="#888"
      />
    </>
  );
};

export default Axes;
