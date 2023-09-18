import { Component, divider, Panel, panel } from '@metamask/snaps-ui';
import {
  ComponentListData,
  ContractInfo,
  ListInfo,
  Module,
  RiskObj,
  TipInfo,
} from '../models/ApiModels';
import { ContractInfoComponent } from './ContractInfoComponent';
import { TipComponent } from './TipComponents';
import {
  ListComponent,
  NoChangesComponent,
  RiskListComponent,
} from '.';

const handleComponents = (component: ComponentListData): Panel => {
  if (!component.data) {
    return panel([]);
  }

  let info;

  switch (component.module) {
    case Module.List:
      info = component.data as ListInfo;
      if (info.list.length === 0) {
        return panel([]);
      }
      return ListComponent(info);

    case Module.RiskList:
      info = component.data as RiskObj[];
      if (info.length === 0) {
        return panel([]);
      }
      return RiskListComponent(info);

    case Module.ContractInfo:
      info = component.data as ContractInfo;
      return ContractInfoComponent(info);

    case Module.Tip:
      info = component.data as TipInfo;
      return TipComponent(info);

    default:
      return panel([]);
  }
};

export const GenerateComponent = (
  componentInfo: ComponentListData[] | null,
): Panel => {
  if (componentInfo === null || componentInfo.length === 0) {
    return NoChangesComponent();
  }

  const output: Component[] = [];
  let moduleName = componentInfo[0].module;

  // find List components
  for (const item of componentInfo) {
    if (moduleName !== item.module) {
      output.push(divider());
      moduleName = item.module;
    }
    const p = handleComponents(item);
    if (!p || p.children.length === 0) {
      continue;
    }
    output.push(p);
  }

  return panel(output);
};
