import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { WeatherMap } from './components/WeatherMap';
import { weatherApi } from './services/api';
import type { WeatherData } from './types/weather';
import { motion } from 'framer-motion';
import { PartlyCloudyIcon } from './components/ui/animated-weather-icons';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const data = await weatherApi.getWeatherByCity(searchQuery);
      setWeather(data);
    } catch (err) {
      setError('Cidade não encontrada. Tente novamente.');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 dark:from-black dark:via-blue-950 dark:to-black">
      {/* Header */}
      <header className="py-12 px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <PartlyCloudyIcon size={48} />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Weather
            </h1>
          </div>
          <p className="text-lg text-white/70">
            Consulte o clima de qualquer cidade do mundo
          </p>
          <p className="text-sm text-white/40 mt-1">
            Desenvolvido por Carolina Carnevali
          </p>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="px-4 pb-12 space-y-12">
        {/* Search Bar */}
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onSearch={handleSearch}
        />

        {/* Loading State */}
        {loading && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-white/20 border-t-white"></div>
            <p className="text-white/70 mt-4">Buscando dados...</p>
          </motion.div>
        )}

        {/* Error State */}
        {error && (
          <motion.div
            className="text-center bg-red-500/20 border border-red-500/50 rounded-2xl p-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <p className="text-red-200">{error}</p>
          </motion.div>
        )}

        {/* Weather Data */}
        {weather && !loading && (
          <div className="space-y-8">
            <WeatherCard weather={weather} />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <WeatherMap
                coordinates={{
                  lat: weather.coordinates.lat,
                  lng: weather.coordinates.lon,
                }}
                cityName={weather.city}
              />
            </motion.div>
          </div>
        )}

        {/* Initial State */}
        {!weather && !loading && !error && (
          <motion.div
            className="text-center space-y-4 py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex justify-center opacity-30">
              <PartlyCloudyIcon size={96} />
            </div>
            <p className="text-white/50 text-lg">
              Digite o nome de uma cidade para começar
            </p>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-white/40 text-sm space-y-3">
        <a 
          href="https://carolina-carnevali.pages.dev/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
          Meu Portfólio
        </a>
        <p>Desenvolvido por <span className="text-white/60 font-medium">Carolina Carnevali</span></p>
        <p>Weather App © 2025 • Dados fornecidos por OpenWeatherMap</p>
      </footer>
    </div>
  );
}

export default App;
