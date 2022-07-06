import Header from "../components/Header";
import { Grid, Box } from "@mui/material";
import MurakamiFlower from "../components/MurakamiFlower";
import { motion } from "framer-motion";

const About = (props) => {
    return (
        <>
            <Grid container sx={{ height: '100vh', width: '100vw', flexDirection: 'row', backgroundColor: 'teal' }} component={motion.div}>
                <Grid item xl={3}>
                    <Box xs={12} sx={{ height: '100%', width: '100%', position: 'absolute' }} layoutId='flower' component={motion.div}>
                        <MurakamiFlower viewBox='0 0 180 180' overflow='hidden' />
                    </Box>
                </Grid>
                <Grid item xl={9}>

                </Grid>
            </Grid>
        </>
    )
};
export default About;
