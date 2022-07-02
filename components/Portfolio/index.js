import { Grid, Typography } from "@mui/material";
import TextDecrypt from "../Utilities/TextDecrypt";
import PortfolioCard from "./PortfolioCard";
import Header from "../Header";

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: 'Fantasy League Lottery',
            description: `A fantasy draft lottery generator. `,
            alter: 'Fantasy League Lottery',
            image: '/static/images/og_fantasysports.png',
        },
        {
            id: 2,
            title: 'Portfolio',
            description: `An advocacy project website built using
          MEAN stack with fact-checking tool to promote actions against
          fake news.`,
            alter: 'VeriTru Project',
            image: '/static/images/og_fantasysports.png',
        },
        {
            id: 3,
            title: 'Fantasy League Lottery',
            description: `A fantasy draft lottery generator. `,
            alter: 'Fantasy League Lottery',
            image: '/static/images/og_fantasysports.png',
        },
        {
            id: 4,
            title: 'Portfolio',
            description: `An advocacy project website built using
          MEAN stack with fact-checking tool to promote actions against
          fake news.`,
            alter: 'VeriTru Project',
            image: '/static/images/og_fantasysports.png',
        },
    ];

    return (
        <>
            <section id="#portfolio">
                <Header title='Portfolio' />
                <Grid container xs={12}>
                    {projects.map((project) => (
                        <Grid item xl={6} sx={{ height: '85vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <TextDecrypt text={project.title} variant='h4' alignment='left' />
                            <PortfolioCard title={project.title} image={project.image} description={project.description} />
                        </Grid>
                    )
                    )}
                </Grid>
            </section>
        </>
    )
};

export default Portfolio;