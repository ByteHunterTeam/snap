import {Panel, heading, panel, text, Component, divider} from '@metamask/snaps-ui';
import {GasComponent} from "./GasComponent";

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

export const RiskLevelComponent = (riskLevel: number, gas: string): Panel => {
  const output: Component[] = [heading('风险描述'), text(getRiskText(riskLevel))];
  if (gas !== '0' && gas !== '0.00') {
    output.push(divider())
    output.push(GasComponent(gas));
  }
  return panel(output);
};
