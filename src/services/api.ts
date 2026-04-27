import axios from 'axios';
import type { WeatherData, Location } from '@/types/weather';

// Em desenvolvimento usa proxy do Vite (/api), em produção usa URL completa
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const weatherApi = {
  getWeatherByCity: async (city: string): Promise<WeatherData> => {
    const response = await axios.get(`${API_BASE_URL}/weather`, {
      params: { city },
    });
    return response.data;
  },

  getWeatherByCoordinates: async (lat: number, lon: number): Promise<WeatherData> => {
    const response = await axios.get(`${API_BASE_URL}/weather/coordinates`, {
      params: { lat, lon },
    });
    return response.data;
  },

  searchLocations: async (query: string): Promise<Location[]> => {
    const response = await axios.get(`${API_BASE_URL}/locations/search`, {
      params: { query },
    });
    return response.data;
  },
};
