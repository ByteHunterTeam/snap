import {
  Component,
  copyable,
  heading,
  panel,
  Panel,
  text,
} from '@metamask/snaps-ui';
import { ContractInfo } from '../models/ApiModels';

export const ContractInfoComponent = (info: ContractInfo): Panel => {
  const components: Component[] = [];

  if (info.name !== '') {
    components.push(text(`合约名字: ${info.name}`));
  }

  if (info.address !== '') {
    components.push(...[text('合约地址: '), copyable(`${info.address}`)]);
  }

  return panel([heading('交互合约信息'), ...components]);
};
