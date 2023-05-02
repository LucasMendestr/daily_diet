import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Plus } from "phosphor-react-native";

export const Container = styled.TouchableOpacity`
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

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BS}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
    size: 18,
    color: theme.COLORS.WHITE
  }))``;