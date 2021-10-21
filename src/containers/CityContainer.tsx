import React, { useState } from 'react';
import Cities from '../pages/Cities';
import { fetchWeatherInfo } from '../API';
import { City } from '../components/Weather.types';

const CitiesContainer: React.FC = () => {

    const [cityName, setCityName] = useState('');
    const [cities, setCities] = useState<Array<City>>([]);
    const [cityChosen, setCityChoosen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSearch = (value: string) => {
        fetchWeatherInfo(value).then((data)=> {
            if(data.code===200){
            const exist=checkCityExist(data.name);
            console.log(exist);
            if(exist !== true) {
            setCities([...cities, data]);
            setCityChoosen(true);
            setCityName('');
            setErrorMessage('');
            }
            else setErrorMessage('City already found!');
            }
            else if(data.code==='404'){
                setErrorMessage('City not found!');
            }
            else if(data.code==='400'){
                setErrorMessage('You must enter a city!');
            }
            else {
                setErrorMessage('Unknown mistake.');
            }
        })
    }

    const handleInputChange = (value: string) => {
        setCityName(value);
    }

    const handleDeleteCity = (name:string) => {
        for( var i = 0; i < cities.length; i++){                         
            if ( cities[i].name.localeCompare(name) === 0) { 
                cities.splice(i, 1); 
                i--; 
                setCities([...cities]);
            }
        }
        console.log(cities);
    }

    const checkCityExist= (name:string) => {
        for( var i = 0; i < cities.length; i++){                         
            if ( cities[i].name.localeCompare(name) === 0) { 
                return true;
            }
        }
    }
    
    return (
        <Cities cityName={cityName} handleInputChange={handleInputChange} handleSearch={handleSearch} cities={cities} cityChosen={cityChosen} handleDeleteCity={handleDeleteCity} errorMessage={errorMessage}></Cities>
    )
};

export default CitiesContainer;