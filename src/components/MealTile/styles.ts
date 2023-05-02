import { TouchableOpacity, View } from "react-native";
import styled, { css } from "styled-components/native";

export type TileTypeStyleProps = boolean;

type Props = {
  isGoodDiet: TileTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  margin-bottom: 12px;
  border-width: 2px;
  border-color: black;
`;

export const Circle = styled(View)<Props>`
  width: 18px; 
  height: 18px; 
  border-radius: 10px;
  background-color: ${({ theme, isGoodDiet }) => isGoodDiet  ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.BXS}px;
      color: ${theme.COLORS.GRAY_1};
      font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.BM}px;
      color: ${theme.COLORS.GRAY_2};
      font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
  flex: 1;
`;

export const Divider = styled.View`
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  margin: 16px;
  border-width: 1px;
`;