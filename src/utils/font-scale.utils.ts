import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const widthBaseScale = SCREEN_WIDTH / 393; // FROM PIXEL 4
const heightBaseScale = SCREEN_HEIGHT / 830; // FROM PIXEL 4

function normalize(size: number, based = 'width') {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

// for width  pixel
const widthPixel = (size: number) => {
  return normalize(size, 'width');
};

// for height  pixel
const heightPixel = (size: number) => {
  return normalize(size, 'height');
};

// for font pixel
const fontPixel = (size: number) => {
  return heightPixel(size);
};

const fontStyles = {
  xxxTitle: normalize(50),
  xxTitle: normalize(40),
  xTitle: normalize(30),
  title: normalize(24),
  subTitle: normalize(20),
  body: normalize(16),
  small: normalize(14),
  mini: normalize(12),
};

export { widthPixel, heightPixel, fontPixel, fontStyles };
