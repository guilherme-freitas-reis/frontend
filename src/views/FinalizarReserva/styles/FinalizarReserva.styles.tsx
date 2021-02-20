import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 flex: 1;
 justify-content: center;

 @media(max-width: 768px) {
   flex-direction: column;
 }
`;
