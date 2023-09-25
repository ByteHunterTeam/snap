import { panel, heading, text, Panel, spinner } from '@metamask/snaps-ui';

export const UnsupportedChainComponent = (): Panel => {
  return panel([
    heading('UnSupportedChain'),
    text('Currently only supports ETH, BSC, POLYGON, ARBITRUM. Please stay tuned for other chains.'),
  ]);
};
