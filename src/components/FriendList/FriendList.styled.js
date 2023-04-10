import styled from '@emotion/styled';

export const FriendLists = styled.ul`
  margin: 0;
  padding: 32px 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  margin: 0 auto;
  border: 1px solid #eeeeee;
  max-width: 280px;
  background-color: #f8fbfe;
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  padding: 16px 0;
  font-weight: 700;
  font-size: 24px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 0;
  border-bottom: 1px solid #eeeeee;
  border-top: 1px solid #eeeeee;
  width: 100%;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;

  &:hover {
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    background-color: #e0ffff;
  }
`;

export const Status = styled.span`
  display: block;
  width: 12px;
  height: 12px;
  margin-left: 10px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'red' : 'green';
  }};
`;

export const Name = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 20px;
`;
