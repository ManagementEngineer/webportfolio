import { CardMedia, Grid, Typography, Box } from "@mui/material";

const JobDescription = (props) => {

    const jobs = [
        {
            id: '1',
            name: 'Amazon',
            companyName: 'Amazon Logistics',
            role: 'Area Manager',
            logo: '/static/images/amazon.svg',
            description: [
                '•	Increased capacity by 21% and reduced process touchpoints by 50% by simplifying Prime Free Same Day (PFSD) process paths, resulting in an additional 134,000 same-day packages dispatched annually.',
                '•	Created the region-approved, VBA-coded tool for daily Parcel-Not-On-Van Reports used by Area Managers across 10 Canada East Region sites which reduced the preparation time from 45 mins to 3 mins. Also coded two automated end-of-shift reports and a backup offline auto-picklist generator. ',
                '•	Led the top performing station in PFSD shift across Canada, dispatching twice the normal volume at 3,500 packages daily with a success rate of 98.85%.',
                '•	Reduced 10 minutes of planning time for PFSD and minimized waiting time by rearranging and assigning trailers to specified dock doors.',
                '•	Canada East Region delivery estimate accuracy champion site for Peak 2020.'
            ]

        },
        {
            id: '2',
            name: 'TTC',
            companyName: 'Toronto Transit Commission',
            role: 'Reliability Engineer',
            logo: '/static/images/ttc.svg',
            description: [
                '• Classified failing door components by developing a predictive maintenance tool using machine learning techniques.',
                '• Eliminated leadscrew re-greasing problems to 0% by providing mean time between failures based on Weibull Analysis.',
                '• Reduced initial troubleshooting times by 50% by creating extensive FMEA documents for subway train doors.'

            ]
        },
        {
            id: '3',
            name: 'Toyota',
            companyName: 'Toyota Motor Manufacturing Canada',
            role: 'Production Engineer',
            logo: '/static/images/toyota.svg',
            description: [
                '• Converted paint facility by assisting in the execution of a $3 million project in preparation for the 2019 RAV4 launch while recovering two months of delayed goals and revising more than 400 sheets of mechanical drawings.',
                '• Installed 18 pallet attachment types by leading trials, modifying, and designing prototypes through AutoDesk Inventor.',
                '• Toyota Business Practice (TBP): Reduced average prototype installation times from 6 hours to 2 hours by investigating the root cause of failed paint pallet attachment prototypes, and proposing countermeasures and changes to the standardization of the design process.'
            ]
        },
        {
            id: '4',
            name: 'York Region',
            companyName: 'The Regional Municipality of York',
            role: 'Transit Analyst',
            logo: '/static/images/york.svg',
            description: [
                '• Coordinated with fleet contractors by acting as the fleet management system administrator, responsible for troubleshooting and maintenance of York Region transit fleet buses.',
                '• Designed a new fleet management system’s front end and spearheaded User Acceptance Testing.',
                '• Trained more than 20 contractors and users of the new fleet management system.'
            ]
        },
        {
            id: '5',
            name: 'Loblaw',
            companyName: 'Loblaw Companies Limited',
            role: 'Supply Chain Analyst',
            logo: '/static/images/loblaw.svg',
            description: [
                '• Reduced manual order rate by 17.37% by proposing new safety stock numbers for Deli products in three pilot stores.',
                '• Saved an average of 6 minutes per product analysis by fixing inefficiencies in Loblaw’s automated ordering system.',
                '• Corrected the overall fill rate calculation by 0.6% by identifying and resolving Click-and-Collect system issue.'
            ]
        },
        {
            id: '6',
            name: 'Clearbridge',
            companyName: 'Clearbridge Mobile',
            role: 'Mobile QA Specialist',
            logo: '/static/images/clearbridge.png',
            description: [
                '• Developed Web and Mobile automated testing using Selenium Webdriver for Android, and ChromeDriver.',
                '• Tested and documented bugs of an on-going project’s Mobile App, Database and Dashboard with the client identifying no major issue in the first two sprints of User Acceptance Testing.',
                '• Coordinated with product owner and developers to ensure that the development team is updated at any phase through scrums, sprint planning and retrospective.'
            ]
        },
    ]

    const selectedCompany = jobs.find(work => work.name === props.selectedWork);


    return (
        <>
            <Grid container xs={12}>
                <Grid item >
                    <Grid container>
                        <Grid item xs={4}>
                            <CardMedia
                                component='img'
                                height='80'
                                width='80'
                                image={selectedCompany.logo}
                                alt='image'
                                sx={{ objectFit: 'contain' }}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <Grid container>
                                <Grid item xs={12}><Typography variant='h4'>{selectedCompany.companyName}</Typography></Grid>
                                <Grid item xs={12}><Typography variant='h6'>{selectedCompany.role}</Typography></Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    {selectedCompany.description.map((description => {
                        return (
                            <>
                                <br />
                                <Typography variant="body">
                                    {description}
                                    <br />
                                    <br />
                                </Typography>
                            </>

                        )
                    }))}
                </Grid>
            </Grid>
        </>
    )

}
export default JobDescription;