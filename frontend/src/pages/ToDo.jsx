import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

const ToDo = () => {
    return (
        <div className=' py-5'>
            <Container className='d-flex justify-content-center'>
                <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
                    <h1 className='text-center mb-4'>To Do List</h1>
                    <p className='text-center mb-4'>
                        Here we can put our To Do ! kate.
                    </p>
                    <div className='d-flex'>
                        <LinkContainer to="/ToDo/Form">
                            <Button variant='primary' className='me-3'>
                                add ToDo
                            </Button>
                        </LinkContainer>
                    </div>
                </Card>
            </Container>
        </div>
    );
};

export default ToDo;