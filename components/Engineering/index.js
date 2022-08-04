import { useState } from "react";
import { Typography, Link, Grid, List, ListItem, Button, Box } from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { faTrainSubway, faCar } from '@fortawesome/free-solid-svg-icons';


import Header from "../Header";
import EngineeringCarousel from "./EngineeringCarousel";
import CompanySelection from "./CompanySelection";
import JobDescription from "./JobDescription";

const Engineering = () => {
    const [work, setWork] = useState('Amazon');
    console.log(work);

    return (
        <>
            <section id="engineering">
                <Grid container sx={{ margin: 2 }}>
                    <Grid item xs={12}>
                        <Header title='Engineering' />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Grid container>
                                    <Grid item xs={12} sx={{ height: 500 }}>
                                        <EngineeringCarousel selectedWork={work} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <CompanySelection selectedWork={setWork} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <Box>
                                    <JobDescription selectedWork={work} />
                                </Box>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </section>
        </>
    )
};
export default Engineering;