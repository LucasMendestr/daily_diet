import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export type CardTypeStyleProps = boolean;

type Props = {
  isGoodDiet: CardTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  padding: 24px;
  height: 136px;
  background-color: ${({ theme, isGoodDiet }) => isGoodDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 6px;
  justify-content: center;
`;


export const ArrowIcon = styled(ArrowUpRight).attrs<Props>(({ theme, isGoodDiet }) => ({
  size: 24,
  color: isGoodDiet  ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))<Props>``;


export const FirsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const PerctText = styled.Text`
    justify-content: center;
    text-align: center;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.TGB}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `}
`;

export const Title = styled.Text`
    text-align: center;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.BSR}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_2};
    `}
`;

export const ArrowButton = styled.View`
  position: absolute;
  top: 0;
  right: 0;
`;