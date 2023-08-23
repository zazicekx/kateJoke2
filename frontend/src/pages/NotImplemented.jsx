import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

const NotImplemented = () => {
    return (
        <div className=' py-5'>
            <Container className='d-flex justify-content-center'>
                <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
                    <h1 className='text-center mb-4'>Not implemented Page yet</h1>
                    <p className='text-center mb-4'>
                        Nothing hereeee bitches
                    </p>
                    <div className='d-flex'>
                        <LinkContainer to="/">
                            <Button variant='secondary' className='me-3'>
                                GO HOME
                            </Button>
                        </LinkContainer>
                    </div>
                </Card>
            </Container>
        </div>
    );
};

export default NotImplemented