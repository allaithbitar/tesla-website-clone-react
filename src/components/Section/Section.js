import React from "react";
import { Fade } from "react-awesome-reveal";
import {
  ItemText,
  Wrap,
  LeftButton,
  RightButton,
  ButtonGroup,
  DownArrow,
  Buttons,
} from "./styles";

const Section = (props) => {
  const {
    title,
    description,
    rightButtonText,
    leftButtonText,
    backgroundImage,
  } = props;

  return (
    <Wrap bgImage={backgroundImage}>
      <Fade direction="up">
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Fade direction="up">
        <Buttons>
          <ButtonGroup>
            <LeftButton>{leftButtonText}</LeftButton>
            {rightButtonText && <RightButton>{rightButtonText}</RightButton>}
          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
      </Fade>
    </Wrap>
  );
};

export default Section;
