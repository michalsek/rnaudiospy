import React, { useMemo } from 'react';
import { Line, vec } from '@shopify/react-native-skia';

import { useCanvas } from '../Canvas';

const Grid: React.FC = () => {
  const { size, canvasPan } = useCanvas();

  const inc = useMemo(() => {
    return Math.max(size.width / 80, size.height / 80);
  }, [size.width, size.height]);

  const xLines = useMemo(() => {
    const lines = [];

    const start = canvasPan.x - Math.floor(canvasPan.x / inc) * inc;

    for (let i = start; i < size.width; i += inc) {
      lines.push({ p1: vec(i, 0), p2: vec(i, size.height) });
    }

    return lines;
  }, [inc, size, canvasPan]);

  const yLines = useMemo(() => {
    const lines = [];

    const halfHeight = size.height / 2;

    const start = halfHeight - Math.floor(halfHeight / inc) * inc;

    for (let i = start; i < size.height; i += inc) {
      lines.push({ p1: vec(0, i), p2: vec(size.width, i) });
    }

    return lines;
  }, [inc, size]);

  return (
    <>
      {xLines.map((line, index) => (
        <Line
          key={index}
          p1={line.p1}
          p2={line.p2}
          style="stroke"
          strokeWidth={1}
          color="#eee"
        />
      ))}
      {yLines.map((line, index) => (
        <Line
          key={index}
          p1={line.p1}
          p2={line.p2}
          style="stroke"
          strokeWidth={1}
          color="#eee"
        />
      ))}
    </>
  );
};

export default Grid;
