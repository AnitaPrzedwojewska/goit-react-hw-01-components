import styled from 'styled-components';
// import randomColor from 'randomcolor';

export const StatsCard = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
  background-color: lightcyan;
  border-radius: 10px;
  overflow: hidden;
`;

export const Title = styled.h2`
  display: block;
  margin: 0 auto;
  font-size: 1.6em;
`;

export const StatList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style-type: none;
  margin-block: 0;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: lightblue;
`;

export const Label = styled.span`
  font-size: 14px;
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
