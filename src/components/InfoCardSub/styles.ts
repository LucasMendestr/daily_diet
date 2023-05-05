import { TouchableOpacity, View } from "react-native";
import styled, { css } from "styled-components/native";

export type TileTypeStyleProps = string;

type Props = {
    color: TileTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  background-color: ${({ theme, color}) => 
    color === "GRAY" 
    ? theme.COLORS.GRAY_6 
    : color === "RED" 
    ? theme.COLORS.RED_LIGHT 
    : theme.COLORS.GREEN_LIGHT
    };
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin: 5px;
  margin-bottom: 12px;
  height: 107px;
  flex: 1;
`;


export const Title = styled.Text`
  ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.TMB}px;
      color: ${theme.COLORS.GRAY_1};
      font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.BSR}px;
      color: ${theme.COLORS.GRAY_2};
      font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
  flex: 1;
  text-align: center;
`;