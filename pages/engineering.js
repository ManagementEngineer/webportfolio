import Header from "../components/Header";
import { Grid } from "@mui/material";
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
                        <Header title='Engineering Work' />
                    </Grid>
                </Grid>
            </>
        </>
    )
};
export default About;
