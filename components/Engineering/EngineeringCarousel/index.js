import Carousel from 'react-material-ui-carousel'
import { Paper, Button, CardMedia, Card } from '@mui/material'

const EngineeringCarousel = (props) => {

    const jobs = [
        {
            name: "Amazon",
            image: "/static/images/amazon_work.jpg"

        },
        {
            name: "TTC",
            image: "/static/images/ttc_door.jpg"
        },
        {
            name: "Toyota",
            image: "/static/images/toyota_work.jpg"

        },
        {
            name: "York Region",
            image: "/static/images/york_work.jpg"
        },
        {
            name: "Loblaw",
            image: "/static/images/loblaw_work.jpg"

        },
        {
            name: "Clearbridge",
            image: "/static/images/clearbridge_work.png"
        },
    ]

    const selectedCompany = jobs.find(work => work.name === props.selectedWork);


    return (
        <CardMedia
            background='#fff'
            component='img'
            image={selectedCompany.image}
            height='100%'
            width='100%'
            sx={{ objectFit: 'contain' }}
        >
        </CardMedia>
    )
}
export default EngineeringCarousel;