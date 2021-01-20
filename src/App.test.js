import { render, screen } from '@testing-library/react';
import App from './App';
import GoogleSearch from './googleSearch/googleSearch'

test("renders something",()=>{
  render(<GoogleSearch/>);
  const linkElement = screen.getByText(/search.../i);
  expect(linkElement).toBeInTheDocument();
})
