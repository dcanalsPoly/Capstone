import './Content.css';
import Graph from './Graph';
import React, { useState, useEffect } from 'react';
import axios from "axios";

function Content(props) {

    const [countryData, setCountryData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("In Use Effect")
        const fetchData = async () => {
        const { data: result } = await axios.get('https://api.covid19api.com/country/' + props.country + '/status/confirmed?from=2021-03-24T00:00:00Z&to=2021-04-01T00:00:00Z');
        setCountryData(result);
        setLoading(false);
        console.log(result); // runs once
        };
        fetchData();
    }, [setCountryData, setLoading]);

    console.log(countryData); // runs 3 times

    // const [countryData, setCountryData] = useState(() => {
    //     fetch('https://api.covid19api.com/country/' + props.country + '/status/confirmed?from=2021-03-24T00:00:00Z&to=2021-04-01T00:00:00Z')
    //         .then(response => response.json())
    //         .then(data => setCountryData(data))
    // });  

    if (countryData) {
        countryData.forEach(element => console.log(element));
    }

    if (!countryData) {
        return <div>Waiting</div>
    }
    else if (countryData) {

        return <div className="content">
            <Graph graph = "line" myData = {countryData} />
        </div>
    }
}
export default Content;