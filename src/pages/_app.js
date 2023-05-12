import '@/styles/globals.css'
import { ThemeProvider } from "@material-tailwind/react";
import { useState } from 'react';
import AppState from '../../context/AppState';

export default function MyApp({ Component, pageProps }) {

  const [tab, setTab] = useState('Tasks')

  return (
    <ThemeProvider>
      <AppState>
        <Component {...pageProps} />
      </AppState>
    </ThemeProvider>
  );
}