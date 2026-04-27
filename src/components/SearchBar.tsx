import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, onSearch, placeholder = "Buscar cidade..." }: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative group flex gap-3">
        <div className="relative flex-1">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full px-6 py-4 pl-14 text-lg bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 text-foreground placeholder-muted-foreground"
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <Search className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
        <motion.button
          type="submit"
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Search className="w-5 h-5" />
          <span className="hidden sm:inline">Buscar</span>
        </motion.button>
      </div>
    </motion.form>
  );
}
