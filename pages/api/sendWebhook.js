// pages/api/sendWebhook.js

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Récupération des données de la requête POST
    const { name, email, phone, message } = req.body;

    // Vérification des données
    if (!name || !email || !phone || !message) {
      res.status(400).json({ error: 'Tous les champs sont obligatoires.' });
      return;
    }

    // Traitement ou envoi au Webhook Discord
    console.log('Nom:', name, 'Email:', email, 'Téléphone:', phone, 'Message:', message);

    // Réponse de succès
    res.status(200).json({ message: 'Webhook envoyé avec succès.' });
  } else {
    // Gestion des autres méthodes HTTP
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Méthode ${req.method} non autorisée.` });
  }
}


export default function handler(req, res) {
  res.status(200).json({ message: 'API Fonctionnelle !' });
}