import styled from 'styled-components';

export const Friends = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 0.8em;
`;

export const Friend = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: lightgreen;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 0.2em;
  padding: 0.6em 1.2em;
`;

export const Status = styled.span`
  display: block;
  width: 1em;
  height: ${props => (props.isOnline ? '1' : '0.2')}em;
  margin-right: 20px;
  border-radius: ${props => (props.isOnline ? '100' : '0')}%;
  /* color: ${props => (props.isOnline ? 'green' : 'red')}; */
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  max-height: 48px;
  margin-right: 20px;
`;

export const Name = styled.p`
  font-size: 1.2em;
  font-weight: medium;
`;
