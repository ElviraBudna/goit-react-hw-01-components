import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border: 1px solid #eeeeee;
  max-width: 480px;
  background-color: #ffffff;
`;

export const TableHeadBox = styled.thead`
  width: 100%;
  background-color: #add8e6;
`;

export const TableRow = styled.tr`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #eeeeee;
`;

export const TableRowBody = styled.tr`
  width: 100%;
  display: flex;
  &:nth-of-type(2n) {
    background-color: #e0ffff;
  }
  border-bottom: 1px solid #eeeeee;
`;

export const Title = styled.th`
  display: block;
  width: calc(100% / 3);
  padding: 16px 0;
  font-weight: 600;
  font-size: 20px;
  color: #2f4f4f;
`;

export const TableBody = styled.tbody`
  width: 100%;
`;

export const TableText = styled.td`
  display: block;
  width: calc(100% / 3);
  padding: 16px 0;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  text-transform: capitalize;
`;
