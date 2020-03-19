import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';
export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SignInButton = styled(CustomButton)`
  @media screen and (max-width: 800px) {
    margin-top: 5px;
    width: 238px;
  }
`;
