import { useState } from 'react'; // Import useState from React
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function OneJoke({ jokeSetup, jokeDelivery, jokeName }) {
    const [showJokeDelivery, setShowJokeDelivery] = useState(false);

    const toggleJokeDelivery = () => {
        setShowJokeDelivery(!showJokeDelivery);
    };

    return (
        <div className="weather-card-container">
            <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
                <Card.Body>
                    <Card.Title>{jokeName} Joke</Card.Title>
                    <Card.Text>
                        {jokeSetup}
                    </Card.Text>
                    <Button variant="outline-secondary" onClick={toggleJokeDelivery}>
                        {showJokeDelivery ? "Hide Punchline" : "Show Punchline"}
                    </Button>{' '}
                    {showJokeDelivery && (
                        <Card.Text>
                            {jokeDelivery}
                        </Card.Text>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
}

OneJoke.propTypes = {
    jokeSetup: PropTypes.string.isRequired,
    jokeDelivery: PropTypes.string.isRequired,
    jokeName: PropTypes.string.isRequired
};

export default OneJoke;