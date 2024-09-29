import React, {
  useState,
  useContext,
  createContext,
  PropsWithChildren,
  useMemo,
} from 'react';
import { LayoutChangeEvent, StyleSheet } from 'react-native';
// import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { Canvas as SKCanvas } from '@shopify/react-native-skia';

import { useThrottledValue } from '../hooks';
import { Color } from '../styles';

interface Size {
  width: number;
  height: number;
}

interface Position {
  x: number;
  y: number;
}

interface CanvasContext {
  initialized: boolean;
  size: Size;
  canvasPan: Position;
}

const CanvasContext = createContext<CanvasContext>({
  initialized: false,
  size: { width: 0, height: 0 },
  canvasPan: { x: 40, y: 0 },
});

const Canvas: React.FC<PropsWithChildren> = ({ children }) => {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });
  const [canvasPan] = useState<Position>({ x: 40, y: 0 });

  const onCanvasLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;

    setSize({ width, height });
  };

  const stableContext = useMemo(
    () => ({
      initialized: true,
      size: { width: size.width, height: size.height },
      canvasPan: { x: canvasPan.x, y: canvasPan.y },
    }),
    [size.width, size.height, canvasPan.x, canvasPan.y],
  );

  const context = useThrottledValue(stableContext, 300);

  // const gesture = Gesture.Pan()
  //   .runOnJS(true)
  //   // .onBegin(() => {
  //   //   setIsPanning(true);
  //   // })
  //   .onUpdate((event) => {
  //     // setCanvasPan((prev) => ({
  //     //   x: prev.x + event.translationX / 90,
  //     //   y: prev.y + event.translationY / 90,
  //     // }));
  //   });
  // // .onEnd(() => {
  // //   setIsPanning(false);
  // // });

  return (
    // <GestureDetector gesture={gesture}>
    <SKCanvas style={styles.canvas} onLayout={onCanvasLayout}>
      <CanvasContext.Provider value={context}>
        {children}
      </CanvasContext.Provider>
    </SKCanvas>
    // </GestureDetector>
  );
};

export function useCanvas() {
  const canvasContext = useContext(CanvasContext);

  if (!canvasContext.initialized) {
    throw new Error('Canvas context not initialized');
  }

  return canvasContext;
}

export function withCanvas<P extends object>(
  Component: React.ComponentType<P>,
) {
  return (props: P) => {
    return (
      <Canvas>
        <Component {...props} />
      </Canvas>
    );
  };
}

export default Canvas;

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    backgroundColor: Color.white,
  },
});
