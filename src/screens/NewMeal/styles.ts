import styled, { css } from "styled-components/native";
import { SafeAreaView, View } from 'react-native';
import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export type TileTypeStyleProps = boolean;

type Props = {
    isSelect : TileTypeStyleProps;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const HeaderA = styled.View`
  margin-top:10px;
  flex:1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10px;
`;

export const ButtonIcon = styled(TouchableOpacity)`
  position: absolute;
  top: 30px;
  left: 25px;
`;

export const ArrowIcon = styled(ArrowLeft)`
  size: 24px;
  color: ${({ theme }) => theme.COLORS.GRAY_2 };
`;

export const TitleHeader = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.TSB}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `}
`;

export const Body = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_7 };
  flex: 10;
  border-radius: 20px;
  align-items: center;
`;

export const Label = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.TSB}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `}
`;

export const Input = styled.TextInput`
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_1 };
  border-radius: 6px;
  margin-top: 5px;
  padding: 8px;
  margin-bottom: 16px;
  width: 80%;
  text-align: left;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  width: 85%;
`;

export const DataBox = styled.View`
  align-items: center;
  width: 43%;
  margin: 10px;
`;

export const DataTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.TSB}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `}
`;

export const DataShow = styled(TouchableOpacity)`
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_1 };
  border-radius: 6px;
  padding: 8px;
  margin-bottom: 16px;
  height: 48px;
  margin: 10px;
  width: 100%;
`;

export const TextDataShow = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.TSB}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `}
`;

export const OpCardG = styled(TouchableOpacity)<Props>`
  background-color: ${({ theme, isSelect }) => isSelect ? theme.COLORS.GREEN_LIGHT : theme.COLORS.GRAY_6 };
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin: 5px;
  margin-bottom: 12px;
  height: 50px;
  flex: 1;
  flex-direction: row;
`;

export const OpCardR = styled(TouchableOpacity)<Props>`
  background-color: ${({ theme, isSelect }) => isSelect ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_6 };
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin: 5px;
  margin-bottom: 12px;
  height: 50px;
  flex: 1;
  flex-direction: row;
`;

export const CircleG = styled(View)`
  width: 8px; 
  height: 8px; 
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
`;

export const CircleR = styled(View)`
  width: 8px; 
  height: 8px; 
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.RED_DARK};
`;

export const OpCardText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.BXSB}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `}
    margin-left: 8px;
`;

export const ButtonView = styled.View`
  flex: 1;
  padding: 24px;
  width: 95%;
  margin-top: 130px;
`;