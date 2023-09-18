import {
  OnRpcRequestHandler,
  OnTransactionHandler,
} from '@metamask/snaps-types';
import {divider, panel, text} from '@metamask/snaps-ui';
import {fetchTransaction} from './http/fetchTransaction';
import {SUPPORTED_CHAINS} from './consts/consts';
import {ChainId} from './models/chains';
import {RiskLevelComponent, GenerateComponent, ErrorComponent, UnsupportedChainComponent} from './components';

export const onRpcRequest: OnRpcRequestHandler = ({origin, request}) => {
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

export const onTransaction: OnTransactionHandler = async ({transaction, chainId, transactionOrigin,}) => {
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
      RiskLevelComponent(response.data.risk_level, response.data.gas_fee),
      divider(),
      GenerateComponent(response.data.components),
    ]),
  };
};
