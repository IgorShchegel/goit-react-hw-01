import css from './TransactionHistory.module.css'

const TransactionHistory = ({items}) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.head}>Type</th>
          <th className={css.head}>Amount</th>
          <th className={css.head}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(transaction => (
          <tr key={transaction.id}>
            <td className={css.body}>{transaction.type}</td>
            <td className={css.body}>{transaction.amount}</td>
            <td className={css.body}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TransactionHistory