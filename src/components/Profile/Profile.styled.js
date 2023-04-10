import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: 0 auto;
  border: 1px solid #eeeeee;
  max-width: 280px;
  background-color: #ffffff;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Name = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 700;
  font-size: 24px;
`;

export const Info = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 18px;
`;

export const Stats = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  display: flex;
  border-top: 1px solid #eeeeee;
  background-color: #f8fbfe;
`;

export const StatsBox = styled.li`
  padding: 10px;
  width: calc(100% / 3);
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 4px;
  font-size: 16px;
  text-align: center;
`;

export const Quantity = styled.span`
  display: block;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
`;
