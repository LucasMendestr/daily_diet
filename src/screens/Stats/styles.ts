import styled, { css } from "styled-components/native";
import { SafeAreaView } from 'react-native';
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
  top: 20px;
  left: 20px;
`;

export const ArrowIcon = styled(ArrowLeft).attrs<Props>(({ theme, isGoodDiet }) => ({
  size: 24,
  color: isGoodDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))<Props>`
`;

export const HeaderA = styled.View`
  margin-top:10px;
  flex:1;
  align-items: center;
  justify-content: center;
`;

export const Percent = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.TGB}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BSR}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`;

export const Body = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_7 };
  flex: 3;
  border-radius: 20px;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TSB}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
  margin-top: 20px;  
  margin-bottom: 20px;
`;

export const BodyRow = styled.View`
  flex-direction: row;
  width: 85%;
  
`;