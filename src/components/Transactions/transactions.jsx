import { Transactions, Transaction } from './transactions.styled';
import PropTypes from 'prop-types';

const TransactionItem = ({ item }) => (
  <Transaction>
    <td>{item.type}</td>
    <td>{item.amount}</td>
    <td>{item.currency}</td>
  </Transaction>
);

export const TransactionHistory = ({items}) => (
  <Transactions>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item) =>
        <TransactionItem
          item={item}
        />
      )}
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
  items: PropTypes.array
}
