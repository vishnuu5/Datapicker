// pages/_app.js
import '../styles/globals.css'; // Import global styles
import { Provider } from 'react-redux';
import { store } from '../store'; // Adjust path if needed

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
