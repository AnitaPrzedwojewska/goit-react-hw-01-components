import {
  Transactions,
  Transaction,
  HeaderEntry,
  Entry,
} from './transactions.styled';
import PropTypes from 'prop-types';

const TransactionItem = ({ id, item, index }) => (
  <Transaction index={index}>
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
        <TransactionItem
          key={item.id}
          item={item}
          index={(items.indexOf(item) + 1) % 2}
        />
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
