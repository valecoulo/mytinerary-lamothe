import React, {useEffect, useState} from 'react'

const Cities = () => {

    const [cities, setCities] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/api/cities')
        .then(res => res.json())
        .then(data => setCities(data.response.cities))
        .catch()
    }, []);

    return(
        <div>
            <h1 className="text-light">{cities}</h1>
        </div>
    )
}

export default Cities