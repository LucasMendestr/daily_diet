import styled, { css } from "styled-components/native";
import { SafeAreaView, View } from 'react-native';
import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export type StatsTypeStyleProps = boolean;

type Props = {
  isGoodDiet: StatsTypeStyleProps;
}

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, isGoodDiet }) => isGoodDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const ButtonIcon = styled(TouchableOpacity)`
  position: absolute;
  top: 35px;
  left: 24px;
`;

export const ArrowIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_2,
}))`
`;

export const HeaderA = styled.View`
  margin-top:10px;
  flex:1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10px;
`;

export const Body = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_7 };
  flex: 10;
  border-radius: 20px;
  padding-left: 30px;
  padding-top: 30px;
`;

export const TitleA = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.TSB}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `}
`;

export const SubTitleA = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.BMR}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_2};
    `}
    margin-top: 10px;
`;

export const TitleB = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.BSR}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `}
    padding-top: 20px;
`;

export const SubTitleB = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.BMR}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_1};
    `}
    padding-top: 5px;
`;

export const MCard = styled.View`
  width: 144px;
  height: 34px;
  border-radius: 1000px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5 };
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  flex-direction: row;
`;

export const Circle = styled(View)<Props>`
  width: 8px; 
  height: 8px; 
  border-radius: 10px;
  background-color: ${({ theme, isGoodDiet }) => isGoodDiet  ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const MCardText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.BSR}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_1};
    `}
    margin-left: 10px;
`;

export const ButtonView = styled.View`
  flex: 1;
  padding: 24px;
  width: 100%;
  margin-top: 280px;
  padding: 25px;
`;

export const Button2 = styled(TouchableOpacity)`
  flex: 1;
  min-height: 50px;
  max-height: 50px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_2};
  `};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;