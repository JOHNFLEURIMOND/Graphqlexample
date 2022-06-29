import styled, { css } from 'styled-components';
import { fleurimondColors } from '../layout/styles/theme.js';

export const CardWrapper = styled.div`
  overflow: hidden;
  margin: 48px auto;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  border-radius: 5px;
  border: 1px solid ${fleurimondColors.lightSmoke};
`;

export const CardHeader = styled.header`
  padding: 32px;
  cursor: context-menu;
  border-bottom: 1px solid ${fleurimondColors.lightSmoke};
`;

export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  cursor: context-menu;
  text-align: center;
`;

export const CardBody = styled.div`
  height: 425px;
  cursor: context-menu;
  background-color: white;
`;

export const PriceFieldset = styled.fieldset`
  position: relative;
  color: ${fleurimondColors.dutchieBlue};
  font-family: 'proxima-nova', 'sans-serif';
  font-size: 20px;
  font-weight: 400;
  padding: 0 32px;
  margin: 22px 0 0 0;
  border: 0;
`;

export const NameFieldset = styled.fieldset`
  color: ${fleurimondColors.black};
  font-size: 20px;
  position: relative;
  padding: 0 0 0 32px;
  margin-top: 12px;
  border: 0;
`;
export const StrainFieldset = styled.fieldset`
  border: 1px solid ${fleurimondColors.graySmoke};
  background-color: #eaeff4;
  border-radius: 3px;
  color: ${fleurimondColors.smoke};
  font-size: 14px;
  font-family: 'proxima-nova', 'sans-serif';
  font-weight: bold;
  margin: 20px 0 0 33px;
  position: relative;
  padding: 3px 7px 3px 18px;
  width: 10px;
`;

export const ThcCbdTitleFieldset = styled.span`
  display: inline-block;
  font-size: 15px;
  text-decoration: none;
  color: ${fleurimondColors.smoke};
  position: relative;
  padding: 0 32px;
  margin-top: 20px;
  border: 0;
`;
export const Bolt = styled.span`
  position: relative;
  margin: 50px;
  width: 30px;
  height: 50px;
  transform-origin: 50% 50%;
  transform: skewX(-30deg) skewY(-30deg) rotate(10deg);
  background-color: yellow;
  padding: 0;
  margin-left: 0;
  margin-right: 0;

  &:before {
    position: absolute;
    border-style: solid;
    border-width: 0 0 10px 5px;
    border-color: transparent transparent ${fleurimondColors.graySmoke} transparent;
    top: 0px;
    left: -11px;
    padding: 0;
    margin: 0;
    content: '';
  }

  &:after {
    display: inline-block;
    position: absolute;
    border-style: solid;
    border-width: 0 0 10px 5px;
    border-color: transparent transparent transparent ${fleurimondColors.graySmoke};
    bottom: 0px;
    right: 3px;
    content: '';
  }
`;
export const FlippedCardInfoFieldset = styled.span`
  color: ${fleurimondColors.smoke};
  display: block;
  font-size: 15px;
  width: 100%;
  font-family: 'proxima-nova', 'sans-serif';
  font-weight: 500;
  position: relative;
  padding: 0 10px;
  margin: 5px;
`;
