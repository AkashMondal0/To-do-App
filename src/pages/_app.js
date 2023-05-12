import '@/styles/globals.css'
import { ThemeProvider } from "@material-tailwind/react";
import SpeedDial from '../../components/speedDial/speedDial';
import Modal from '../../components/modal/modal';
import { useState } from 'react';

export default function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider>
    <Modal open={open} setOpen={setOpen}/>
      <Component {...pageProps} />
     <div className='bottom-6 right-10 group absolute'>
     <SpeedDial open={open} setOpen={setOpen}/>
     </div>
    </ThemeProvider>
  );
}