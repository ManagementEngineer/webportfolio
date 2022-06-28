import { useState, useEffect } from 'react';
import { Grid, Typography, keyframes } from '@mui/material';

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
            <Grid sx={{ minHeight: '15vh', paddingTop: 0, paddingBottom: 2, justifyContent: 'left', alignItems: 'center', display: 'flex', background: `linear-gradient(135deg, #A67D01, #CFAB38, #F8F0C9, #F6F9FC, #C8CACA, #A9AAAE)`, backgroundSize: '400% 400%', animation: `${gradient} 10s ease infinite` }} >
                <Typography variant='h2' component='div' align='center'
                    sx={{
                        fontWeight: 600,
                        animation: `${trackingInExpand} 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both`
                    }}>
                    {props.title}
                </Typography>
            </Grid>
        </>
    )

};

export default Header;