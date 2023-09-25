import { Json } from '@metamask/snaps-types';
import {
  SimulateReq,
  SimulateRes,
} from '../models/ApiModels';
import { mapChainId } from '../utils/utils';
import { BASE_URL } from '../consts/consts';

export const fetchTransaction = async (
  transaction: {
    [key: string]: Json;
  },
  chainId: string,
  transactionOrigin: string | undefined,
): Promise<SimulateRes> => {
  try {
    const requestURL = `${BASE_URL}/recognizeTx`;

    const simulateRequest: SimulateReq = {
      chainId: mapChainId(chainId),
      from: transaction.from as string,
      to: transaction.to as string,
      value: transaction.value as string,
      data: transaction.data as string,
      language: 'en',
      website: transactionOrigin?.replace('https://', ''),
      source: 'SNAP',
    };

    const response = await fetch(requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(simulateRequest),
    });

    const data: SimulateRes = await response.json();

    return data;
  } catch (e: any) {
    const result: SimulateRes = {
      code: 400,
      error: e,
      time: 0,
      data: null,
    };

    return result;
  }
};
