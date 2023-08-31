import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaSignInAlt } from 'react-icons/fa';
import { LinkContainer } from "react-router-bootstrap";
import { EmojiLaughing, CloudCheckFill, YinYang, Send,  SearchHeart } from 'react-bootstrap-icons';


const Header = () => {
    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand >Kate Bobby Joke</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>

                            <LinkContainer to="/login">
                                <Nav.Link>
                                    <Send /> Login
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/register">
                                <Nav.Link>
                                    <FaSignInAlt /> Register
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/MoreJokes" class="glyphicon glyphicon-user">
                                <Nav.Link>
                                    <EmojiLaughing /> MoreJokes
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/Weather">
                                <Nav.Link>
                                    <CloudCheckFill /> Weather
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/Search">
                                <Nav.Link>
                                    <SearchHeart /> Search
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/About">
                                <Nav.Link>
                                    <YinYang /> About
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;