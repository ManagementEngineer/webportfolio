import { Typography, Link, Grid } from "@mui/material";
import Header from "../Header";
import Image from 'next/image';
import PortfolioCard from "./PortfolioCard";

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
    ]
    return (
        <>
            <section id="#portfolio">
                <Grid container sx={{ margin: 2 }}>
                    <Grid item xs={12}>
                        <Header title='Potfolio' />
                    </Grid>
                    {projects.map((project) => (
                        <Grid item xs={6}>
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