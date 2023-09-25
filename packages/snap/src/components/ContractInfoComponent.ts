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
    components.push(text(`Contract Name: ${info.name}`));
  }

  if (info.address !== '') {
    components.push(...[text('Contract Address: '), copyable(`${info.address}`)]);
  }

  return panel([heading('Contract Information'), ...components]);
};
