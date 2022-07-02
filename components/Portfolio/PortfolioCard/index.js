import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

const PortfolioCard = (props) => {
    return (
        <Card sx={{ maxWidth: '100%' }}>
            <CardMedia
                component="img"
                height="80%"
                image={props.image}
                alt={props.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><GitHubIcon fontSize='large' /></Button>
                <Button size="small"><OpenInBrowserIcon fontSize='large' /></Button>
            </CardActions>
        </Card>
    );
};

export default PortfolioCard;