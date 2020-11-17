import https from 'https';

export default (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    https.get('https://finalspaceapi.com/api/v0/character/' + Math.ceil(Math.random() * 40) , (data) => {
        var body = '';

        data.on('data', function (chunk) {
            body += chunk;
        });

        data.on('end', function () {
            let temp = JSON.parse(body);
            var out = {};
            out.title = temp.name;
            out.type = temp.species;
            out.img = temp.img_url;
            out.source = "";
            out.status = temp.status;
            res.json(out);
        });

    }).on('error', (e) => {
        console.error(e);
    });
}
