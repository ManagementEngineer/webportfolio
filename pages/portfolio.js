import { Grid, Typography, Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import TextDecrypt from "../components/Utilities/TextDecrypt";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import MurakamiFlower from "../components/MurakamiFlower";
import greenPetal from '../public/static/images/greenPetal.svg';
import IndexArt from "../components/IndexArt/IndexArt";
import Header from "../components/Header";
import Image from 'next/image'
import Sidebar from "../components/Sidebar";

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
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Sidebar />
                </Grid>
                <Grid item xs={8} >
                    <Header title='Portfolio' />
                    {projects.map((project) => (
                        <Grid item xs={6} sx={{ height: '85vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <PortfolioCard title={project.title} image={project.image} description={project.description} />
                        </Grid>
                    )
                    )}
                </Grid>
            </Grid>
        </>
    )
};

export default Portfolio;