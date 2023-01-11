import { Typography, Link, Grid } from "@mui/material";
import Header from "../Header";
import PortfolioCard from "../Portfolio/PortfolioCard";

const EngineeringPortfolio = () => {
    const projects = [
        {
            id: 1,
            title: 'PFSD Process Improvement ',
            description: `Increased capacity by 21% and reduced process touchpoints by 50% by simplifying Prime Free Same Day (PFSD) process paths, resulting in an additional 134,000 same-day packages dispatched annually. `,
            alter: 'DTO1 PFSD Process Improvement',
            image: '/static/images/amazon.svg',
            link: 'https://drive.google.com/file/d/1QenXNwIvjNgwQM8gF7-hRU_r7F7KIDMb/view?usp=sharing'
        },
        {
            id: 2,
            title: 'PNOV Report Automation',
            description: `Automated Parcel-Not-On-Van reports which saved more than 42 working minutes for all PFSD managers across Canada.`,
            alter: 'DTO1 PFSD End of Shift Reports',
            image: '/static/images/amazon.svg',
            link: 'https://drive.google.com/file/d/1dmZBnzSN04gCfeTEaStxcn3qCOO7jpvJ/view?usp=sharing'
        },
        {
            id: 3,
            title: 'Subway Door Lead Screw Re-greasing Program Analysis',
            description: `Analysis on subway door leadscrew regreasing procedure to minimize closing speed adjustment fault on subway train doors. `,
            alter: 'Subway Door Lead Screw Re-greasing Program',
            image: '/static/images/ttc.svg',
            link: 'https://drive.google.com/file/d/1diu3jHKRJUBMIYiBxUqGRG_TtK2KAgCw/view?usp=sharing'
        },
        {
            id: 4,
            title: 'Toyota Business Practice - Field Check',
            description: `Root Cause Analysis on the design failure of attachment prototypes for paint equipments in the launch of the 2019 RAV4. `,
            alter: 'Toyota Business Practice - Field Check',
            image: '/static/images/toyota.svg',
            link: 'https://docs.google.com/spreadsheets/d/1wtMk6V2Z2ktHSVXZBRabOvUZFnVjZtYw/edit?usp=sharing&ouid=102488517357084635908&rtpof=true&sd=true'
        },
        {
            id: 5,
            title: 'Sample Countermeasures for Paint Production Issues',
            description: `Designed an arm and mounting plates to hold attachment prototypes necessary to install dual-model capabilities for Toyota's Paint Equipment `,
            alter: 'TC Oven B Exit Stand Front Attachments and Body-Detect Switches',
            image: '/static/images/toyota.svg',
            link: 'https://drive.google.com/file/d/16NgI5aCpxJVuEiVQHNYD-z9P_bw_Q36s/view?usp=sharing'
        },
        {
            id: 6,
            title: 'Frito-Lay Planogram Analysis and Deli Manual Order Project ',
            description: `Presentations for two of my solo projects for Loblaws Inc.`,
            alter: 'Loblaw Deli Manual Order Analysis',
            image: '/static/images/loblaw.svg',
            link: 'https://drive.google.com/file/d/1_fNdls3xCtrSKm5z49MCnSlZGAyFnW17/view?usp=sharing'
        },

    ]
    return (
        <>
            <section id="engineeringportfolio">
                <Grid container sx={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Grid item xs={12}>
                        <Header title='Engineering Portfolio' />
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

export default EngineeringPortfolio;