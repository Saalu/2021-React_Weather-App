import React from 'react'

function Form({ getWeather }) {
    
  
    return (
        <div>
            <form onSubmit={getWeather}>
                <input type="text" name="city" placeholder='City...' id="" />
                <input type="text" name="country" placeholder='Country...' id="" />
                <button type='submit'>Get Weather</button>
            </form>
        </div>
    )
}

export default Form
