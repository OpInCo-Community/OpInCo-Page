import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../src/components/Layout"
import { DarkModeProvider } from "../src/hooks/useDarkMode"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DarkModeProvider>
  )
}

export default MyApp
