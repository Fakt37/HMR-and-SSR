import React from 'react';
import { createRoot } from 'react-dom/client';
import HelloReact from '../shared/HelloReact';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const render = (Component) => {
    root.render(<Component />);
};

render(HelloReact);

// Принимаем HMR-обновления для модуля HelloReact
if (module.hot) {
    module.hot.accept('../shared/HelloReact', () => {
        const NextHelloReact = require('../shared/HelloReact').default;
        render(NextHelloReact);
    });
}
