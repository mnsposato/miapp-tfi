export default function handler(req, res) {
  if (req.method === 'POST') {
    // Aquí recibirías las notificaciones de MercadoLibre
    console.log('Notificación recibida:', req.body);

    // Respondemos con 200 OK para que MercadoLibre sepa que la URL es válida
    res.status(200).json({ message: 'Webhook recibido correctamente' });
  } else {
    // Si alguien entra con GET, mostramos un mensaje simple
    res.status(200).send('Endpoint de webhook activo');
  }
}
