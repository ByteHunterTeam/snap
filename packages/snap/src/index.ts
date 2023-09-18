import {
  OnRpcRequestHandler,
  OnTransactionHandler,
} from '@metamask/snaps-types';
import { divider, panel, text } from '@metamask/snaps-ui';
import { fetchTransaction } from './http/fetchTransaction';
import { ErrorComponent, UnsupportedChainComponent } from './components';
import { SUPPORTED_CHAINS } from './consts/consts';
import { ChainId } from './models/chains';
import { RiskLevelComponent } from './components/RiskLevelComponents';
import { GenerateComponent } from './components/GenerateComponent';

/**
 * Handle incoming JSON-RPC requests, sent through `wallet_invokeSnap`.
 *
 * @param args - The request handler args as object.
 * @param args.origin - The origin of the request, e.g., the website that
 * invoked the snap.
 * @param args.request - A validated JSON-RPC request object.
 * @returns The result of `snap_dialog`.
 * @throws If the request method is not valid for this snap.
 */

export const onRpcRequest: OnRpcRequestHandler = ({ origin, request }) => {
  switch (request.method) {
    case 'hello':
      return snap.request({
        method: 'snap_dialog',
        params: {
          type: 'confirmation',
          content: panel([
            text(`Hello, **${origin}**!`),
            text('Welcome to ByteHunter!'),
            text(
              'If you have any question, please contact to bytehunter@futurevista.work',
            ),
          ]),
        },
      });
    default:
      throw new Error('Method not found.');
  }
};

export const onTransaction: OnTransactionHandler = async ({
  transaction,
  chainId,
  transactionOrigin,
}) => {
  if (!SUPPORTED_CHAINS.includes(chainId as ChainId)) {
    return {
      content: UnsupportedChainComponent(),
    };
  }

  const response = await fetchTransaction(
    transaction,
    chainId,
    transactionOrigin,
  );

  if (response.data === null) {
    return {
      content: ErrorComponent(),
    };
  }

  return {
    content: panel([
      RiskLevelComponent(response.data.risk_level),
      divider(),
      GenerateComponent(response.data.components, response.data.gas_fee),
    ]),
  };
};
