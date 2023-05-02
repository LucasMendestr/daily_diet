import styled, { css } from "styled-components/native";
import { SafeAreaView } from 'react-native';
import { ArrowLeft } from "phosphor-react-native";

export type StatsTypeStyleProps = boolean;

type Props = {
  isGoodDiet: StatsTypeStyleProps;
}

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, isGoodDiet }) => isGoodDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const ArrowIcon = styled(ArrowLeft).attrs<Props>(({ theme, isGoodDiet }) => ({
  size: 24,
  color: isGoodDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))<Props>``;

export const HeaderA = styled.View`
  flex: 1;
`;

export const Percent = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.TG}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_1};
    `}
`;

export const SubTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.BS}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_2};
    `}
`;
