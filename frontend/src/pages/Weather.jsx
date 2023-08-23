import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";

function Weather() {

    const [dataPrague, setDataPrague] = useState(null);

    const fetchDataPrague = async () => {
        try {
            const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=50.088&longitude=14.4208&hourly=temperature_2m&current_weather=true', {
                headers: {
                    Accept: 'application/json',
                },
            });
            const data = await response.json();
            setDataPrague(data.current_weather); // Use the first hourly temperature data


        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const [dataKosice, setDataKosice] = useState('');

    const fetchDataKosice = async () => {
        try {
            const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=48.7139&longitude=21.2581&hourly=temperature_2m&current_weather=true', {
                headers: {
                    Accept: 'application/json',
                },
            });
            const data = await response.json();
            setDataKosice(data.current_weather);


        } catch (error) {
            console.error('Error fetching joke:', error);
        }
    };

    const [dataVlachy, setDataVlachy] = useState('');

    const fetchDataVlachy = async () => {
        try {
            const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=48.9475&longitude=20.7957&hourly=temperature_2m&current_weather=true', {
                headers: {
                    Accept: 'application/json',
                },
            });
            const data = await response.json();
            setDataVlachy(data.current_weather);


        } catch (error) {
            console.error('Error fetching joke:', error);
        }
    };
    
    return (
        <div className="allCards">
            <Card className='p-5 d-flex flex-column bg-light w-50' >
                <Card.Title>Prague Weather</Card.Title>
                <Card.Img style={{ maxHeight: '500px', width: "300px" }} variant="top" src="https://st2.depositphotos.com/6787284/11030/i/600/depositphotos_110309702-stock-photo-blooming-bush-of-lilac.jpg" />
                <Card.Body>
                    <Card.Text>
                        Click the button to get Prague's current temperature and wind speed.
                    </Card.Text>
                    <Button onClick={fetchDataPrague} className="weatherButton">Prague actual Weather</Button>
                    {dataPrague && (
                        <Card.Text>
                            Temperature: {dataPrague.temperature}°C, Wind Speed: {dataPrague.windspeed} m/s
                        </Card.Text>
                    )}
                </Card.Body>
            </Card>
        <br />
            <Card className='p-5 d-flex flex-column bg-light w-50' >
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Kosice Weather</Card.Title>
                    <Card.Text>
                        Click the button to get Kosice's current temperature and wind speed.
                    </Card.Text>
                    <Button onClick={fetchDataKosice} className="weatherButton">Prague actual Weather</Button>
                    {dataKosice && (
                        <Card.Text>
                            Temperature: {dataKosice.temperature}°C, Wind Speed: {dataKosice.windspeed} m/s
                        </Card.Text>
                    )}
                </Card.Body>
            </Card>
        <br />
            <Card className='p-5 d-flex flex-column bg-light w-50' >
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Prague Weather</Card.Title>
                    <Card.Text>
                        Click the button to get Spisske Vlachy's current temperature and wind speed.
                    </Card.Text>
                    <Button onClick={fetchDataVlachy} className="weatherButton">Prague actual Weather</Button>
                    {dataVlachy && (
                        <Card.Text>
                            Temperature: {dataVlachy.temperature}°C, Wind Speed: {dataVlachy.windspeed} m/s
                        </Card.Text>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
}

export default Weather;