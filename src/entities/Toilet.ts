export default interface Toilet {
  id: number;
  geolocation: { lat: number; lng: number };
  name: string;
  rating: number;
  price: number;
}
