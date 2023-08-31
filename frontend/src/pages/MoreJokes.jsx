import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import OneJoke from "../components/OneJoke";

function MoreJokes() {

    const [jokeData, setJokeData] = useState([]);

    const fetchJokes = async () => {
        const urls = [
            'https://v2.jokeapi.dev/joke/Pun?type=twopart',
            'https://v2.jokeapi.dev/joke/Any?type=twopart', 
        ];

        try {
            const responses = await Promise.all(urls.map(url =>
                fetch(url, {
                    headers: {
                        Accept: 'application/json',
                        'X-Api-Key': 'Spa8XXDE1dqkDJDOTlGXUQ==2k1Oq9DejYYJrFYd'
                    },
                }).then(response => response.json())
            ));

            setJokeData(responses);
        } catch (error) {
            console.error('Error fetching jokes:', error);
        }
    };

    useEffect(() => {
        fetchJokes();
    }, []);


    return (
        <div>
            {jokeData.map((data, index) => (
                <OneJoke
                    key={index}
                    jokeSetup={data.setup}
                    jokeDelivery={data.delivery}
                    jokeName={`JOKE ${index + 1}`}
                />
            ))}
        </div>
    );
}

export default MoreJokes;