import "tailwindcss/tailwind.css"
import '../styles/index.css'
import React from 'react';

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp;
