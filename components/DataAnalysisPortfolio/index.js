import { Typography, Link, Grid } from "@mui/material";
import Header from "../Header";
import PortfolioCard from "../Portfolio/PortfolioCard";
import Button from '@mui/material/Button';
import DACard from "../DataAnalysisPortfolio/DaCard";
import CardActions from '@mui/material/CardActions';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';


const DAPortfolio = () => {
    const projects = [
        {
            id: 1,
            title: 'AdventureWorks PowerBI Dashboard',
            description: `Created a complete PowerBI report to track KPIs, compare regional performance, analyze product-level trends, and identify
            high-value customers based on raw data.`,
            alter: 'AdventureWorks PowerBI Dashboard',
            images: [
                {
                    id: 1,
                    label: 'Executive Dashboard',
                    imgPath:
                    '/static/images/AW_page1.jpg',
                },
                {   
                    id: 2,
                    label: 'Map Dashboard',
                    imgPath:
                    '/static/images/AW_page2.jpg',
                },
                {   
                    id: 3,
                    label: 'Product Detail Dashboard',
                    imgPath:
                    '/static/images/AW_page3.jpg',
                },
                {
                    id: 4,
                    label: 'Customer Dashboard',
                    imgPath:
                    '/static/images/AW_page4.jpg',
                }
              ],
            link: 'https://drive.google.com/file/d/1tJTLvNAolBtPHngvwLkKTDFnhSIx6utb/view?usp=drive_link'
        },
        {
            id: 2,
            title: 'Maven Market Dashboard',
            description: `Created a dashboard based on 2 years of sample retail data.`,
            alter: 'Maven Market Dashboard',
            images: [
                {
                    id: 1,
                    label: 'Topline Performance',
                    imgPath:
                    '/static/images/MM_page1.png',
                },
              ],
            link: 'https://drive.google.com/file/d/1bHfoWGr0Vl61NrPcthOsLNCXyug9rtGi/view?usp=sharing'
        },
        {
            id: 3,
            title: 'DeSouza Smart Scheduling Tool',
            description: `Built statistical analysis models using Operations Research, Linear Regression, and Polynomial Regression to forecast future course enrollment and using Mixed Integer Programming algorithm to maximize revenue. Developed a full-stack application using Python and SQL to create an automated scheduling system with integrated optimized algorithms.`,
            alter: 'Yelp Camp',
            images: [
                {
                    id: 1,
                    label: 'Project Overview',
                    imgPath:
                    '/static/images/desouza_ss_tool.png',
                }
            ],
            link: 'https://drive.google.com/file/d/19Vr8vtM5clyoAIX9JYZpo-afjUQmAvoS/view'
        },
        {
            id: 4,
            title: 'Taylor Swift\'s Musical Diary: Unveiling Her Emotional Evolution in Lyrics',
            description: `Developed a sentiment analysis of Taylor Swift Songs using Recurrent Neural Network powered by NLP models.`,
            alter: 'Taylor Swift\'s Musical Diary: Unveiling Her Emotional Evolution in Lyrics',
            images: [
                {
                    id: 1,
                    label: 'Taylor\'s Song Distribution by Emotion',
                    imgPath:
                    '/static/images/taylor_1.png',
                },
                {   
                    id: 2,
                    label: 'A Famed Lyricist - Vocabulary of a Pop Star',
                    imgPath:
                    '/static/images/taylor_2.png',
                },
                {   
                    id: 3,
                    label: 'An Emotional Writer - Taylor\'s Emotional Song Variety Throughout her Discography',
                    imgPath:
                    '/static/images/taylor_3.png',
                },
                {
                    id: 4,
                    label: 'What Resonates to Swifties - Emotions by Stream Count',
                    imgPath:
                    '/static/images/taylor_4.png',
                }
              ],
            link: 'https://managementengineer.github.io/AASD4011-miniproject-part1/'
        },
    ]
      
    return (
        <>
            <section id="daportfolio">
                <Grid container >
                    <Grid item xs={12}>
                        <Header title='Data Analysis Portfolio' />
                    </Grid>
                    {projects.map((project) => (
                    <Grid container wrap='nowrap' key={project.id}>
                    <Grid item xs={12} s={12} m={6} l={6} xl={6}>
                        <DACard images={project.images}/>
                    </Grid>
                    <Grid item xs={12} s={12} m={6} l={6} xl={6}>
                        <Grid xl={12}>
                            <Typography variant='h3'>
                                {project.title}
                            </Typography>
                        </Grid>
                        <Grid xl={12}>
                            <Typography variant='body1'>
                                {project.description}
                            </Typography>
                        </Grid>
                        <Grid>
                            <CardActions>
                            {/* <Button size="small"><GitHubIcon fontSize='large' /></Button> */}
                            <Button size="small" href={project.link} target="_blank"><OpenInBrowserIcon fontSize='large' /></Button>
                            </CardActions>
                        </Grid>

                    </Grid>
                    </Grid>
                    )
                    )}
                </Grid>
            </section>
        </>
    )
};

export default DAPortfolio;