import {SvgProps} from 'react-native-svg';
import {svgImagePack, SvgImagePackType} from './SvgImagePack';
import React from 'react';

export type SvgImageProps = Omit<SvgProps, 'color'> & {
  name: SvgImagePackType;
};

const SvgImage = (props: SvgImageProps) => {
  const {name, ...rest} = props;

  const Icon = svgImagePack[name];

  return <Icon {...rest} />;
};

export {SvgImage};
