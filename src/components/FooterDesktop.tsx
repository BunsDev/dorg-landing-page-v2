import {Grid, Link, makeStyles, styled, Typography} from '@material-ui/core'
import React from 'react'
import {borderStyles} from "../theme/styles";
import {theme} from "../theme";


const COPYRIGHT_TEXT = 'Copyright 2020, dorg.tech';
const EMAIL_ICON_PATH = '/imgs/footer/email-icon.svg';
const GITHUB_ICON_PATH = '/imgs/footer/github-logo.svg';
const KEYBASE_ICON_PATH = '/imgs/footer/keybase-logo.svg';
const TWITTER_ICON_PATH = '/imgs/footer/twitter-logo.svg';

const FooterContainer = styled(Grid)({
  height: '5vw',
  width: '100vw'
});

const IconContainer = styled(Link)({
  height: '1.5vw',
  marginRight: '0.7vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const StyledIcon = styled('img')({
  width: '1.25vw',
  height: 'auto',
  objectFit: 'contain',
  color: theme.palette.text.primary,
  "&:hover": {
    color: theme.palette.secondary.main
  },
  cursor: 'pointer'
});

const CopyrightText = styled(Typography)({
  height: '0.75vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.688vw',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.18,
  letterSpacing: 'normal',
  textAlign: "left",
  color: theme.palette.text.primary
});

const LeftContainer = styled(Grid)({
  width: '42.5vw',
  height: 'inherit',
  paddingLeft: '1.75vw'
});

const RightContainer = styled(Grid)({
  width: '42.5vw',
  height: 'inherit',
  paddingRight: '1.75vw'
});

const FooterMargin = styled(Grid)({
  maxWidth: '8vw',
  height: 'inherit'
});

const useBorders = makeStyles(borderStyles);

export const FooterDesktop: React.FC = () => {

  const borders = useBorders();

  return (
    <FooterContainer container justify='flex-start'>
      <FooterMargin item xs={1} className={borders.topBorder} />
      <LeftContainer container item xs={5} spacing={0} direction='row' justify="flex-start" alignItems='center' className={`${borders.topBorder} ${borders.leftBorder}`}>
        <CopyrightText>{COPYRIGHT_TEXT}</CopyrightText>
      </LeftContainer>
      <RightContainer container item xs={5} spacing={0} direction='row' justify="flex-end" alignItems='center' className={`${borders.topBorder} ${borders.leftBorder}`}>
        <Grid item>
          <IconContainer href="https://twitter.com/dOrg_tech" target="_blank" rel="noopener">
            <StyledIcon src={TWITTER_ICON_PATH}/>
          </IconContainer>
        </Grid>
        <Grid item>
          <IconContainer href="https://keybase.io/team/dorg.membrane" target="_blank" rel="noopener">
            <StyledIcon src={KEYBASE_ICON_PATH}/>
          </IconContainer>
        </Grid>
        <Grid item>
          <IconContainer href="https://github.com/dOrgTech" target="_blank" rel="noopener">
            <StyledIcon src={GITHUB_ICON_PATH}/>
          </IconContainer>
        </Grid>
        <Grid item>
          <IconContainer href="mailto:contact@dorg.tech" target="_blank" rel="noopener">
            <StyledIcon src={EMAIL_ICON_PATH}/>
          </IconContainer>
        </Grid>
      </RightContainer>
      <FooterMargin item xs={1} className={`${borders.topBorder} ${borders.leftBorder}`} />
    </FooterContainer>
  );
}