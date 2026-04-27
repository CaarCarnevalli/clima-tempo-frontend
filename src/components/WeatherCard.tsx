import { motion } from 'framer-motion';
import type { WeatherData } from '@/types/weather';
import { getWeatherIcon, SunIcon, RainIcon, WindIcon } from '@/components/ui/animated-weather-icons';

interface WeatherCardProps {
  weather: WeatherData;
}

export function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <motion.div
      className="w-full max-w-2xl mx-auto bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-3xl p-8 shadow-2xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Header with location */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-foreground">
          {weather.city}, {weather.country}
        </h2>
        <p className="text-muted-foreground mt-2 capitalize text-lg">
          {weather.description}
        </p>
      </div>

      {/* Main temperature display */}
      <div className="flex items-center justify-center gap-6 mb-8">
        <div className="flex items-center justify-center w-32 h-32">
          {getWeatherIcon(weather.icon, 96)}
        </div>
        <div>
          <div className="text-7xl font-bold text-foreground">
            {Math.round(weather.temperature)}°
          </div>
          <p className="text-muted-foreground text-lg mt-2">
            Sensação: {Math.round(weather.feelsLike)}°
          </p>
        </div>
      </div>

      {/* Weather details grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <motion.div
          className="flex flex-col items-center p-4 bg-white/5 rounded-2xl"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="mb-2">
            <SunIcon size={32} />
          </div>
          <p className="text-sm text-muted-foreground">Temperatura</p>
          <p className="text-xl font-semibold text-foreground">
            {Math.round(weather.temperature)}°C
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center p-4 bg-white/5 rounded-2xl"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="mb-2">
            <RainIcon size={32} />
          </div>
          <p className="text-sm text-muted-foreground">Umidade</p>
          <p className="text-xl font-semibold text-foreground">
            {weather.humidity}%
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center p-4 bg-white/5 rounded-2xl col-span-2 md:col-span-1"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="mb-2">
            <WindIcon size={32} />
          </div>
          <p className="text-sm text-muted-foreground">Vento</p>
          <p className="text-xl font-semibold text-foreground">
            {weather.windSpeed} m/s
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
