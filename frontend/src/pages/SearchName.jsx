import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MOCK_DATA from "../assets/MOCK_DATA.json";
import NameTable from "../components/NameTable.jsx"

const SearchName = () => {

    const [data, setData] = useState([]); 

    useEffect(() => {
        setData(MOCK_DATA);
    }, []);


    return (
        <div>
            <NameTable data={data} />
        </div>
    );
}

export default SearchName;