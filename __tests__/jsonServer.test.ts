import axios from 'axios';

describe('JSON Server', () => {
  const baseUrl = 'http://localhost:3000/blogPosts';

  test('Deve retornar todos os posts do blog', async () => {
    const response = await axios.get(baseUrl);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test('Deve retornar um post específico', async () => {
    const response = await axios.get(`${baseUrl}/1`);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('title', 'História do Futebol');
    expect(response.data).toHaveProperty('summary', 'Uma visão geral sobre a evolução do futebol ao longo dos anos.');
  });

  test('Deve retornar 404 para um post inexistente', async () => {
    try {
      await axios.get(`${baseUrl}/9bff9ww9eeee`);
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });
});
