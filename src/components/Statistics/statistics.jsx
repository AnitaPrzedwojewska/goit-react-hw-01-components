import {
  StatsCard,
  Title,
  StatList,
  StatItem,
  Label,
  Quantity,
} from './statistics.styled';
import randomColor from 'randomcolor';
import PropTypes from 'prop-types';

export const Statistics = ({ title = 'Upload stats', stats }) => (
  <StatsCard>
    <Title>Upload stats</Title>
    <StatList>
      {stats.map(stat => (
        // const color=getRandomHexColor();
        <StatItem color={randomColor}>
          <Label>{stat.label}</Label>
          <Quantity>{stat.percentage}%</Quantity>
        </StatItem>
      ))}
    </StatList>
  </StatsCard>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
