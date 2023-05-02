import styled, { css } from "styled-components/native";
import { SafeAreaView } from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 24px;
`;

export const Title = styled.Text`
    margin-top: 40px;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.BM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_1};
    `}
`;

export const TileHeader = styled.Text`
      ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.BM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_2};
    `}
    margin-top: 10px;
    margin-bottom: 5px;
`;