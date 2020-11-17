import https from 'https';

export default (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    https.get('https://rickandmortyapi.com/api/character/' + Math.ceil(Math.random() * 671) , (data) => {
        var body = '';

        data.on('data', function (chunk) {
            body += chunk;
        });

        data.on('end', function () {
            let temp = JSON.parse(body);
            var out = {};
            out.title = temp.name;
            out.type = temp.type;
            out.img = temp.image;
            out.source = temp.url;
            out.status = temp.status;
            res.json(out);
        });

    }).on('error', (e) => {
        console.error(e);
    });
}
