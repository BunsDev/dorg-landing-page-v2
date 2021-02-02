import React from 'react'
import {styled, Typography, Grid, makeStyles} from '@material-ui/core'
import {theme} from "../../../theme";


const StyledGrid = styled(Grid)({
  width: '100%',
  background: 'transparent',
  boxSizing: 'border-box'
});

const ListItem = styled(Grid)({
  width: '82vw',
  marginBottom: '6vw'
});

const StyleIcon = styled('img')({
  width: "3.55vw",
  height: "3.55vw",
  marginRight: '4vw',
  objectFit: "contain",
  float: 'left'
});

const BulletText = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '3.1vw',
  fontWeight: 500,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: 'normal',
  textAlign: "left",
  color: theme.palette.text.primary
});

interface Props {
  bullets: string[];
  textColor?: string;
  iconColorFilter?: string;
  classes?: string;
}

export const BulletsBoxMobile: React.FC<Props> = (props: Props) => {

  const styles = makeStyles({
    icon: {
      filter: props.iconColorFilter ? props.iconColorFilter : ''
    },
    text: {
      color: props.textColor ? props.textColor : theme.palette.text.primary
    }
  })();

  return (
    <StyledGrid className={props.classes} container spacing={0} direction='column' justify='flex-start' alignItems='flex-start'>
      {props.bullets.map((bullet: string, i: number) => (
        <ListItem item key={`bullet-${i}`}>
          <StyleIcon src={'imgs/check-circle.svg'} alt='circled check mark icon' className={styles.icon} />
          <BulletText className={styles.text}>{bullet}</BulletText>
        </ListItem>
      ))}
    </StyledGrid>
  );
}