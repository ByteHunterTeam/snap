import { Panel, panel, text } from '@metamask/snaps-ui';
import { formatFiatValue } from '../utils/utils';

export const GasComponent = (gas: string): Panel => {
  const fiatValue = formatFiatValue(gas, 2);

  return panel([text(`估计gas消耗: $${fiatValue}`)]);
};
