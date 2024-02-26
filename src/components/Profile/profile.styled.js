import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1em 0;
  background-color: yellow;
  border: 1px black;
  border-radius: 10px;
  overflow: hidden;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 1.2em;
  background-color: lightgoldenrodyellow;
  font-size: 1em;
`;

export const Avatar = styled.img`
  width: 50%;
  margin-bottom: 1em;
`;

export const Name = styled.p`
  font-size: 1.4em;
  font-weight: bold;
  margin-bottom: 0.6em;
`;

export const Tag = styled.p`
  margin-bottom: 0.6em;
`;

export const Location = styled.p`
  margin-bottom: 0.6em;
`;

export const Stats = styled.ul`
  width: 100%;
  padding: 0.6em 1.2em;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  margin-block: 0;
  padding-inline-start: 0;
`;

export const Stat = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  font-size: 12px;
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
