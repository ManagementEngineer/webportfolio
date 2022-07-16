import { useState, useEffect } from 'react';
import { Grid, Typography, keyframes, Divider, Box } from '@mui/material';

const Header = (props) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      //animation
      setAnimate(true);
    }, 500);
  }, []);

  const trackingInExpand = keyframes`
    0% {
        letter-spacing: -0.5em;
        opacity: 0;
      }
      40% {
        opacity: 0.6;
      }
      100% {
        opacity: 1;
      }
    `;

  const gradient = keyframes`
    0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
    `

  return (
    <>
      <Box sx={{ margin: 5 }}>
        <Typography text={props.title} variant='h3' align='left' > {props.title} </Typography>
        <Divider />
      </Box>

    </>
  )

};

export default Header;