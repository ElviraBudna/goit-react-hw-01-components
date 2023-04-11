import styled from '@emotion/styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border: 1px solid #eeeeee;
  max-width: 280px;
  background-color: #ffffff;
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  padding: 16px 0;
  font-weight: 700;
  font-size: 24px;
`;

export const StatList = styled.ul`
  margin: 0;
  padding: 10px 0;
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #eeeeee;
  background-color: #f8fbfe;
`;

export const Item = styled.li`
  background: ${getRandomHexColor};
  width: calc(100% / 4);
  padding: 10px 0;
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 4px;
  font-size: 16px;
  text-align: center;
`;

export const Percentage = styled.span`
  display: block;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
`;
