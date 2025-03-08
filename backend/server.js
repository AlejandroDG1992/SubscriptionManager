import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import usersRoutes from './routes/users.js';
import subscriptionsRoutes from './routes/subscriptions.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:5173',  // URL de tu frontend (React)
  methods: 'GET, POST', // Métodos permitidos
}));

app.use(express.json()); // Para poder procesar el cuerpo de las solicitudes como JSON

// Configuración de Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Rutas de usuarios y suscripciones
app.use('/api/users', usersRoutes(supabase));  // Ruta para manejar usuarios
app.use('/api/subscriptions', subscriptionsRoutes(supabase));  // Ruta para manejar suscripciones

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
