import { Typography, Link, Grid, List, ListItem, Button } from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { faTrainSubway, faCar } from '@fortawesome/free-solid-svg-icons';


import Header from "../Header";

const Engineering = () => {

    return (
        <>
            <section id="engineering">
                <Grid container sx={{ margin: 2 }}>
                    <Grid item xs={12}>
                        <Header title='Engineering' />
                    </Grid>
                    <Grid item xs={12}>
                        <Timeline position="alternate">
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Amazon
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot>
                                        <FontAwesomeIcon icon={faAmazon} />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h6" component="span">
                                        Amazon
                                    </Typography>
                                    <Typography>Because you need strength</Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    TTC
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot color="primary">
                                        <FontAwesomeIcon icon={faTrainSubway} />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h6" component="span">
                                        TTC
                                    </Typography>
                                    <Typography>
                                        • Classified failing door components by developing a predictive maintenance tool using machine learning techniques.
                                    </Typography>
                                    <Typography>
                                        • Eliminated leadscrew re-greasing problems to 0% by providing mean time between failures based on Weibull Analysis.
                                    </Typography>
                                    <Typography>
                                        • Reduced initial troubleshooting times by 50% by creating extensive FMEA documents for subway train doors.
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Toyota
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot color="primary" variant="outlined">
                                        <FontAwesomeIcon icon={faCar} />
                                    </TimelineDot>
                                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h6" component="span">
                                        Toyota
                                    </Typography>
                                    <Typography>
                                        • Converted paint facility by assisting in the execution of a $3 million project in preparation for the 2019 RAV4 launch while recovering two months of delayed goals and revising more than 400 sheets of mechanical drawings.
                                    </Typography>
                                    <Typography>
                                        • Installed 18 pallet attachment types by leading trials, modifying, and designing prototypes through AutoDesk Inventor.
                                    </Typography>
                                    <Typography>
                                        • Toyota Business Practice (TBP): Reduced average prototype installation times from 6 hours to 2 hours by investigating the root cause of failed paint pallet attachment prototypes, and proposing countermeasures and changes to the standardization of the design process.
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    York Region
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot color="primary" variant="outlined">
                                        <FontAwesomeIcon icon={faCar} />
                                    </TimelineDot>
                                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h6" component="span">
                                        York Region
                                    </Typography>
                                    <Typography>
                                        • Coordinated with fleet contractors by acting as the fleet management system administrator, responsible for troubleshooting and maintenance of York Region transit fleet buses.
                                    </Typography>
                                    <Typography>
                                        •  Designed a new fleet management systems front end and spearheaded User Acceptance Testing.
                                    </Typography>
                                    <Typography>
                                        • Trained more than 20 contractors and users of the new fleet management system.
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Loblaw Companies Limited
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot color="primary" variant="outlined">
                                        <FontAwesomeIcon icon={faCar} />
                                    </TimelineDot>
                                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h6" component="span">
                                        Loblaw Companies Limited
                                    </Typography>
                                    <Typography>
                                        • Reduced manual order rate by 17.37% by proposing new safety stock numbers for Deli products in three pilot stores.
                                    </Typography>
                                    <Typography>
                                        •  Saved an average of 6 minutes per product analysis by fixing inefficiencies in Loblaw automated ordering system.
                                    </Typography>
                                    <Typography>
                                        • Corrected the overall fill rate calculation by 0.6% by identifying and resolving Click-and-Collect system issue.
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Clearbridge Mobile
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot color="primary" variant="outlined">
                                        <FontAwesomeIcon icon={faCar} />
                                    </TimelineDot>
                                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h6" component="span">
                                        Clearbridge Mobile
                                    </Typography>
                                    <Typography>
                                        • Developed Web and Mobile automated testing using Selenium Webdriver for Android, and ChromeDriver.
                                    </Typography>
                                    <Typography>
                                        •  Tested and documented bugs of an on-going projects Mobile App, Database and Dashboard with the client identifying no major issue in the first two sprints of User Acceptance Testing.
                                    </Typography>
                                    <Typography>
                                        • Coordinated with product owner and developers to ensure that the development team is updated at any phase through scrums, sprint planning and retrospective.
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>

                        </Timeline>
                    </Grid>
                </Grid>
            </section>
        </>
    )
};
export default Engineering;