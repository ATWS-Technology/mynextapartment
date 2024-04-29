import bitcoin from '../svg/bitcoin.svg';
import jogging from '../svg/jogging.svg';
import transfermoney from '../svg/transfermoney.svg';
import homescreen from '../svg/homescreen.svg';
import world from '../svg/world.svg';
import completed from '../svg/completed.svg';
import thingstosay from '../svg/thingstosay.svg';

const svgImagePack = {
  bitcoin,
  jogging,
  transfermoney,
  homescreen,
  world,
  completed,
  thingstosay,
};

export {svgImagePack};

export type SvgImagePackType = keyof typeof svgImagePack;
