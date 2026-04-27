// Coordenadas extraídas de contornos reais dos continentes (Natural Earth Data simplificado)
// Cada ponto representa uma coordenada real no formato { lat, lng }

export const worldCoordinates = [
  // ==================== AMÉRICA DO NORTE ====================
  // Alasca - Costa
  { lat: 71.3, lng: -156.8 }, { lat: 70.1, lng: -148.5 }, { lat: 68.9, lng: -166.2 },
  { lat: 66.0, lng: -162.9 }, { lat: 64.5, lng: -165.4 }, { lat: 63.8, lng: -171.7 },
  { lat: 60.8, lng: -165.0 }, { lat: 59.5, lng: -161.9 }, { lat: 58.3, lng: -157.4 },
  { lat: 56.0, lng: -160.5 }, { lat: 55.3, lng: -162.7 }, { lat: 57.8, lng: -152.4 },
  { lat: 59.6, lng: -151.4 }, { lat: 60.1, lng: -149.4 }, { lat: 61.2, lng: -149.9 },
  { lat: 61.1, lng: -146.3 }, { lat: 60.0, lng: -140.0 }, { lat: 59.8, lng: -139.0 },
  
  // Canadá - Costa Oeste
  { lat: 54.7, lng: -130.4 }, { lat: 52.3, lng: -128.1 }, { lat: 49.3, lng: -123.1 },
  
  // Canadá - Norte (Ilhas do Ártico)
  { lat: 76.0, lng: -119.0 }, { lat: 75.0, lng: -95.0 }, { lat: 73.0, lng: -85.0 },
  { lat: 70.0, lng: -90.0 }, { lat: 69.0, lng: -105.0 }, { lat: 68.0, lng: -115.0 },
  { lat: 74.0, lng: -123.0 }, { lat: 78.0, lng: -110.0 }, { lat: 80.0, lng: -85.0 },
  { lat: 83.0, lng: -70.0 }, { lat: 82.0, lng: -62.0 }, { lat: 78.0, lng: -73.0 },
  
  // Canadá - Interior e Sul
  { lat: 60.0, lng: -128.0 }, { lat: 58.0, lng: -122.0 }, { lat: 56.0, lng: -120.0 },
  { lat: 54.0, lng: -122.0 }, { lat: 53.5, lng: -113.5 }, { lat: 51.0, lng: -114.1 },
  { lat: 50.5, lng: -104.6 }, { lat: 49.9, lng: -97.1 }, { lat: 52.1, lng: -106.7 },
  { lat: 54.8, lng: -101.3 }, { lat: 58.8, lng: -94.2 }, { lat: 63.7, lng: -68.5 },
  { lat: 58.5, lng: -66.0 }, { lat: 53.2, lng: -60.4 }, { lat: 47.6, lng: -52.7 },
  { lat: 46.8, lng: -56.0 }, { lat: 46.2, lng: -63.1 }, { lat: 44.6, lng: -63.6 },
  { lat: 45.5, lng: -73.6 }, { lat: 43.7, lng: -79.4 }, { lat: 46.5, lng: -81.0 },
  { lat: 48.4, lng: -89.2 },
  
  // EUA - Costa Pacífico
  { lat: 48.4, lng: -124.7 }, { lat: 47.6, lng: -122.3 }, { lat: 46.2, lng: -124.0 },
  { lat: 44.0, lng: -124.1 }, { lat: 42.0, lng: -124.4 }, { lat: 40.8, lng: -124.2 },
  { lat: 38.9, lng: -123.7 }, { lat: 37.8, lng: -122.5 }, { lat: 36.6, lng: -122.0 },
  { lat: 35.4, lng: -120.9 }, { lat: 34.4, lng: -120.5 }, { lat: 34.0, lng: -118.5 },
  { lat: 33.7, lng: -118.3 }, { lat: 32.7, lng: -117.2 },
  
  // EUA - Interior Oeste
  { lat: 47.0, lng: -109.4 }, { lat: 44.4, lng: -110.6 }, { lat: 43.6, lng: -116.2 },
  { lat: 40.8, lng: -111.9 }, { lat: 38.6, lng: -109.5 }, { lat: 36.2, lng: -112.1 },
  { lat: 35.1, lng: -111.7 }, { lat: 33.4, lng: -111.9 }, { lat: 32.2, lng: -110.9 },
  { lat: 39.7, lng: -104.9 }, { lat: 35.7, lng: -105.9 }, { lat: 32.0, lng: -106.6 },
  { lat: 31.8, lng: -106.4 },
  
  // EUA - Centro
  { lat: 48.0, lng: -100.8 }, { lat: 46.9, lng: -96.8 }, { lat: 44.9, lng: -93.1 },
  { lat: 41.9, lng: -93.6 }, { lat: 39.1, lng: -94.6 }, { lat: 37.7, lng: -97.3 },
  { lat: 35.5, lng: -97.5 }, { lat: 32.8, lng: -96.8 }, { lat: 29.8, lng: -95.4 },
  { lat: 27.8, lng: -97.4 }, { lat: 26.2, lng: -98.2 },
  
  // EUA - Costa Golfo
  { lat: 29.3, lng: -94.8 }, { lat: 29.8, lng: -93.3 }, { lat: 30.0, lng: -90.1 },
  { lat: 30.3, lng: -87.2 }, { lat: 30.4, lng: -84.3 },
  
  // EUA - Costa Atlântico
  { lat: 25.8, lng: -80.2 }, { lat: 26.1, lng: -81.8 }, { lat: 27.5, lng: -82.6 },
  { lat: 28.5, lng: -81.4 }, { lat: 30.3, lng: -81.7 }, { lat: 32.1, lng: -81.1 },
  { lat: 33.9, lng: -78.0 }, { lat: 35.2, lng: -75.5 }, { lat: 36.9, lng: -76.0 },
  { lat: 37.0, lng: -76.4 }, { lat: 38.9, lng: -77.0 }, { lat: 39.3, lng: -74.5 },
  { lat: 40.7, lng: -74.0 }, { lat: 41.5, lng: -71.4 }, { lat: 42.4, lng: -71.1 },
  { lat: 43.1, lng: -70.8 }, { lat: 44.4, lng: -68.2 }, { lat: 44.9, lng: -66.9 },
  
  // México
  { lat: 32.5, lng: -117.0 }, { lat: 31.3, lng: -113.5 }, { lat: 29.1, lng: -112.3 },
  { lat: 27.9, lng: -110.9 }, { lat: 25.5, lng: -109.4 }, { lat: 23.2, lng: -106.4 },
  { lat: 21.5, lng: -105.2 }, { lat: 19.8, lng: -105.3 }, { lat: 17.0, lng: -101.5 },
  { lat: 15.7, lng: -96.5 }, { lat: 16.8, lng: -93.1 }, { lat: 18.5, lng: -91.5 },
  { lat: 20.5, lng: -87.4 }, { lat: 21.2, lng: -86.8 }, { lat: 21.5, lng: -88.0 },
  { lat: 19.4, lng: -99.1 }, { lat: 20.7, lng: -103.4 }, { lat: 22.1, lng: -100.9 },
  { lat: 25.7, lng: -100.3 }, { lat: 28.6, lng: -100.5 }, { lat: 29.5, lng: -103.4 },
  
  // América Central
  { lat: 17.3, lng: -89.6 }, { lat: 15.5, lng: -88.0 }, { lat: 14.6, lng: -90.5 },
  { lat: 14.1, lng: -87.2 }, { lat: 13.7, lng: -89.2 }, { lat: 12.4, lng: -86.9 },
  { lat: 11.0, lng: -85.7 }, { lat: 10.0, lng: -84.1 }, { lat: 9.9, lng: -83.1 },
  { lat: 9.0, lng: -79.5 }, { lat: 8.0, lng: -77.4 },
  
  // Caribe
  { lat: 23.1, lng: -82.4 }, { lat: 22.4, lng: -79.9 }, { lat: 20.0, lng: -75.8 },
  { lat: 19.8, lng: -70.7 }, { lat: 18.5, lng: -69.9 }, { lat: 18.2, lng: -66.5 },
  { lat: 18.1, lng: -77.3 }, { lat: 18.0, lng: -76.8 },
  
  // ==================== AMÉRICA DO SUL ====================
  // Colômbia
  { lat: 12.5, lng: -71.5 }, { lat: 11.2, lng: -74.2 }, { lat: 10.4, lng: -75.5 },
  { lat: 8.4, lng: -76.6 }, { lat: 6.3, lng: -77.9 }, { lat: 4.6, lng: -77.4 },
  { lat: 2.4, lng: -76.6 }, { lat: 1.2, lng: -78.9 }, { lat: 4.7, lng: -74.1 },
  { lat: 6.2, lng: -75.6 }, { lat: 7.9, lng: -72.5 },
  
  // Venezuela
  { lat: 12.2, lng: -68.3 }, { lat: 11.0, lng: -63.9 }, { lat: 10.5, lng: -66.9 },
  { lat: 10.1, lng: -69.9 }, { lat: 8.9, lng: -70.8 }, { lat: 7.8, lng: -72.2 },
  { lat: 8.1, lng: -63.5 }, { lat: 6.8, lng: -61.4 },
  
  // Guianas
  { lat: 6.8, lng: -58.2 }, { lat: 5.9, lng: -55.2 }, { lat: 4.9, lng: -52.3 },
  { lat: 3.9, lng: -51.8 },
  
  // Brasil - Norte
  { lat: 0.0, lng: -51.1 }, { lat: -0.5, lng: -48.5 }, { lat: 1.5, lng: -48.9 },
  { lat: -1.5, lng: -48.5 }, { lat: -2.5, lng: -44.3 },
  
  // Brasil - Nordeste
  { lat: -3.7, lng: -38.5 }, { lat: -5.8, lng: -35.2 }, { lat: -8.1, lng: -34.9 },
  { lat: -9.7, lng: -35.7 }, { lat: -12.3, lng: -38.5 }, { lat: -13.0, lng: -38.5 },
  
  // Brasil - Sudeste/Sul Costa
  { lat: -15.8, lng: -38.9 }, { lat: -18.9, lng: -39.7 }, { lat: -20.3, lng: -40.3 },
  { lat: -22.9, lng: -43.2 }, { lat: -23.0, lng: -44.3 }, { lat: -24.0, lng: -46.3 },
  { lat: -25.4, lng: -48.5 }, { lat: -26.3, lng: -48.6 }, { lat: -28.5, lng: -48.8 },
  { lat: -29.3, lng: -49.7 }, { lat: -32.0, lng: -52.1 },
  
  // Brasil - Interior
  { lat: -23.5, lng: -46.6 }, { lat: -19.9, lng: -43.9 }, { lat: -15.8, lng: -47.9 },
  { lat: -16.7, lng: -49.3 }, { lat: -10.9, lng: -37.1 }, { lat: -3.1, lng: -60.0 },
  { lat: -8.8, lng: -63.9 }, { lat: -12.0, lng: -55.0 }, { lat: -9.0, lng: -70.0 },
  { lat: -5.0, lng: -69.0 }, { lat: -2.5, lng: -65.0 },
  
  // Equador
  { lat: -0.2, lng: -78.5 }, { lat: -1.0, lng: -80.7 }, { lat: -2.2, lng: -79.9 },
  { lat: -4.0, lng: -79.7 },
  
  // Peru
  { lat: -3.7, lng: -73.3 }, { lat: -5.2, lng: -81.1 }, { lat: -6.8, lng: -79.8 },
  { lat: -8.1, lng: -79.0 }, { lat: -12.0, lng: -77.0 }, { lat: -14.1, lng: -75.8 },
  { lat: -16.5, lng: -73.1 }, { lat: -18.0, lng: -70.3 },
  
  // Bolívia
  { lat: -16.5, lng: -68.2 }, { lat: -17.8, lng: -63.2 }, { lat: -19.0, lng: -65.3 },
  { lat: -21.5, lng: -64.7 },
  
  // Paraguai
  { lat: -25.3, lng: -57.6 }, { lat: -23.4, lng: -58.4 }, { lat: -22.3, lng: -60.0 },
  
  // Uruguai
  { lat: -34.9, lng: -56.2 }, { lat: -33.0, lng: -58.4 }, { lat: -34.5, lng: -55.0 },
  
  // Argentina
  { lat: -34.6, lng: -58.4 }, { lat: -32.9, lng: -60.7 }, { lat: -31.4, lng: -64.2 },
  { lat: -27.5, lng: -58.8 }, { lat: -26.8, lng: -65.2 }, { lat: -24.8, lng: -65.4 },
  { lat: -38.0, lng: -57.5 }, { lat: -41.1, lng: -63.0 }, { lat: -43.3, lng: -65.3 },
  { lat: -45.9, lng: -67.5 }, { lat: -49.3, lng: -67.6 }, { lat: -51.6, lng: -69.2 },
  { lat: -54.8, lng: -68.3 }, { lat: -54.9, lng: -64.7 },
  
  // Chile
  { lat: -18.5, lng: -70.1 }, { lat: -20.2, lng: -70.1 }, { lat: -23.6, lng: -70.4 },
  { lat: -27.1, lng: -70.9 }, { lat: -29.9, lng: -71.3 }, { lat: -33.0, lng: -71.6 },
  { lat: -36.8, lng: -73.1 }, { lat: -39.8, lng: -73.2 }, { lat: -41.5, lng: -72.9 },
  { lat: -43.1, lng: -73.7 }, { lat: -45.6, lng: -73.6 }, { lat: -48.0, lng: -73.5 },
  { lat: -51.7, lng: -72.5 }, { lat: -53.2, lng: -70.9 }, { lat: -55.0, lng: -67.0 },
  
  // ==================== EUROPA ====================
  // Islândia
  { lat: 66.5, lng: -18.0 }, { lat: 65.7, lng: -23.5 }, { lat: 64.1, lng: -22.0 },
  { lat: 63.4, lng: -20.3 }, { lat: 64.9, lng: -13.6 }, { lat: 66.1, lng: -14.4 },
  
  // Noruega
  { lat: 71.1, lng: 28.0 }, { lat: 70.7, lng: 23.7 }, { lat: 70.0, lng: 20.0 },
  { lat: 68.4, lng: 17.4 }, { lat: 66.0, lng: 12.6 }, { lat: 64.5, lng: 11.5 },
  { lat: 63.4, lng: 10.4 }, { lat: 62.5, lng: 6.2 }, { lat: 60.4, lng: 5.3 },
  { lat: 59.0, lng: 5.7 }, { lat: 58.0, lng: 7.0 },
  
  // Suécia
  { lat: 68.4, lng: 18.5 }, { lat: 66.1, lng: 17.9 }, { lat: 63.8, lng: 20.3 },
  { lat: 59.3, lng: 18.1 }, { lat: 56.0, lng: 12.7 }, { lat: 55.6, lng: 13.0 },
  
  // Finlândia
  { lat: 70.0, lng: 27.5 }, { lat: 68.5, lng: 28.5 }, { lat: 66.5, lng: 26.0 },
  { lat: 64.2, lng: 28.8 }, { lat: 62.2, lng: 27.7 }, { lat: 60.2, lng: 25.0 },
  { lat: 60.5, lng: 27.0 }, { lat: 61.5, lng: 29.8 }, { lat: 64.0, lng: 30.0 },
  
  // Reino Unido
  { lat: 58.6, lng: -3.4 }, { lat: 57.5, lng: -7.4 }, { lat: 56.5, lng: -5.5 },
  { lat: 55.9, lng: -3.2 }, { lat: 54.6, lng: -5.9 }, { lat: 53.4, lng: -3.0 },
  { lat: 52.5, lng: -1.9 }, { lat: 51.5, lng: -0.1 }, { lat: 51.1, lng: 1.3 },
  { lat: 50.4, lng: -5.0 }, { lat: 51.9, lng: -4.6 }, { lat: 53.3, lng: -4.6 },
  
  // Irlanda
  { lat: 55.4, lng: -7.4 }, { lat: 54.3, lng: -8.6 }, { lat: 53.3, lng: -9.9 },
  { lat: 51.9, lng: -10.5 }, { lat: 51.5, lng: -9.5 }, { lat: 52.3, lng: -6.5 },
  { lat: 53.3, lng: -6.3 }, { lat: 54.6, lng: -5.9 },
  
  // Dinamarca
  { lat: 57.7, lng: 10.6 }, { lat: 56.0, lng: 8.1 }, { lat: 55.3, lng: 8.1 },
  { lat: 54.6, lng: 9.0 }, { lat: 55.7, lng: 12.6 },
  
  // Países Baixos e Bélgica
  { lat: 53.2, lng: 5.3 }, { lat: 52.4, lng: 4.9 }, { lat: 51.9, lng: 4.5 },
  { lat: 51.4, lng: 3.4 }, { lat: 51.0, lng: 2.5 }, { lat: 50.8, lng: 4.4 },
  { lat: 51.2, lng: 5.5 },
  
  // Alemanha
  { lat: 54.3, lng: 10.1 }, { lat: 53.5, lng: 9.9 }, { lat: 54.8, lng: 9.4 },
  { lat: 52.5, lng: 13.4 }, { lat: 51.3, lng: 12.4 }, { lat: 50.1, lng: 8.7 },
  { lat: 49.5, lng: 11.1 }, { lat: 48.1, lng: 11.6 }, { lat: 47.6, lng: 9.2 },
  { lat: 48.8, lng: 8.4 }, { lat: 50.9, lng: 6.9 },
  
  // Polônia
  { lat: 54.4, lng: 18.6 }, { lat: 54.2, lng: 16.2 }, { lat: 53.1, lng: 18.0 },
  { lat: 52.2, lng: 21.0 }, { lat: 51.1, lng: 17.0 }, { lat: 50.1, lng: 19.9 },
  { lat: 49.3, lng: 19.9 },
  
  // França
  { lat: 51.1, lng: 2.5 }, { lat: 49.5, lng: 0.1 }, { lat: 48.9, lng: 2.3 },
  { lat: 48.6, lng: -4.5 }, { lat: 47.2, lng: -1.6 }, { lat: 46.2, lng: -1.2 },
  { lat: 44.4, lng: -1.2 }, { lat: 43.3, lng: -1.8 }, { lat: 42.7, lng: 3.0 },
  { lat: 43.3, lng: 5.4 }, { lat: 43.6, lng: 7.0 }, { lat: 45.8, lng: 6.9 },
  { lat: 46.2, lng: 6.1 }, { lat: 47.4, lng: 7.0 }, { lat: 48.7, lng: 7.4 },
  { lat: 49.5, lng: 4.0 },
  
  // Espanha
  { lat: 43.4, lng: -8.4 }, { lat: 43.5, lng: -3.8 }, { lat: 43.3, lng: -1.9 },
  { lat: 42.0, lng: 3.2 }, { lat: 40.5, lng: 0.5 }, { lat: 38.7, lng: 0.2 },
  { lat: 37.4, lng: -1.5 }, { lat: 36.5, lng: -4.5 }, { lat: 36.1, lng: -5.4 },
  { lat: 36.7, lng: -6.4 }, { lat: 37.0, lng: -7.9 }, { lat: 38.7, lng: -9.1 },
  { lat: 40.2, lng: -8.9 }, { lat: 41.9, lng: -8.8 }, { lat: 40.4, lng: -3.7 },
  { lat: 39.5, lng: -0.4 },
  
  // Portugal
  { lat: 41.2, lng: -8.6 }, { lat: 40.2, lng: -8.4 }, { lat: 38.7, lng: -9.1 },
  { lat: 37.0, lng: -8.9 }, { lat: 37.2, lng: -7.4 },
  
  // Itália
  { lat: 45.5, lng: 12.3 }, { lat: 44.4, lng: 12.2 }, { lat: 43.9, lng: 7.9 },
  { lat: 41.9, lng: 12.5 }, { lat: 40.9, lng: 14.3 }, { lat: 40.6, lng: 17.9 },
  { lat: 39.2, lng: 17.1 }, { lat: 38.1, lng: 15.7 }, { lat: 37.5, lng: 15.1 },
  { lat: 38.2, lng: 13.4 }, { lat: 40.8, lng: 8.6 }, { lat: 39.2, lng: 9.1 },
  { lat: 45.8, lng: 9.1 }, { lat: 45.4, lng: 10.9 }, { lat: 46.5, lng: 13.6 },
  
  // Suíça
  { lat: 47.6, lng: 8.6 }, { lat: 46.8, lng: 6.6 }, { lat: 46.2, lng: 7.4 },
  { lat: 46.5, lng: 9.8 }, { lat: 47.0, lng: 9.0 },
  
  // Áustria
  { lat: 47.5, lng: 9.7 }, { lat: 47.3, lng: 11.4 }, { lat: 47.1, lng: 15.0 },
  { lat: 48.2, lng: 16.4 }, { lat: 48.3, lng: 14.3 },
  
  // Europa Central (Tchéquia, Eslováquia, Hungria)
  { lat: 50.1, lng: 14.4 }, { lat: 49.8, lng: 18.3 }, { lat: 48.7, lng: 21.3 },
  { lat: 48.1, lng: 17.1 }, { lat: 47.5, lng: 19.1 }, { lat: 46.1, lng: 18.2 },
  { lat: 46.3, lng: 20.1 },
  
  // Bálcãs
  { lat: 46.1, lng: 14.5 }, { lat: 45.8, lng: 16.0 }, { lat: 45.3, lng: 14.4 },
  { lat: 43.9, lng: 15.4 }, { lat: 42.7, lng: 18.1 }, { lat: 43.5, lng: 16.4 },
  { lat: 44.8, lng: 20.5 }, { lat: 43.9, lng: 20.5 }, { lat: 42.7, lng: 21.2 },
  { lat: 41.3, lng: 19.8 }, { lat: 42.5, lng: 18.5 }, { lat: 43.3, lng: 17.8 },
  
  // Grécia
  { lat: 41.1, lng: 23.6 }, { lat: 40.6, lng: 22.9 }, { lat: 39.6, lng: 19.9 },
  { lat: 38.0, lng: 23.7 }, { lat: 37.0, lng: 22.1 }, { lat: 36.4, lng: 28.2 },
  { lat: 35.3, lng: 25.1 }, { lat: 39.1, lng: 26.6 }, { lat: 40.8, lng: 25.1 },
  
  // Romênia
  { lat: 47.2, lng: 27.0 }, { lat: 46.5, lng: 24.0 }, { lat: 44.4, lng: 26.1 },
  { lat: 45.0, lng: 29.7 }, { lat: 44.2, lng: 28.6 }, { lat: 43.8, lng: 25.4 },
  
  // Bulgária
  { lat: 43.2, lng: 27.9 }, { lat: 42.7, lng: 23.3 }, { lat: 42.1, lng: 24.7 },
  { lat: 41.5, lng: 26.5 }, { lat: 42.4, lng: 27.8 },
  
  // Ucrânia
  { lat: 52.0, lng: 33.5 }, { lat: 50.4, lng: 30.5 }, { lat: 48.5, lng: 22.3 },
  { lat: 48.6, lng: 37.6 }, { lat: 47.1, lng: 37.5 }, { lat: 46.5, lng: 30.8 },
  { lat: 45.3, lng: 36.5 }, { lat: 46.2, lng: 33.4 }, { lat: 44.4, lng: 33.8 },
  { lat: 51.5, lng: 31.3 }, { lat: 49.8, lng: 24.0 },
  
  // Bálticos (Estônia, Letônia, Lituânia)
  { lat: 59.4, lng: 24.8 }, { lat: 57.5, lng: 25.0 }, { lat: 56.9, lng: 24.1 },
  { lat: 55.7, lng: 21.1 }, { lat: 54.7, lng: 25.3 }, { lat: 56.0, lng: 28.0 },
  { lat: 57.0, lng: 27.5 }, { lat: 58.2, lng: 27.0 },
  
  // Rússia Europeia
  { lat: 59.9, lng: 30.3 }, { lat: 55.8, lng: 37.6 }, { lat: 54.7, lng: 56.0 },
  { lat: 56.3, lng: 44.0 }, { lat: 58.0, lng: 56.3 }, { lat: 61.8, lng: 50.8 },
  { lat: 64.5, lng: 40.5 }, { lat: 68.0, lng: 33.1 }, { lat: 66.0, lng: 33.4 },
  { lat: 69.7, lng: 30.1 }, { lat: 52.6, lng: 39.6 }, { lat: 48.7, lng: 44.5 },
  { lat: 51.7, lng: 55.1 }, { lat: 55.0, lng: 82.9 },
  
  // Turquia
  { lat: 41.0, lng: 29.0 }, { lat: 41.0, lng: 37.0 }, { lat: 41.0, lng: 43.0 },
  { lat: 39.9, lng: 32.9 }, { lat: 38.4, lng: 27.1 }, { lat: 36.9, lng: 30.7 },
  { lat: 37.0, lng: 35.3 }, { lat: 36.2, lng: 36.2 }, { lat: 37.6, lng: 44.0 },
  { lat: 39.0, lng: 44.0 },
  
  // ==================== ÁFRICA ====================
  // Marrocos
  { lat: 35.8, lng: -5.8 }, { lat: 34.0, lng: -6.8 }, { lat: 32.3, lng: -9.2 },
  { lat: 29.0, lng: -10.0 }, { lat: 27.7, lng: -13.0 },
  
  // Argélia
  { lat: 36.8, lng: 3.1 }, { lat: 35.0, lng: -1.0 }, { lat: 32.0, lng: 0.0 },
  { lat: 28.0, lng: 0.0 }, { lat: 24.0, lng: 8.0 }, { lat: 32.0, lng: 6.0 },
  
  // Tunísia e Líbia
  { lat: 37.3, lng: 9.8 }, { lat: 33.9, lng: 9.0 }, { lat: 32.9, lng: 13.2 },
  { lat: 30.0, lng: 20.0 }, { lat: 25.0, lng: 23.0 }, { lat: 32.0, lng: 20.0 },
  
  // Egito
  { lat: 31.2, lng: 32.3 }, { lat: 31.0, lng: 29.0 }, { lat: 30.0, lng: 31.2 },
  { lat: 29.0, lng: 32.5 }, { lat: 27.0, lng: 34.0 }, { lat: 24.0, lng: 35.0 },
  { lat: 22.0, lng: 31.0 }, { lat: 22.0, lng: 25.0 }, { lat: 26.0, lng: 25.0 },
  
  // África Ocidental
  { lat: 21.3, lng: -17.0 }, { lat: 16.0, lng: -16.5 }, { lat: 14.7, lng: -17.4 },
  { lat: 12.4, lng: -16.7 }, { lat: 11.3, lng: -15.0 }, { lat: 9.5, lng: -13.7 },
  { lat: 8.5, lng: -13.2 }, { lat: 7.0, lng: -11.0 }, { lat: 6.3, lng: -10.8 },
  { lat: 4.4, lng: -7.5 }, { lat: 5.3, lng: -4.0 }, { lat: 6.4, lng: -2.5 },
  { lat: 5.6, lng: 0.0 }, { lat: 6.1, lng: 1.2 }, { lat: 6.4, lng: 2.6 },
  
  // Nigéria e região
  { lat: 13.5, lng: 2.1 }, { lat: 12.0, lng: 8.5 }, { lat: 10.0, lng: 8.7 },
  { lat: 9.1, lng: 7.5 }, { lat: 6.5, lng: 3.4 }, { lat: 4.8, lng: 7.0 },
  { lat: 4.0, lng: 9.2 },
  
  // África Central
  { lat: 4.4, lng: 18.6 }, { lat: 2.0, lng: 16.0 }, { lat: 0.4, lng: 9.5 },
  { lat: -0.3, lng: 15.3 }, { lat: -4.3, lng: 15.3 }, { lat: -5.9, lng: 12.4 },
  { lat: -6.3, lng: 22.0 }, { lat: -4.0, lng: 29.0 }, { lat: -2.5, lng: 28.9 },
  { lat: -3.4, lng: 29.4 }, { lat: 2.0, lng: 30.0 }, { lat: 4.0, lng: 27.5 },
  
  // África Oriental
  { lat: 22.0, lng: 37.0 }, { lat: 18.0, lng: 37.0 }, { lat: 15.6, lng: 32.5 },
  { lat: 15.0, lng: 39.5 }, { lat: 12.0, lng: 43.0 }, { lat: 11.6, lng: 43.1 },
  { lat: 9.0, lng: 38.7 }, { lat: 5.0, lng: 46.0 }, { lat: 2.0, lng: 45.3 },
  { lat: 4.1, lng: 39.6 }, { lat: 0.3, lng: 37.0 }, { lat: -1.3, lng: 36.8 },
  { lat: -4.0, lng: 39.7 }, { lat: -6.2, lng: 39.2 },
  
  // Sul da África
  { lat: -8.8, lng: 13.2 }, { lat: -12.0, lng: 14.0 }, { lat: -15.4, lng: 12.6 },
  { lat: -17.9, lng: 12.2 }, { lat: -22.6, lng: 14.5 }, { lat: -26.2, lng: 18.9 },
  { lat: -28.8, lng: 16.5 }, { lat: -33.9, lng: 18.4 }, { lat: -34.0, lng: 25.0 },
  { lat: -33.0, lng: 27.9 }, { lat: -29.9, lng: 31.0 }, { lat: -27.0, lng: 32.9 },
  { lat: -26.2, lng: 32.4 }, { lat: -25.0, lng: 35.0 }, { lat: -15.0, lng: 40.5 },
  { lat: -11.7, lng: 43.3 }, { lat: -12.3, lng: 34.3 }, { lat: -13.5, lng: 32.7 },
  { lat: -15.8, lng: 35.0 }, { lat: -18.9, lng: 32.5 }, { lat: -22.0, lng: 30.0 },
  { lat: -22.3, lng: 27.1 }, { lat: -24.7, lng: 25.9 }, { lat: -17.8, lng: 25.3 },
  { lat: -15.5, lng: 28.3 }, { lat: -8.8, lng: 31.0 }, { lat: -6.8, lng: 29.2 },
  
  // Madagascar
  { lat: -12.3, lng: 49.3 }, { lat: -15.7, lng: 46.3 }, { lat: -18.9, lng: 47.5 },
  { lat: -21.5, lng: 47.5 }, { lat: -25.0, lng: 47.0 }, { lat: -25.6, lng: 45.2 },
  { lat: -23.4, lng: 43.7 }, { lat: -19.0, lng: 44.3 }, { lat: -16.0, lng: 49.8 },
  
  // ==================== ÁSIA ====================
  // Rússia Asiática
  { lat: 73.0, lng: 80.0 }, { lat: 72.0, lng: 103.0 }, { lat: 74.0, lng: 113.0 },
  { lat: 72.0, lng: 129.0 }, { lat: 70.0, lng: 136.0 }, { lat: 69.0, lng: 161.0 },
  { lat: 66.0, lng: 169.0 }, { lat: 65.0, lng: -170.0 }, { lat: 62.0, lng: 179.0 },
  { lat: 59.5, lng: 163.0 }, { lat: 56.1, lng: 162.0 }, { lat: 53.0, lng: 158.5 },
  { lat: 52.0, lng: 141.0 }, { lat: 46.0, lng: 143.0 }, { lat: 43.0, lng: 132.0 },
  { lat: 62.0, lng: 129.5 }, { lat: 58.0, lng: 92.0 }, { lat: 55.0, lng: 83.0 },
  { lat: 51.0, lng: 80.0 }, { lat: 55.0, lng: 61.0 }, { lat: 61.0, lng: 69.0 },
  { lat: 66.5, lng: 66.6 }, { lat: 68.0, lng: 54.0 }, { lat: 66.0, lng: 44.0 },
  
  // Cazaquistão
  { lat: 51.2, lng: 51.4 }, { lat: 47.1, lng: 52.0 }, { lat: 44.0, lng: 51.0 },
  { lat: 42.5, lng: 54.0 }, { lat: 42.0, lng: 59.0 }, { lat: 44.0, lng: 65.0 },
  { lat: 46.0, lng: 74.0 }, { lat: 48.0, lng: 85.0 }, { lat: 51.0, lng: 77.0 },
  { lat: 53.0, lng: 69.0 }, { lat: 54.0, lng: 61.0 },
  
  // Ásia Central
  { lat: 42.9, lng: 74.6 }, { lat: 41.3, lng: 69.3 }, { lat: 39.7, lng: 66.9 },
  { lat: 37.6, lng: 61.0 }, { lat: 38.0, lng: 58.4 }, { lat: 37.9, lng: 58.4 },
  { lat: 35.0, lng: 62.0 }, { lat: 34.5, lng: 69.2 }, { lat: 37.0, lng: 71.5 },
  { lat: 39.5, lng: 76.0 },
  
  // Irã
  { lat: 38.1, lng: 48.3 }, { lat: 37.3, lng: 44.4 }, { lat: 35.7, lng: 51.4 },
  { lat: 32.7, lng: 51.7 }, { lat: 29.6, lng: 52.5 }, { lat: 27.2, lng: 56.3 },
  { lat: 25.3, lng: 60.6 }, { lat: 27.0, lng: 63.3 }, { lat: 29.5, lng: 60.9 },
  { lat: 34.3, lng: 60.9 }, { lat: 37.0, lng: 57.0 },
  
  // Arábia Saudita e Península Arábica
  { lat: 31.0, lng: 36.0 }, { lat: 29.0, lng: 35.0 }, { lat: 28.0, lng: 34.7 },
  { lat: 24.5, lng: 37.0 }, { lat: 20.0, lng: 38.5 }, { lat: 17.5, lng: 42.5 },
  { lat: 13.0, lng: 43.2 }, { lat: 12.8, lng: 45.0 }, { lat: 15.4, lng: 52.2 },
  { lat: 17.0, lng: 55.0 }, { lat: 22.0, lng: 59.5 }, { lat: 24.5, lng: 56.3 },
  { lat: 26.1, lng: 56.4 }, { lat: 26.0, lng: 50.6 }, { lat: 29.4, lng: 48.0 },
  { lat: 28.0, lng: 48.5 }, { lat: 24.7, lng: 46.7 }, { lat: 21.5, lng: 39.2 },
  
  // Iraque, Síria, Jordânia, Israel, Líbano
  { lat: 37.1, lng: 42.4 }, { lat: 35.0, lng: 38.5 }, { lat: 33.5, lng: 36.3 },
  { lat: 33.9, lng: 35.5 }, { lat: 32.0, lng: 35.5 }, { lat: 31.0, lng: 35.2 },
  { lat: 29.5, lng: 35.0 }, { lat: 30.0, lng: 47.5 }, { lat: 33.3, lng: 44.4 },
  
  // Índia
  { lat: 35.0, lng: 75.0 }, { lat: 32.0, lng: 77.0 }, { lat: 30.0, lng: 78.0 },
  { lat: 28.6, lng: 77.2 }, { lat: 26.9, lng: 75.8 }, { lat: 23.0, lng: 69.7 },
  { lat: 20.0, lng: 73.0 }, { lat: 19.1, lng: 72.9 }, { lat: 15.4, lng: 73.8 },
  { lat: 12.9, lng: 74.8 }, { lat: 8.5, lng: 77.0 }, { lat: 10.0, lng: 78.3 },
  { lat: 13.1, lng: 80.3 }, { lat: 17.4, lng: 78.5 }, { lat: 20.3, lng: 85.8 },
  { lat: 22.6, lng: 88.4 }, { lat: 24.0, lng: 89.0 }, { lat: 26.0, lng: 90.0 },
  { lat: 27.5, lng: 89.0 }, { lat: 28.2, lng: 84.0 },
  
  // Sri Lanka
  { lat: 9.7, lng: 80.0 }, { lat: 7.9, lng: 81.9 }, { lat: 6.0, lng: 80.2 },
  { lat: 6.9, lng: 79.9 },
  
  // Nepal e Butão
  { lat: 28.4, lng: 84.1 }, { lat: 27.7, lng: 85.3 }, { lat: 27.5, lng: 89.6 },
  
  // Bangladesh
  { lat: 26.1, lng: 88.9 }, { lat: 24.0, lng: 90.4 }, { lat: 22.3, lng: 91.8 },
  { lat: 21.4, lng: 92.0 }, { lat: 23.8, lng: 90.4 },
  
  // Myanmar
  { lat: 28.2, lng: 97.5 }, { lat: 25.0, lng: 97.0 }, { lat: 21.9, lng: 96.1 },
  { lat: 19.8, lng: 96.2 }, { lat: 16.8, lng: 96.2 }, { lat: 14.6, lng: 98.2 },
  { lat: 12.0, lng: 99.0 }, { lat: 10.0, lng: 98.6 },
  
  // Tailândia
  { lat: 20.5, lng: 100.5 }, { lat: 18.8, lng: 99.0 }, { lat: 13.8, lng: 100.5 },
  { lat: 12.7, lng: 101.0 }, { lat: 9.1, lng: 99.3 }, { lat: 7.9, lng: 98.3 },
  { lat: 8.0, lng: 100.0 }, { lat: 6.5, lng: 101.5 }, { lat: 15.9, lng: 102.8 },
  
  // Vietnã, Camboja, Laos
  { lat: 23.4, lng: 105.4 }, { lat: 21.0, lng: 105.9 }, { lat: 16.5, lng: 107.6 },
  { lat: 12.2, lng: 109.2 }, { lat: 10.8, lng: 106.6 }, { lat: 8.6, lng: 106.6 },
  { lat: 11.6, lng: 104.9 }, { lat: 13.4, lng: 103.9 }, { lat: 17.9, lng: 102.6 },
  { lat: 20.0, lng: 103.0 },
  
  // Malásia e Singapura
  { lat: 6.4, lng: 100.2 }, { lat: 4.2, lng: 103.4 }, { lat: 1.5, lng: 103.8 },
  { lat: 1.3, lng: 103.8 }, { lat: 4.6, lng: 118.1 }, { lat: 6.0, lng: 116.1 },
  { lat: 5.0, lng: 115.0 }, { lat: 4.0, lng: 114.0 },
  
  // Indonésia
  { lat: 5.6, lng: 95.3 }, { lat: 1.0, lng: 104.0 }, { lat: -0.9, lng: 104.5 },
  { lat: -2.2, lng: 106.0 }, { lat: -6.2, lng: 106.8 }, { lat: -6.9, lng: 110.4 },
  { lat: -7.3, lng: 112.7 }, { lat: -8.3, lng: 114.4 }, { lat: -8.5, lng: 116.0 },
  { lat: -8.6, lng: 119.4 }, { lat: -5.1, lng: 119.4 }, { lat: -1.3, lng: 116.8 },
  { lat: 1.5, lng: 125.0 }, { lat: -0.9, lng: 134.1 }, { lat: -2.5, lng: 140.7 },
  { lat: -5.5, lng: 140.0 }, { lat: -8.5, lng: 140.6 },
  
  // Filipinas
  { lat: 18.5, lng: 121.0 }, { lat: 14.6, lng: 121.0 }, { lat: 10.3, lng: 123.9 },
  { lat: 7.1, lng: 125.5 }, { lat: 6.9, lng: 122.1 }, { lat: 12.9, lng: 124.0 },
  
  // China
  { lat: 39.9, lng: 116.4 }, { lat: 31.2, lng: 121.5 }, { lat: 23.1, lng: 113.3 },
  { lat: 22.3, lng: 114.2 }, { lat: 25.0, lng: 121.5 }, { lat: 30.3, lng: 120.2 },
  { lat: 36.1, lng: 120.4 }, { lat: 38.9, lng: 121.6 }, { lat: 41.8, lng: 123.4 },
  { lat: 45.8, lng: 126.5 }, { lat: 43.8, lng: 125.3 }, { lat: 47.4, lng: 123.0 },
  { lat: 49.2, lng: 119.8 }, { lat: 43.0, lng: 89.2 }, { lat: 36.6, lng: 101.8 },
  { lat: 29.7, lng: 91.1 }, { lat: 28.2, lng: 84.0 }, { lat: 39.5, lng: 76.0 },
  { lat: 34.3, lng: 108.9 }, { lat: 30.6, lng: 114.3 }, { lat: 29.6, lng: 106.5 },
  { lat: 26.6, lng: 106.7 }, { lat: 25.0, lng: 102.7 }, { lat: 22.8, lng: 108.3 },
  { lat: 20.0, lng: 110.3 },
  
  // Mongólia
  { lat: 47.9, lng: 106.9 }, { lat: 49.0, lng: 89.0 }, { lat: 46.0, lng: 97.0 },
  { lat: 44.0, lng: 112.0 }, { lat: 42.0, lng: 105.0 },
  
  // Coreia do Norte e Sul
  { lat: 42.0, lng: 128.0 }, { lat: 40.0, lng: 127.0 }, { lat: 39.0, lng: 125.8 },
  { lat: 37.6, lng: 127.0 }, { lat: 35.2, lng: 129.1 }, { lat: 35.1, lng: 126.9 },
  { lat: 33.5, lng: 126.5 },
  
  // Japão
  { lat: 43.1, lng: 141.3 }, { lat: 43.8, lng: 145.5 }, { lat: 42.0, lng: 140.7 },
  { lat: 39.7, lng: 140.1 }, { lat: 38.3, lng: 141.0 }, { lat: 36.1, lng: 140.1 },
  { lat: 35.7, lng: 139.7 }, { lat: 34.7, lng: 135.5 }, { lat: 34.4, lng: 132.5 },
  { lat: 33.6, lng: 130.4 }, { lat: 31.6, lng: 130.6 }, { lat: 26.2, lng: 127.7 },
  
  // Taiwan
  { lat: 25.0, lng: 121.5 }, { lat: 23.5, lng: 120.5 }, { lat: 22.0, lng: 120.5 },
  
  // ==================== OCEANIA ====================
  // Austrália
  { lat: -12.5, lng: 130.8 }, { lat: -12.2, lng: 136.8 }, { lat: -10.6, lng: 142.2 },
  { lat: -16.9, lng: 145.8 }, { lat: -19.3, lng: 146.8 }, { lat: -23.4, lng: 150.5 },
  { lat: -27.5, lng: 153.0 }, { lat: -33.9, lng: 151.2 }, { lat: -37.8, lng: 145.0 },
  { lat: -38.4, lng: 145.5 }, { lat: -43.6, lng: 147.3 }, { lat: -42.9, lng: 147.3 },
  { lat: -40.7, lng: 144.8 }, { lat: -38.1, lng: 140.5 }, { lat: -35.0, lng: 138.6 },
  { lat: -32.9, lng: 137.8 }, { lat: -34.9, lng: 135.9 }, { lat: -33.0, lng: 134.0 },
  { lat: -32.0, lng: 132.0 }, { lat: -34.4, lng: 115.1 }, { lat: -31.9, lng: 115.9 },
  { lat: -28.0, lng: 114.6 }, { lat: -23.8, lng: 113.7 }, { lat: -20.3, lng: 118.6 },
  { lat: -17.9, lng: 122.2 }, { lat: -14.5, lng: 129.0 }, { lat: -24.0, lng: 133.9 },
  { lat: -20.0, lng: 140.0 }, { lat: -26.0, lng: 134.0 }, { lat: -29.0, lng: 138.0 },
  
  // Nova Zelândia
  { lat: -34.4, lng: 172.7 }, { lat: -36.8, lng: 174.8 }, { lat: -37.8, lng: 175.3 },
  { lat: -39.3, lng: 174.0 }, { lat: -41.3, lng: 174.8 }, { lat: -41.5, lng: 173.5 },
  { lat: -43.5, lng: 172.6 }, { lat: -45.9, lng: 170.5 }, { lat: -46.4, lng: 168.4 },
  { lat: -45.0, lng: 167.0 }, { lat: -43.0, lng: 170.5 }, { lat: -42.5, lng: 171.2 },
  
  // Papua Nova Guiné
  { lat: -5.0, lng: 145.8 }, { lat: -6.1, lng: 145.4 }, { lat: -5.5, lng: 147.2 },
  { lat: -6.0, lng: 155.0 }, { lat: -4.2, lng: 152.2 }, { lat: -2.5, lng: 141.0 },
];
