import React from 'react'

function Weather({temperature, country, city, humidity, description, error}) {
    return (
        <div>
            <div className='weather__info'>
                {temperature && <p  className='weather__key'>Temperature: {temperature}</p>}
                {humidity && <p className='weather__key'> Humidity: {humidity }</p> }
                {description && <p  className='weather__key'> Description: {description }</p> }
                {city && <p className='weather__key'> City: {city }</p> }
                {country && <p  className='weather__key'> Country: {country}</p>}
                {error && <h2>{error}</h2>}
            </div>
        </div>
    )
}

export default Weather
