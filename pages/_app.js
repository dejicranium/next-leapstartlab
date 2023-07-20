import { Inter, Red_Hat_Display } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
const red_hat_display = Red_Hat_Display({ subsets: ['latin'] })
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={red_hat_display.className}>
      <Component {...pageProps} />
    </main>
  )
}