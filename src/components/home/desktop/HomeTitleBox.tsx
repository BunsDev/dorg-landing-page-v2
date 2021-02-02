import React from 'react'
import {Grid, makeStyles, styled, Typography,} from '@material-ui/core'
import { theme } from "../../../theme";


const StyledGrid = styled(Grid)({
  width: 'max-content',
  height: 'max-content',
  padding: '0 0.5vw',
  background: theme.palette.primary.main,
  boxSizing: 'border-box'
});

const TitleTextPrimary = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '1.75vw',
  fontWeight: 'bold',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-0.84px',
  textAlign: "left",
  color: theme.palette.text.primary
});

const TitleTextSecondary = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '1.75vw',
  fontWeight: 'bold',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: '-0.84px',
  textAlign: "left",
  color: theme.palette.text.secondary
});

const SubtitleText = styled(Typography)({
  marginTop: '0.813vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.875vw',
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: 'normal',
  textAlign: "left",
  color: theme.palette.text.primary
});

interface Props {
  titleTextPrimary: string;
  titleTextSecondary: string;
  subTitleText: string;
  titleColorPrimary?: string;
  titleColorSecondary?: string;
  classes?: string;
}

export const HomeTitleBox: React.FC<Props> = (props: Props) => {

  const colors = makeStyles({
    textPrimary: {
      color: props.titleColorPrimary ? props.titleColorPrimary : theme.palette.text.primary
    },
    textSecondary: {
      color: props.titleColorSecondary ? props.titleColorSecondary : theme.palette.text.secondary
    }
  })();

  return (
    <StyledGrid className={props.classes} container direction={'column'} spacing={0} justify={'flex-start'} alignItems={'flex-start'}>
      <Grid item container direction={'row'} spacing={0} justify={'flex-start'} alignItems={'flex-start'}>
        <Grid item>
          <TitleTextPrimary className={colors.textPrimary}>{props.titleTextPrimary}</TitleTextPrimary>
        </Grid>
        <Grid item>
          <TitleTextSecondary className={colors.textSecondary}>&nbsp;{props.titleTextSecondary}</TitleTextSecondary>
        </Grid>
      </Grid>
      <Grid item>
        <SubtitleText className={colors.textPrimary}>{props.subTitleText}</SubtitleText>
      </Grid>
    </StyledGrid>
  );
}