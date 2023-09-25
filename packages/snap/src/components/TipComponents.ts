import { heading, panel, Panel, text } from '@metamask/snaps-ui';
import { TipInfo } from '../models/ApiModels';

const chooseHeader = (tp: number): string => {
  switch (tp) {
    case 1:
    case 2:
    case 5:
      return 'Tip';
    case 3:
    case 4:
      return 'Warning';
    default:
      return 'Unknown';
  }
};

export const TipComponent = (tip: TipInfo): Panel => {
  return panel([heading(chooseHeader(tip.type)), text(tip.value)]);
};
