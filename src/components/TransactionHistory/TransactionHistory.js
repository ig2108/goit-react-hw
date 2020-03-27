import React from 'react';
import PropTypes from 'prop-types';
import Transaction from '../Transaction/Transaction';
import styles from './TransactionHistory.module.css';

function TransactionHistory({ transactions = [] }) {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.header}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr className={styles.data} key={transaction.id}>
            <Transaction {...transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
