import Header from "../components/Header";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";

const About = (props) => {
    return (
        <>
            <>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Sidebar />
                    </Grid>
                    <Grid item xs={8} >
                        <Header title='Contact' />
                    </Grid>
                </Grid>
            </>
        </>
    )
};
export default About;
