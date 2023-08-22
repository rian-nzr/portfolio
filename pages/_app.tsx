import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layouts'
import { ThemeProvider } from 'next-themes';
// import AOS from 'aos';
import { useEffect } from 'react';
import AOS from 'aos'

// import aos styles
import 'aos/dist/aos.css';


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <ThemeProvider attribute='class'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
