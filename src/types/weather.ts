export interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  description: string;
  icon: string;
  coordinates: {
    lat: number;
    lon: number;
  };
  timestamp: number;
}

export interface Location {
  name: string;
  country: string;
  state: string;
  lat: number;
  lon: number;
}
