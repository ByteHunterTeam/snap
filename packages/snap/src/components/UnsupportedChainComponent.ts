import { panel, heading, text, Panel, spinner } from '@metamask/snaps-ui';

export const UnsupportedChainComponent = (): Panel => {
  return panel([
    heading('暂不支持该链'),
    text('暂时仅支持ETH,BSC,POLYGON,ARBITRUM, 其他链敬请期待'),
  ]);
};
