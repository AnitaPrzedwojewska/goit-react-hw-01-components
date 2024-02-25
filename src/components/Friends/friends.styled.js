import styled from 'styled-components';

export const Friends = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`;

export const Friend = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: lightgreen;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 5px;
  padding: 5px 10px;
`;

export const Status = styled.span``;

export const Avatar = styled.img`
  max-height: 48px;
  margin-right: 20px;
`;

export const Name = styled.p`
  font-size: 1.2em;
  font-weight: medium;
`;