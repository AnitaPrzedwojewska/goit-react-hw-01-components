import PropTypes from 'prop-types';

export const Statistics = ({ title = 'Upload stats', stats }) => (
  <section class="statistics">
    <h2 class="title">Upload stats</h2>
    <ul class="stat-list">
      {stats.map(stat => (
        <li class="item">
          <span class="label">{stat.label}</span>
          <span class="percentage">{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
