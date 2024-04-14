import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CardLink from '.';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    __esModule: true,
    ...originalModule,
    useParams: jest.fn(),
    useHistory: jest.fn()
  };
});

describe('CardLink', () => {
  it('должен правильно отображаться на странице', () => {
    const { container } = render(
      <BrowserRouter>
        <CardLink name="Тестовое Название" link="/test-link" />
      </BrowserRouter>
    );

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('должен правильно отображать параметр `name`', () => {
    render(
      <BrowserRouter>
        <CardLink name="Тестовое Название" link="/test-link" />
      </BrowserRouter>
    );

    const name = screen.getByRole('heading');
    expect(name.textContent).toEqual('Тестовое Название');
  });

  it('должен правильно отображать параметр `link`', () => {
    render(
      <BrowserRouter>
        <CardLink name="Тестовое Название" link="/test-link" />
      </BrowserRouter>
    );

    const { href } = screen.getByRole('link') as HTMLLinkElement;
    expect(href).toEqual('http://localhost/test-link');
  });

  it('должен переходить по ссылке `link` при клике на карту', () => {
    render(
      <BrowserRouter>
        <CardLink name="Тестовое Название" link="/test-link" />
      </BrowserRouter>
    );

    const locationBeforeRouting = window.location.href;
    expect(locationBeforeRouting).toEqual('http://localhost/');

    const link = screen.getByRole('link') as HTMLLinkElement;
    fireEvent.click(link);

    const locationAfterRouting = window.location.href;
    expect(locationAfterRouting).toEqual('http://localhost/test-link');
  });
});
