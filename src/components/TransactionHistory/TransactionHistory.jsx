import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TableHeadBox,
  TableRow,
  Title,
  TableText,
  TableBody,
  TableRowBody,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <section>
      <TransactionHistoryTable>
        <TableHeadBox>
          <TableRow>
            <Title>Type</Title>
            <Title>Amount</Title>
            <Title>Currency</Title>
          </TableRow>
        </TableHeadBox>

        <TableBody>
          {items.map(item => (
            <TableRowBody key={item.id}>
              <TableText>{item.type}</TableText>
              <TableText>{item.amount}</TableText>
              <TableText>{item.currency}</TableText>
            </TableRowBody>
          ))}
        </TableBody>
      </TransactionHistoryTable>
    </section>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
