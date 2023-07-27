import indexTemplate from './indexTemplate';
import HelloReact from '../shared/HelloReact'

const express = require('express');
const ReactDOMServer = require('react-dom/server');

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/static', express.static('./dist/client/'))

app.get('/', (req, res) => {
    res.send(
        indexTemplate(ReactDOMServer.renderToString(HelloReact()))
    )
})

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});