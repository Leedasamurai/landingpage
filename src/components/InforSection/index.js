import React from 'react';
import { Button } from '../ButtonElement';
import { 
  InforContainer, 
  InforWrapper, 
  InforRow, 
  Column1,
  Column2,
  TextWrapper, 
  Topline, 
  Heading, 
  Subtitle, 
  BtnWrap, 
  ImgWrap, 
  Img
} from './InforElements';

const InfoSections = ({
  lightBg,
  id,
  imgStart,
  topline,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2
}) => {
  return (
    <>
    <InforContainer lightBg={lightBg} id={id}>
        <InforWrapper>
            <InforRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <Topline>{topline}</Topline>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <BtnWrap>
                        <Button to='home' 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}
                        >
                          {buttonLabel}
                          </Button>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                <ImgWrap>
                <Img src={img} alt={alt}/>
                </ImgWrap>
                </Column2>
            </InforRow>
        </InforWrapper>
    </InforContainer>
    </>
  )
}

export default InfoSections