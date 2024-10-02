import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { BlogGrid } from '../src/components/BlogGrid'; 

const mockPosts = [
  {
    id: '1',
    title: 'Post 1',
    summary: 'Resumo do Post 1',
    content: 'Conteúdo do Post 1',
    createdAt: '2023-10-01',
  },
  {
    id: '2',
    title: 'Post 2',
    summary: 'Resumo do Post 2',
    content: 'Conteúdo do Post 2',
    createdAt: '2023-10-01',
  },
];

describe('BlogGrid', () => {
  test('Renderiza o número correto de posts', () => {
    render(<BlogGrid posts={mockPosts} />);

    expect(screen.getByText('Post 1')).toBeInTheDocument();
    expect(screen.getByText('Post 2')).toBeInTheDocument();
    expect(screen.getByText('Resumo do Post 1')).toBeInTheDocument();
    expect(screen.getByText('Resumo do Post 2')).toBeInTheDocument();
  });

  test('Renderiza um item para cada post', () => {
    render(<BlogGrid posts={mockPosts} />);

    const postLinks = screen.getAllByRole('link');
    expect(postLinks).toHaveLength(mockPosts.length);
    expect(postLinks[0]).toHaveAttribute('href', '/posts/1');
    expect(postLinks[1]).toHaveAttribute('href', '/posts/2');
  });
});
