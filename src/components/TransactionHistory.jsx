import style from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={style.row} key={id}>
            <td className={style.td}>{type}</td>
            <td className={style.td}>{amount}</td>
            <td className={style.td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
