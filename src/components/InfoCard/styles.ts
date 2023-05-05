import { TouchableOpacity, View } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  background-color: ${({ theme}) =>  theme.COLORS.GRAY_6};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin-bottom: 12px;
  height: 89px;
  width: 85%;
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
`;