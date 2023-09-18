import { ChainId } from '../models/chains';

export const BASE_URL = 'https://backend.bytehunter.site/web3/v1/recognize';

export const SUPPORTED_CHAINS = [
  ChainId.ETH_MAIN,
  ChainId.POLYGON_MAIN,
  ChainId.BSC_MAIN,
  ChainId.ARBITRUM_MAIN,
];
