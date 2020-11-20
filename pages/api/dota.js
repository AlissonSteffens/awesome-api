import https from 'https';

export default (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    https.get('https://api.opendota.com/api/heroStats', (data) => {
        var body = '';

        data.on('data', function (chunk) {
            body += chunk;
        });

        data.on('end', function () {
            let list = JSON.parse(body);
            var temp = list[Math.floor(Math.random() * list.length)]
            var out = {};
            out.name = temp.localized_name;
            out.type = temp.attack_type;
            out.img = 'https://awesome-api.vercel.app/api/cors?image=https://api.opendota.com' + temp.img;
            out.source = "";
            out.status = temp.primary_attr;
            res.json(out);
        });

    }).on('error', (e) => {
        console.error(e);
    });

}
