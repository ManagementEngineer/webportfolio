import { Typography, Link, Grid } from "@mui/material";
import Header from "../Header";
import Image from 'next/image';
import PortfolioCard from "../Portfolio/PortfolioCard";

const WritingPortfolio = () => {
    const projects = [
        {
            id: 1,
            title: 'How To Replace a Water Pump',
            description: `A service manual based on a popular Youtube video by ChrisFix. `,
            alter: 'How To Replace a Water Pump',
            image: '/static/images/water_pump.jpg',
            link: 'https://drive.google.com/file/d/1BOMpjGe-LvWDEmA8_tlnaCuHKjm6vz_J/view?usp=sharing'
        },
        {
            id: 2,
            title: 'De Souza Instititute Smart Scheduling Tool',
            description: `Technical paper for creating an automated course scheduling system for De Souza Institute `,
            alter: 'Subway Door Lead Screw Re-greasing Program',
            image: '/static/images/desouza.jpg',
            link: 'https://drive.google.com/file/d/19Vr8vtM5clyoAIX9JYZpo-afjUQmAvoS/view?usp=sharing'
        }

    ]
    return (
        <>
            <section id="writingportfolio">
                <Grid container sx={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Grid item xs={12}>
                        <Header title='Technical Writing' />
                    </Grid>
                    {projects.map((project) => (
                        <Grid item xs={12} s={12} m={3} l={3} xl={3} key={project.id} sx={{ padding: 2 }}>
                            <PortfolioCard title={project.title} image={project.image} description={project.description} link={project.link} id={project.id} />
                        </Grid>
                    )
                    )}

                </Grid>
            </section>
        </>
    )
};

export default WritingPortfolio;