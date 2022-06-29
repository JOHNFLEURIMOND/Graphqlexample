import React, { useEffect, useRef } from 'react';
import { MainHero, Title, TitleName, TitleProfession, TitleSpan, LeftHalf } from './index';
import { init } from 'ityped';
import { Animated } from 'react-animated-css';

const JFMainHero = (props) => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backSpeed: 60,
      backDelay: 1500,
      strings: ['Apollo', 'GraphQL', 'Material UI', 'Node', 'React', 'Styled-Compnents', 'Webpack'],
    });
  }, []);
  return (
    <Animated
      animationIn='fadeInLeft'
      animationOut='zoomOutDown'
      animationInDuration={4000}
      animationOutDuration={1000}
      isVisible={true}
    >
      <MainHero>
        <LeftHalf>
          <Title>Hi There,</Title>
          <TitleName>I'm John Fleurimond</TitleName>
          <TitleProfession>This is my project, using</TitleProfession>
          <TitleSpan ref={textRef}></TitleSpan>
        </LeftHalf>
      </MainHero>
    </Animated>
  );
};

export default JFMainHero;
