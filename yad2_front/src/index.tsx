import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactDomBig from 'react-dom';
import './index.css';
import './styles/main.scss';
import reportWebVitals from './reportWebVitals';
import App from './router/Router';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import ScreenContextProvider from './Context/ScreenContext';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ScreenContextProvider>


        <BrowserRouter>

          <App />
        </BrowserRouter>
        {ReactDomBig.createPortal(
          <div className="modal-backdrop" />, // Style this backdrop in CSS
          document.getElementById('backdrop-root') as HTMLElement
        )}

        {/* {ReactDomBig.createPortal(
          <Modal />, // Your Modal component
          document.getElementById('overlay-root') as HTMLElement
        )} */}
      </ScreenContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);


reportWebVitals();
