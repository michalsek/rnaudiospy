import React from 'react';

import { withCanvas, Charts } from '../components';

interface SpectogramProps {
  data: number[];
}

const Spectogram: React.FC<SpectogramProps> = (props) => {
  return (
    <>
      <Charts.Grid />
    </>
  );
};

export default withCanvas(Spectogram);
