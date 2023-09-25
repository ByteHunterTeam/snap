import {Panel, heading, panel, text, Component, divider} from '@metamask/snaps-ui';
import {GasComponent} from "./GasComponent";

const getRiskText = (riskLevel: number): string => {
  switch (riskLevel) {
    case 1:
      return 'No risk detected';
    case 2:
      return 'This transaction may be risky, please confirm before continuing.';
    case 3:
      return 'This transaction is likely to be risky! Please continue carefully';
    default:
      return 'Transaction risk analysis failed, please confirm before continuing.';
  }
};

export const RiskLevelComponent = (riskLevel: number, gas: string): Panel => {
  const output: Component[] = [heading('Risk description'), text(getRiskText(riskLevel))];
  if (gas !== '0' && gas !== '0.00') {
    output.push(divider())
    output.push(GasComponent(gas));
  }
  return panel(output);
};
