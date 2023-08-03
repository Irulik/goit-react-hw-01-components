
import {
  TransactionHistoryTable,
  HeadersRow,
  ColumnHeader,
  ValuesRow,
  TransactionData,
  AmountData,
  CurrencyData,
} from './TransactionHistory.styled';


export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <thead>
        <HeadersRow>
          <ColumnHeader>Type</ColumnHeader>
          <ColumnHeader>Amount</ColumnHeader>
          <ColumnHeader>Currency</ColumnHeader>
        </HeadersRow>
      </thead>
      <tbody>
        {items.map(item => (
          <ValuesRow key={item.id}>
            <TransactionData>{item.type}</TransactionData>
            <AmountData>{item.amount}</AmountData>
            <CurrencyData>{item.currency}</CurrencyData>
          </ValuesRow>
        ))}
      </tbody>
    </TransactionHistoryTable>
  );
};

export default TransactionHistory;