import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  margin: 5vh auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
  width: 40%;
`;

export const HeadersRow = styled.tr`
  font-size: 1.5rem;
  text-align: center;
`;

export const ColumnHeader = styled.th`
  padding: 1rem 0;
  background-color: #02bbd7;
  color: #fff;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
`;

export const ValuesRow = styled.tr`
  color: #8a8b8e;
  font-size: 2rem;
  text-align: center;

  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TransactionData = styled.td`
  padding: 1rem 0;
`;

export const AmountData = styled(TransactionData)`
  width: 30%;
`;

export const CurrencyData = styled(TransactionData)`
  width: 30%;
`;