import https from 'https';

export default (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    https.get('https://picsum.photos/id/' + Math.ceil(Math.random() * 1084) + '/info', (data) => {
        var body = '';

        data.on('data', function (chunk) {
            body += chunk;
        });

        data.on('end', function () {
            let temp = JSON.parse(body);
            var out = {};
            out.title = temp.id;
            out.author = temp.author;
            out.img = 'https://awesome-api.vercel.app/api/cors?image=' + temp.download_url;
            out.source = temp.url;
            out.year = "";
            res.json(out);
        });

    }).on('error', (e) => {
        console.error(e);
    });
}
