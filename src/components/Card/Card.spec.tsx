// eslint-disable-next-line
import { render, screen } from "@testing-library/react";
import Card from './Card';

describe('<Card>', () => {
  it('deve renderizar o título', () => {
    render(<Card title="Titulo" description="Minha descrição" />);
    screen.getAllByText('Titulo');
  });
  it('deve renderizar a descrição', () => {
    render(<Card description="Minha descrição" />);
    screen.getAllByText('Minha descrição');
  });

  it('deve renderizar o comentário', () => {
    render(<Card comment="Meu comentário" description="Minha descrição" />);
    screen.getAllByText('Meu comentário');
  });
});
