import styled, { css } from "styled-components/native";
import { Plus, Trash, PencilSimpleLine, } from "phosphor-react-native";

export type isDisable = boolean;
export type iconP = string;

type Props = {
  isDisable?: isDisable;
  iconP?: iconP;
}

export const Container = styled.TouchableOpacity<Props>`
  flex: 1;
  min-height: 50px;
  max-height: 50px;
  background-color: ${({ theme, isDisable }) => isDisable  ? theme.COLORS.GRAY_7 : theme.COLORS.GRAY_2};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin: 10px;
  flex-direction: row;
  border-width: 1px;
`;

export const Title = styled.Text<Props>`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BSR}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  color: ${({ theme, isDisable }) => isDisable  ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_7};
  margin-left: 10px;
`;

export const PlusIcon = styled(Plus).attrs<Props>(({ theme, isDisable }) => ({
  size: 24,
  color: isDisable ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE,
}))<Props>``;

export const TrashIcon = styled(Trash).attrs<Props>(({ theme, isDisable }) => ({
  size: 24,
  color: isDisable ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE,
}))<Props>``;

export const PencilIcon = styled(PencilSimpleLine).attrs<Props>(({ theme, isDisable }) => ({
  size: 24,
  color: isDisable ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE,
}))<Props>``;