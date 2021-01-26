import React,{ Component} from 'react'
import Form from './components/Form'
import Title from './components/Title'
import Weather from './components/Weather'


const key = 'ea131d061d228469df6ac93db8071ab5'
// const API = `http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=${key}`

class App extends Component {
  
  state = {
    temperature: null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    error: null,
  }


  getWeather = async (e) => {
    e.preventDefault()
    const target = e.target.elements;
    const city = target.city.value
    const country = target.country.value

    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}`)
    const data = await res.json()
    console.log(data)
  
    if (city && country) {
        this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
  
      })
    } else {
      this.setState({
      temperature: null,
      city: null,
      country: null,
      humidity: null,
      description: null,
      error: 'Please enter the value'
      })
    }

  }

  render() {
    const {temperature, country, city, humidity, description, error} = this.state
    return (
      <div className='App'>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                <Title />

                </div>
                <div className="col-xs-7 form-container">
                 <Form getWeather={this.getWeather}/>
                  <Weather
                  temperature={temperature}
                  country={country}
                  city={city}
                  humidity={humidity}
                  description={description }
                  error={error}
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

}



export default App
