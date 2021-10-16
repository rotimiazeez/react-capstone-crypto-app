import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import App from '../App';
import store from '../redux/configureStore';

describe('Homepage tests', () => {
  test('Bitcoin display', async () => {
    render(<Provider store={store}><App /></Provider>);
    expect(await screen.findByText('Bitcoin')).toBeInTheDocument();
  });

  test('Ethereum display', async () => {
    render(<Provider store={store}><App /></Provider>);
    expect(await screen.findByText('Ethereum')).toBeInTheDocument();
  });

  test('Cardano display', async () => {
    render(<Provider store={store}><App /></Provider>);
    expect(await screen.findByText('Cardano')).toBeInTheDocument();
  });

  test('Solana display', async () => {
    render(<Provider store={store}><App /></Provider>);
    expect(await screen.findByText('Solana')).toBeInTheDocument();
  });

  test('Tether display', async () => {
    render(<Provider store={store}><App /></Provider>);
    expect(await screen.findByText('Tether')).toBeInTheDocument();
  });

  test('Highest jump display', async () => {
    render(<Provider store={store}><App /></Provider>);
    expect(await screen.findByText('Highest jump of the day')).toBeInTheDocument();
  });
});

describe('Crypto and back button click', () => {
  test('Bitcoin click', async () => {
    render(<Provider store={store}><App /></Provider>);
    userEvent.click(await screen.findByText('Bitcoin'));
    expect(await screen.findByText('BTC')).toBeInTheDocument();
  });

  test('Ethereum click', async () => {
    render(<Provider store={store}><App /></Provider>);
    userEvent.click(screen.getByRole('button'));
    userEvent.click(await screen.findByText('Ethereum'));
    expect(await screen.findByText('ETH')).toBeInTheDocument();
    expect(await screen.findByText('Ethereum view')).toBeInTheDocument();
  });

  test('Cardano click', async () => {
    render(<Provider store={store}><App /></Provider>);
    userEvent.click(screen.getByRole('button'));
    userEvent.click(await screen.findByText('Cardano'));
    expect(await screen.findByText('ADA')).toBeInTheDocument();
    expect(await screen.findByText('Cardano view')).toBeInTheDocument();
  });

  test('Solana click', async () => {
    render(<Provider store={store}><App /></Provider>);
    userEvent.click(screen.getByRole('button'));
    userEvent.click(await screen.findByText('Solana'));
    expect(await screen.findByText('SOL')).toBeInTheDocument();
    expect(await screen.findByText('Solana view')).toBeInTheDocument();
  });

  test('Tether click', async () => {
    render(<Provider store={store}><App /></Provider>);
    userEvent.click(screen.getByRole('button'));
    userEvent.click(await screen.findByText('Tether'));
    expect(await screen.findByText('USDT')).toBeInTheDocument();
    expect(await screen.findByText('Tether view')).toBeInTheDocument();
  });
});
