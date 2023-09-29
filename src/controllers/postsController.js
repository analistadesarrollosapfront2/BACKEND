const axios = require('axios');

// Controlador para obtener todas las publicaciones
exports.getAllPosts = async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPosts: exports.getAllPosts
};
