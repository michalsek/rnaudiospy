import React from 'react';

import { withCanvas, Charts } from '../components';
import ChartLine from './ChartLine';

interface FreqTimeChartProps {
  data: number[];
}

const FreqTimeChart: React.FC<FreqTimeChartProps> = (props) => {
  const { data } = props;

  return (
    <>
      <Charts.Grid />
      <Charts.Axes />
      <ChartLine data={data} />
    </>
  );
};

export default withCanvas(FreqTimeChart);
