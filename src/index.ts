export {default} from './screens/Onboard';
export {default as LoadAssets} from './LoadAssets';
import {products} from '../utils/Model';

export const assets = products.map(product => product.picture);
