import { Grid, CardMedia, CardActionArea } from "@mui/material";
const CompanySelection = (props) => {

    // passing selected work from child to parent
    const handleSelectWork = (company) => {
        // console.log(company);
        props.selectedWork(company);
    }

    const companies = [
        {
            id: '1',
            name: 'Amazon',
            logo: '/static/images/amazon.svg',
            description: 'amazon logo'
        },
        {
            id: '2',
            name: 'TTC',
            logo: '/static/images/ttc.svg',
            description: 'ttc logo'
        },
        {
            id: '3',
            name: 'Toyota',
            logo: '/static/images/toyota.svg',
            description: 'toyota logo'
        },
        {
            id: '4',
            name: 'York Region',
            logo: '/static/images/york.svg',
            description: 'York Region logo'
        },
        {
            id: '5',
            name: 'Loblaw',
            logo: '/static/images/loblaw.svg',
            description: 'loblaw logo'
        },
        {
            id: '6',
            name: 'Clearbridge',
            logo: '/static/images/clearbridge.png',
            description: 'clearbridge logo'
        },
    ]

    return (
        <>
            <Grid container sx={{ justifyContent: 'center', marginTop: -3, }}>
                {
                    companies.map((company) => (
                        <Grid item sx={{ margin: 2 }}>
                            <CardActionArea>
                                <CardMedia
                                    background='#fff'
                                    component='img'
                                    height='40'
                                    width='40'
                                    image={company.logo}
                                    alt={company.description}
                                    onClick={() => { handleSelectWork(company.name) }}
                                >
                                </CardMedia>
                            </CardActionArea>
                        </Grid>
                    )
                    )
                }

            </Grid>
        </>
    )
}

export default CompanySelection;