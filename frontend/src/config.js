// Base URL cho API backend
// Khi chạy Docker, Nginx proxy /api/ tới backend, nên dùng relative path
// Khi dev local, dùng biến môi trường VITE_API_URL
export const API_BASE = import.meta.env.VITE_API_URL || '';
