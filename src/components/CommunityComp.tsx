import { Box,Container,Grid,styled, Typography, Theme, AppBar} from "@material-ui/core";
import ReactGA from "react-ga";
import React from "react";
import { CommunityBox } from "../components/CommunityBox";
import {CompanyBox} from "../components/CompanyBox"
import { PitchBox } from "../components/PitchBox";
import { Company, companies} from "../constants/company";
import { Community, communities} from "../constants/community";

import { Pitch, pitches } from "../constants/pitches";
import { theme } from "../theme";

  
  
  

  
const StyledContainer = styled(Grid)({
float:'none',
width:'80%',
marginLeft:'auto',
marginRight:'auto'
});

const CompaniesContainer = styled(Container)({
    height:'80%',
    width:'40%',
    float:'left'
  });

  const CommunitiesContainer = styled(Container)({
    height:'80%',
    float:'right',
    width:'40%',
    marginLeft:'auto',
  marginBottom:'auto'
  });

const StyledTypography = styled(Typography)({
  marginBottom:'4rem'
})
  
  interface Props {
    onClick?: () => void;
  }
  
export const Communitycomp: React.FC<Props> = (props: Props) => {
  
  ReactGA.pageview('home');
  
  const [counter, setCounter] = React.useState(0);
  
  return (
     
  
    <StyledContainer direction='row' alignItems='center'>
        <CompaniesContainer>
      <StyledTypography color={'textSecondary'} variant ='subtitle1' >COMPANIES</StyledTypography>
      {Object.values(companies).map((company: Company, index: number) => (
        <Grid item xs={5} key={`company-${index}`} direction="column">
          <CompanyBox company={company} />
        </Grid>
      ))}       
      </CompaniesContainer>
      <CommunitiesContainer>
      <StyledTypography color={'textSecondary'} variant ='subtitle1' >COMMUNITIES</StyledTypography>
      {Object.values(communities).map((community: Community, index: number) => (
        <Grid item xs={5} key={`community-${index}`} direction="column">
          <CommunityBox community={community} />
        </Grid>
      ))}       
      </CommunitiesContainer>
    
  </StyledContainer>
    
  
  
  
  );
};