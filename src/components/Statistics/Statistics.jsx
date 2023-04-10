import PropTypes from 'prop-types';

import {
  StatisticsSection,
  StatList,
  Label,
  Percentage,
  Title,
} from './Statistics.styled';

export default function Statistics({ title, data }) {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}

      <StatList>
        {data.map(item => (
          <li key={item.id} className="item">
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}%</Percentage>
          </li>
        ))}
      </StatList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
