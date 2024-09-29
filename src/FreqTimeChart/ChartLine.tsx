import React, { useMemo } from 'react';
import { Points, vec } from '@shopify/react-native-skia';

import { useCanvas } from '../components';
import { Color } from '../styles';

interface ChartLineProps {
  data: number[];
}

// const alphaCM = alphaColorMatrix(0.5);

const ChartLine: React.FC<ChartLineProps> = (props) => {
  const { size, canvasPan } = useCanvas();
  const { data } = props;

  const points = useMemo(() => {
    const cY = size.height / 2;
    const maxWidth = size.width;

    const xInc = maxWidth / data.length;

    return data.map((value, index) => {
      const x = index * xInc + canvasPan.x;
      const y = ((value - 128) / 256) * size.height + cY;

      return vec(x, y);
    });
  }, [size, data, canvasPan]);

  return (
    <Points points={points} mode="polygon" color={Color.main} strokeWidth={2} />
  );
};

export default ChartLine;
