import Footer from '@/Components/Footer';
import '@/styles/index.css';
import Navbar from '@/Components/Navbar';
import { GlobalContextProvider } from '@/Store/GlobalContext';

import Overlay from '@/Components/Overlay';
export default function App({ Component, pageProps }) {

  return <>
    <GlobalContextProvider>
      <Overlay />
      <Component {...pageProps} />
      <Footer />
    </GlobalContextProvider >
  </>
}
