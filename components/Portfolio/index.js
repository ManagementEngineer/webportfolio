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
            description: `Asdadsadsa`,
            alter: 'VeriTru Project',
            image: '/static/images/og_fantasysports.png',
        },
        {
            id: 3,
            title: 'Portfolio',
            description: `Asdadsadsa`,
            alter: 'VeriTru Project',
            image: '/static/images/og_fantasysports.png',
        },
        {
            id: 4,
            title: 'Portfolio',
            description: `Asdadsadsa`,
            alter: 'VeriTru Project',
            image: '/static/images/og_fantasysports.png',
        },
    ]
    return (
        <>
            <section id="portfolio">
                <Grid container>
                    <Grid item xs={12}>
                        <Header title='Portfolio' />
                    </Grid>
                    {projects.map((project) => (
                        <Grid item xs={12} s={12} m={4} l={4} xl={4} key={project.id} sx={{ padding: 2 }}>
                            <PortfolioCard title={project.title} image={project.image} description={project.description} id={project.id} />
                        </Grid>
                    )
                    )}

                </Grid>
            </section>
        </>
    )
};

export default Portfolio;