import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import Omiam from 'src/components/Omiam';
import store from './store';

const rootReactElement = (
  <CookiesProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Omiam />
      </BrowserRouter>
    </Provider>
  </CookiesProvider>
);

const root = createRoot(document.getElementById('root'));
root.render(rootReactElement);
