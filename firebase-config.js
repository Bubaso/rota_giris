// Firebase Console > Proje Ayarları > "Web uygulaması" bölümündeki
// firebaseConfig değerlerini buraya yapıştırın.
export const firebaseConfig = {
  apiKey: "AIzaSyAo278ggN3FoYQWC1EL5GrZ-sp0FI0wtsk",
  authDomain: "rota-c8253.firebaseapp.com",
  projectId: "rota-c8253",
  storageBucket: "rota-c8253.firebasestorage.app",
  messagingSenderId: "443729594024",
  appId: "1:443729594024:web:1e64d2b962d2c1a46a649d"
};

// Otel konumu (Google Haritalar'dan alın). Konum kontrolünü kapatmak için
// KONUM_KONTROLU = false yapın.
export const KONUM_KONTROLU = true;
export const OTEL_LAT = 39.925489;
export const OTEL_LNG = 32.855259;
export const YARICAP_METRE = 100; // otele bu mesafeden uzakta kayıt alınmaz

export const OTEL_ADI = "Rota Bulvar Otel";
