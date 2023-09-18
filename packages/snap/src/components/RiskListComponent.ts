import { Panel, Text, heading, panel, text } from '@metamask/snaps-ui';
import { RiskObj } from '../models/ApiModels';

export const RiskListComponent = (riskList: RiskObj[]): Panel => {
  const warnings: Text[] = riskList
    .filter((item) => {
      return item.risk !== 1;
    })
    .map((item) => text(`• ${item.title}`));

  return panel([heading('交易对象风险列表'), ...warnings]);
};
