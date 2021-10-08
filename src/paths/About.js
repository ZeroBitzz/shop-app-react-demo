//MATERIAL UI IMPORTS
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// ABOUT COMPONENT
const About = () => {

    // VARIABLE DECLARATIONS
    const gridBreak = <div style={{width: '100%', height: 10}}></div>

    return (
        // LINKS TO LINKEDIN AND GITHUB
        <Container fixed>
            <Typography variant='h1' color='secondary'>
                About
            </Typography>
            <Typography variant='h6' color='primary'>
                This project was created as an example using react, redux, and material ui.
            </Typography>
            <Typography variant='h6' color='primary'>
                Illustrations created by me.
            </Typography>
            <Button target='_blank' href='https://www.linkedin.com/in/broderick-howell-43b0161a4?trk=people-guest_people_search-card' color='primary' variant='contained'>Hire me</Button>
            {gridBreak}
            <Button  target='_blank' href='https://github.com/ZeroBitzz/shop-app-react-demo' color='primary' variant='contained'>Visit Repo</Button>
        </Container>
    )
}

export default About;