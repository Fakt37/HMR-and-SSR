const indexTemplate = (content) => `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello React</title>
</head>

<body>
    <div id="root">${content}</div>
    <script src="/static/client.js" type="application/javascript"></script>
</body>

</html>
`

export default indexTemplate;