import "tailwindcss/tailwind.css"
import '../styles/index.css'
import React from 'react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
