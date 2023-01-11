import { Typography, Link, Grid } from "@mui/material";
import Header from "../Header";
import Image from 'next/image';
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: 'Fantasy League Lottery',
            description: `A fantasy draft lottery generator where users can randomly generate a draft order using different lottery balls and can share results using a unique draft lottery key.`,
            alter: 'Fantasy League Lottery',
            image: '/static/images/og_fantasysports.png',
            link: 'https://www.fantasyleaguelottery.com'
        },
        {
            id: 2,
            title: 'Yelp Camp',
            description: `Website to list and review camping sites. Built with JavaScript and NodeJS.`,
            alter: 'Yelp Camp',
            image: '/static/images/yelpcamp.png',
            link: 'https://yelp-camp-rj.herokuapp.com/'
        },
        {
            id: 3,
            title: 'Blog',
            description: `A blog site built with Python.`,
            alter: 'Blog',
            image: '/static/images/blog.png',
            link: 'https://rj-blog.herokuapp.com/'
        },
    ]
    return (
        <>
            <section id="portfolio">
                <Grid container sx={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Grid item xs={12}>
                        <Header title='Web Portfolio' />
                    </Grid>
                    {projects.map((project) => (
                        <Grid item xs={12} s={12} m={3} l={3} xl={3} sx={{ padding: 2 }} key={project.id}>
                            <PortfolioCard title={project.title} image={project.image} description={project.description} id={project.id} link={project.link} />
                        </Grid>
                    )
                    )}

                </Grid>
            </section>
        </>
    )
};

export default Portfolio;