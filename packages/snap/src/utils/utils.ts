import { ChainId } from '../models/chains';

export const numberWithCommas = (x: string): string => {
  return x.replace(/\B(?=(\d{3})+(?!\d))/gu, ',');
};

export const formatFiatValue = (
  fiatValue: string,
  maxDecimals: number,
): string => {
  const fiatWithRoundedDecimals = Number(fiatValue)
    .toFixed(maxDecimals) // round to maxDecimals
    .replace(/\.00$/u, '');
  const fiatWithCommas = numberWithCommas(fiatWithRoundedDecimals);
  return `${fiatWithCommas}`;
};

export const mapChainId = (chainId: string): number => {
  switch (chainId) {
    case ChainId.ETH_MAIN:
      return 1;
    case ChainId.POLYGON_MAIN:
      return 137;
    case ChainId.ARBITRUM_MAIN:
      return 42161;
    case ChainId.BSC_MAIN:
      return 56;
    default:
      throw new Error('chain not supported');
  }
}
