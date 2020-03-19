import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;

export const SignUpForm = styled.form`
  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;
