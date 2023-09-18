import { heading, panel, Panel, text } from '@metamask/snaps-ui';
import { TipInfo } from '../models/ApiModels';

const chooseHeader = (tp: number): string => {
  switch (tp) {
    case 1:
    case 2:
    case 5:
      return '提示';
    case 3:
    case 4:
      return '警告';
    default:
      return '未知';
  }
};

export const TipComponent = (tip: TipInfo): Panel => {
  return panel([heading(chooseHeader(tip.type)), text(tip.value)]);
};
