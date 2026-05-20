import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import App, { sampleProducts } from '../App'

test('toggles dark mode on button click', () => {
  render(<App />)

  const toggleBtn = screen.getByRole('button', {
    name: /toggle/i,
  })

  expect(toggleBtn).toBeInTheDocument()

  fireEvent.click(toggleBtn)

  expect(toggleBtn).toBeInTheDocument()
})

test('filters products by category', () => {
  render(<App />)

  const select = screen.getByRole('combobox')

  fireEvent.change(select, {
    target: { value: 'Fruits' },
  })

  expect(screen.getByText('Apple')).toBeInTheDocument()
})

test('displays message when no products match filter', () => {
  render(<App />)

  const select = screen.getByRole('combobox')

  fireEvent.change(select, {
    target: { value: 'Vegetables' },
  })

  expect(
    screen.getByText(/no products available/i)
  ).toBeInTheDocument()
})

test('adds items to cart', () => {
  render(<App />)

  const apple = sampleProducts.find(
    (item) => item.name === 'Apple'
  )

  const appleBtn = screen.getByTestId(
    `product-${apple.id}`
  )

  fireEvent.click(appleBtn)

  expect(
    screen.getByText(/shopping cart/i)
  ).toBeInTheDocument()

  expect(
    screen.getByText(/apple is in your cart/i)
  ).toBeInTheDocument()
})