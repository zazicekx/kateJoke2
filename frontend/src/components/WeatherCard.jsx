import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import "../css/weatherCard.css"

function WeatherCard({ locationName, temperature, windSpeed }) {
    const isHot = temperature > 30;

    return (
        <div className="weather-card-container">
            <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
                <Card.Body>
                    <Card.Title>{locationName} Weather</Card.Title>
                    <Card.Text>
                        {locationName}'s weather information.
                    </Card.Text>
                    <Card.Text>
                        Temperature: {temperature} degrees Celsius, Wind Speed: {windSpeed} m/s
                    </Card.Text>
                    {isHot && <Card.Text>FUCKING HOT !</Card.Text>}
                </Card.Body>
            </Card>
        </div>
    );
}

WeatherCard.propTypes = {
    locationName: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired
};

export default WeatherCard;