import {
  Transactions,
  Transaction,
  HeaderEntry,
  Entry,
} from './transactions.styled';
import PropTypes from 'prop-types';

const TransactionItem = ({ item }) => (
  <Transaction>
    <Entry>{item.type}</Entry>
    <Entry>{item.amount}</Entry>
    <Entry>{item.currency}</Entry>
  </Transaction>
);

export const TransactionHistory = ({ items }) => (
  <Transactions>
    <thead>
      <tr>
        <HeaderEntry>Type</HeaderEntry>
        <HeaderEntry>Amount</HeaderEntry>
        <HeaderEntry>Currency</HeaderEntry>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <TransactionItem item={item} />
      ))}
    </tbody>
  </Transactions>
);

TransactionItem.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
