// pages/api/test.js
export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json({ message: 'API test is working!' });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  