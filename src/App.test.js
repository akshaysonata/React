import { render, screen } from '@testing-library/react';
import App from './App';

test("Toggle text visible", async () => {
  render(<App/>);
  await userEvent.click(screen.getByText(/Click/i));
  expect(screen.getByText(/Text visible/i)).toBeInTheDocument();
})

test("check name",async ()=> {
  render(<App/>);
  const element = screen.getByText(/Testing First Test Case/i);
  expect(element).toBeInTheDocument();
} )
