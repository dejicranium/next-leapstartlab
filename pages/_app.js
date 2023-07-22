import { Inter, Red_Hat_Display, Quicksand, Merriweather } from 'next/font/google'
import Head from 'next/head'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
const red_hat_display = Red_Hat_Display({ subsets: ['latin'] })
 
export default function MyApp({ Component, pageProps }) {


  return (<>
  
      <Head> 
        
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600&family=Montserrat:wght@300;400;500;600&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>      </Head>
      
    <main>
      <Component {...pageProps} />
    </main>
  </>
  )
}