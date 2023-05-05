import styled, { css } from "styled-components/native";
import { SafeAreaView } from 'react-native';

export type TileTypeStyleProps = boolean;

type Props = {
  isGoodDiet: TileTypeStyleProps;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 24px;
  align-items: center;
`;

export const Title = styled.Text<Props>`
    margin-top: 140px;
    color: ${({ theme, isGoodDiet }) => isGoodDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK };
    text-align: center;
    ${({ theme}) => css`
        font-size: ${theme.FONT_SIZE.TMB}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;

export const SubTitle = styled.Text`
      ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.BMR}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_2};
    `}
    text-align: center;
    margin-top: 10px;
`;

export const Image = styled.Image`
  width: 224px;
  height: 288px;
  margin-top: 20px
`;

export const ButtonView = styled.View`
  flex: 1;
  padding: 24px;
  width: 95%;
  margin-top: 25px;
`;