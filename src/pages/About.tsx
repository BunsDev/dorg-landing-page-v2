import React from "react";
import { useHistory } from 'react-router-dom'
import { Grid, styled } from "@material-ui/core";
import { StatBox } from "../components/StatBox";
import { PitchBox } from "../components/PitchBox";
import {PressBox} from "../components/PressBox";
import { Stat, stats } from "../constants/stats";
import { Pitch, pitches } from "../constants/pitches";
import {press} from "../constants/press";
import {AboutTitleBox} from "../components/AboutTitleBox";
import {PitchTitleBox} from "../components/PitchTitleBox";
import {CloseBox} from "../components/CloseBox";
import {routes} from "../constants/routes";


const ABOUT_TITLE = 'We are a full-stack Web3 development collective.';
const PITCHES_TITLE = 'What’s it like to work with us?';
const QUOTE_TEXT = 'dOrg helped me save 15% on car insurance.';
const QUOTE_CITATION = 'Satoshi - Bitcoin, Inc.';
const CLOSE_BUTTON_TEXT = 'GET IN TOUCH';

const Root = styled(Grid)({
  margins: 'auto',
  width: '100vw'
});

const ContentContainer = styled(Grid)({
  maxWidth: '85vw'
});

const StatsContainer = styled(Grid)({
  width: '100%'
});

const PitchesContainer = styled(Grid)({
  width: '100%'
});

export const About: React.FC = () => {

  const history = useHistory();
  const navigateToContactPage = () => history.push(routes.contact.path);

  return (
    <Root container spacing={0} direction='row' justify="flex-start" alignItems='flex-start'>
      <Grid item xs={1} style={{height: '100%', maxWidth: '7.5vw'}} />
      <ContentContainer container item xs={10} spacing={0} direction='row' justify="center" alignItems='flex-start'>
        <Grid item xs={12} lg={6}>
          <AboutTitleBox text={ABOUT_TITLE} />
          <PressBox press={press} />
        </Grid>
        <StatsContainer container item xs={12} lg={6} spacing={0} justify="center">
          {Object.values(stats).map((stat: Stat, index: number) => (
            <Grid item xs={6} key={`stat-${index}`}>
              <StatBox stat={stat} />
            </Grid>
          ))}
        </StatsContainer>
        <Grid item xs={12}>
          <PitchTitleBox text={PITCHES_TITLE} />
        </Grid>
        <PitchesContainer container item xs={12} spacing={0} justify="center">
          {Object.values(pitches).map((pitch: Pitch, index: number) => (
            <Grid item xs={12} lg={6} key={`pitch-${index}`}>
              <PitchBox pitch={pitch} />
            </Grid>
          ))}
        </PitchesContainer>
        <Grid item xs={12}>
          <CloseBox quote={QUOTE_TEXT} citation={QUOTE_CITATION} buttonText={CLOSE_BUTTON_TEXT} onButtonClick={navigateToContactPage} />
        </Grid>
      </ContentContainer>
      <Grid item xs={1} style={{height: '100%', maxWidth: '7.5vw'}} />
    </Root>
  );
}
