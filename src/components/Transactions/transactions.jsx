import PropTypes from 'prop-types';

const TransactionItem = ({ item }) => (
  <tr>
    <td>{item.type}</td>
    <td>{item.amount}</td>
    <td>{item.currency}</td>
  </tr>
);

export const TransactionHistory = ({items}) => (
  <table class="transaction-history">
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
  </table>
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
