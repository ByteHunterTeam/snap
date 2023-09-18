import {
  Component,
  Panel,
  Text,
  heading,
  panel,
  text,
} from '@metamask/snaps-ui';
import { ListInfo, ListItem } from '../../models/ApiModels';
import { formatFiatValue } from '../../utils/utils';

const getAssetChangeText = (item: ListItem): Text => {
  const amount = item.amount ? item.amount : '';

  const name = item.name ? item.name : item.desc;

  if (item.desc.includes('$')) {
    item.desc = `$${formatFiatValue(item.desc.slice(1), 2)}`;
  }

  if (item.desc.includes('#')) {
    return text(`${amount} ${name}(${item.desc})`);
  }

  if (item.desc.includes('$') && item.desc.slice(1) !== "0") {
    return text(`${amount} ${name}(${item.desc})`);
  }

  return text(`${amount} ${name}`);
};

export const ListComponent = (info: ListInfo): Panel => {
  const output: Component[] = [heading(info.title)];

  info.list.forEach((item) => {
    const stateChangeText = getAssetChangeText(item);
    output.push(stateChangeText);
  });

  return panel(output);
};
