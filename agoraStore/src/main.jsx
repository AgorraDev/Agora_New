import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(

  <Auth0Provider 
    domain='dev-agorra.uk.auth0.com'
    clientId='Sb93l8dgQi7Zdog6eMLzdnPeWNY7MyNa'
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    cacheLocation="localstorage"
    >
    <App />
  </Auth0Provider>,
)
