import React from 'react'
import { Box, styled, Grid } from '@material-ui/core'
import { theme } from "../../../theme";
import {Article, Press} from "../../../constants/press";


const StyledBox = styled(Box)({
  margin: 'auto',
  width: '100%',
  height: '10.75rem',
  backgroundColor: theme.palette.secondary.main,
  boxSizing: 'border-box',
  position: 'relative'
});

const StyledGrid = styled(Grid)({
  width: '100%',
  height: '100%',
});

const StyledIcon = styled('img')({
  width: "7.5rem",
  height: "1.625rem",
  margin: 'auto',
  objectFit: "contain",
  background: 'transparent',
  display: 'block',
  position: 'relative',
  zIndex: 2
});

const StyledRings = styled('img')({
  width: '9.064rem',
  height: '9.171rem',
  objectFit: 'contain',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1
})

interface Props {
  press: Press;
  classes?: string;
}

export const PressBoxMobile: React.FC<Props> = (props: Props) => {
  return (
    <StyledBox className={props.classes}>
      <StyledRings src='imgs/concentric-rings-right.svg' alt={'concentric rings flourish'} />
      <StyledGrid container direction='row' spacing={0} justify='center' alignItems='center'>
        {Object.values(props.press).map((article: Article, index: number) => (
          <Grid item xs={6} key={`article-${index}`}>
            <a href={article.url} target='_blank' rel='noopener noreferrer'>
              <StyledIcon src={article.logo} srcSet={article.logo + ' 1x, ' + article.logo2x + ' 2x, ' + article.logo3x + ' 3x'} alt='icon' />
            </a>
          </Grid>
        ))}
      </StyledGrid>
    </StyledBox>
  );
}