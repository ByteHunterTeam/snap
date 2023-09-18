import { Panel, heading, panel, text } from '@metamask/snaps-ui';

const getRiskText = (riskLevel: number): string => {
  switch (riskLevel) {
    case 1:
      return '未检测到风险';
    case 2:
      return '该交易可能存在风险,请确认后继续';
    case 3:
      return '该交易大概率存在风险!请谨慎选择';
    default:
      return '未解析出风险,请确认后继续';
  }
};

export const RiskLevelComponent = (riskLevel: number): Panel => {
  return panel([heading('风险描述'), text(getRiskText(riskLevel))]);
};
