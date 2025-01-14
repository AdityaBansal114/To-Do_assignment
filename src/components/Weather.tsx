import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setWeather, setLoading, setError } from '../store/weatherSlice';



const Weather: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.weather);

  useEffect(() => {
    const fetchWeather = async () => {
      dispatch(setLoading());
      try {

        const apiKey=import.meta.env.VITE_API_KEY;

        const apiURL=import.meta.env.VITE_API_URL;
        const response= await fetch(`${apiURL}Delhi&appid=${apiKey}`);
        const DataWeather= await response.json();

        const iconId = DataWeather.weather[0].icon;
        const description = DataWeather.weather[0].description;
        const temperature = DataWeather.main.temp;

        const currWeather = {
          temperature: temperature,
          description: description,
          icon: iconId
        };


        
        dispatch(setWeather(currWeather));
      } catch (err) {
        dispatch(setError('Failed to fetch weather data'));
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 900000); // Updates every 15 minutes
    return () => clearInterval(interval);
  }, [dispatch]);

  if (loading) return <div>Loading weather...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!data) return null;

  const WeatherIcon = () => {
    
    return(
      <div>
      <img src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}/>
      </div>
    )
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex items-center gap-4">
        <WeatherIcon />
        <div>
          <p className="text-2xl font-bold">{data.temperature}°C</p>
          <p className="text-gray-600">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;