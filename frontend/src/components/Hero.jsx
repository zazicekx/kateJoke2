import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

const Hero = () => {
    return (
        <div className=' py-5'>
            <Container className='d-flex justify-content-center'>
                <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
                    <h1 className='text-center mb-4'>Kate Bobby Joke</h1>
                    <p className='text-center mb-4'>
                        This website is dedicated to kate Bobby, so she can check out the weather,
                        or she can get some jokes, while she is having a boring moments.
                    </p>
                    <div className='d-flex'>
                        <LinkContainer to="/Weather">
                            <Button variant='primary' className='me-3'>
                                Get Weather
                            </Button>
                        </LinkContainer>
                        <LinkContainer to="/MoreJokes">
                            <Button variant='secondary' className='me-3'>
                                Get daddy joke
                            </Button>
                        </LinkContainer>
                    </div>
                </Card>
            </Container>
        </div>
    );
};

export default Hero;