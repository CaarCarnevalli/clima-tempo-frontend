# Weather App - Frontend

## Stack Tecnológico
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion (animações)
- D3.js & Dotted Map (mapa interativo)
- Lucide React (ícones)
- Axios (requisições HTTP)

## Instalação

```bash
npm install
```

## Configuração

O frontend está configurado para fazer proxy das requisições da API para `http://localhost:8080`.
Certifique-se de que o backend está rodando na porta 8080.

## Como Executar

### Modo de Desenvolvimento
```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`

### Build para Produção
```bash
npm run build
```

### Preview da Build
```bash
npm run preview
```

## Funcionalidades

- 🔍 Busca de clima por cidade
- 🗺️ Visualização da localização no mapa interativo
- 🌡️ Dados em tempo real de temperatura, umidade e vento
- 🎨 Interface minimalista e moderna com dark mode
- ✨ Animações suaves com Framer Motion
- 📱 Design responsivo

## Estrutura do Projeto

```
src/
├── components/         # Componentes React
│   ├── SearchBar.tsx   # Barra de busca
│   ├── WeatherCard.tsx # Card com dados do clima
│   └── WeatherMap.tsx  # Mapa interativo
├── services/          # Serviços de API
│   └── api.ts         # Cliente da API
├── types/             # Tipos TypeScript
│   └── weather.ts     # Tipos de dados do clima
├── App.tsx            # Componente principal
├── main.tsx           # Entry point
└── index.css          # Estilos globais
```
