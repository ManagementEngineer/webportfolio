import Header from "../components/Header";
import { Grid, Box, Typography } from "@mui/material";
import MurakamiFlower from "../components/MurakamiFlower";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";

const About = (props) => {
    return (
        <>
            <>
                <Grid container spacing={2} component={motion.div} layoutId='about'>
                    <Grid item xs={4}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={8} sx={{ background: '#febe4e' }}>
                        <Grid container>
                            <Grid item xs={12} sx={{ padding: 2 }}>
                                <Header title='About Me' />
                            </Grid>
                            <Grid item>
                                <Typography>kahsdkjbakjdbaksda</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </>
        </>
    )
};
export default About;
