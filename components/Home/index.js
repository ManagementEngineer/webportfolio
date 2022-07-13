import { Grid, Typography, Button, Container, Link } from "@mui/material";

const Home = () => {

    return (
        <section id="#home">
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '100vh', minHeight: '100vh' }}>
                <Grid item>
                </Grid>
                <Container>
                    <Grid item xs={12}>
                        <Typography variant='h6'>
                            Hi, my name is
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h2'>Ramuel Batuigas</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h3'>
                            I build things for the web.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6'>
                            I'm a <Link href='https://uwaterloo.ca/future-students/programs/management-engineering'>Management Engineer</Link> with a knack of creating tools to make life easier.
                        </Typography>
                    </Grid>
                    <Button variant='contained'><Typography>Contact Me</Typography></Button>
                    <Button variant='outlined'><Typography>Resume</Typography></Button>
                </Container>
            </Grid>
        </section>
    );

}
export default Home;