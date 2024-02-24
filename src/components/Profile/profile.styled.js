import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 240px;
  margin: 10px;
  background-color: yellow;
  border: 1px black;
  border-radius: 10px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  witdh: 100%;
  margin: 0;
  padding: 20px;
  background-color: pink;
  border: 1px black;
  border-radius: 10px;
`;

export const Avatar = styled.img`
  width: 50%;
  margin: 0 auto;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  font-size: 16px;
  margin-bottom: 6px;
`;

export const Location = styled.p`
  font-size: 16px;
  margin-bottom: 6px;
`;

export const Stats = styled.ul`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin-block: 0;
  padding-inline-start: 0;
`;

export const Stat = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

export const Label = styled.span`
  font-size: 12px;
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
