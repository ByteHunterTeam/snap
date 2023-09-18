export type SimulateReq = {
  from: string;
  to: string;
  value: string;
  data: string;
  chainId: number;
  language: string;
  website: string | undefined;
  source: string;
};

export type SimulateRes = {
  code: number;
  error: string;
  time: number;
  data: SimulateData | null;
};

export type SimulateData = {
  gas_fee: string;
  method: string;
  record_id: string;
  risk_level: number;
  components: ComponentListData[];
};

export type ComponentListData = {
  module: string;
  data: Data;
};

export enum Module {
  Tip = 'tip',
  RiskList = 'risk_list',
  Message = 'message',
  Desc = 'desc',
  ContractInfo = 'contract_info',
  List = 'list',
}

export type Data =
  | ContractInfo
  | DescInfo
  | ListInfo
  | MessageInfo
  | RiskObj[]
  | TipInfo;

export type ContractInfo = {
  name: string;
  address: string;
};

export type DescInfo = {
  title: string;
  list: LabelValue[];
};

export type ListInfo = {
  title: string;
  chainID: number;
  list: ListItem[];
};

export type MessageInfo = {
  data: string;
};

export type TipInfo = {
  type: number;
  value: string;
};

export type RiskObj = {
  risk: number;
  title: string;
};

export type ListItem = {
  name: string;
  desc: string;
  image: string;
  amount: string;
  link: string;
};

export type LabelValue = {
  label: string;
  value: any;
};
