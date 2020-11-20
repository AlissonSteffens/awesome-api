import https from 'https';

export default (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    https.get('https://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json', (data) => {
        var body = '';

        data.on('data', function (chunk) {
            body += chunk;
        });

        data.on('end', function () {
            let dict = JSON.parse(body).data;
            var keys = Object.keys(dict);
            var temp = dict[keys[ keys.length * Math.random() << 0]];
            var out = {};
            out.name = temp.name;
            out.type = temp.title;
            out.img = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' +temp.id +"_0.jpg";
            out.source = 'https://br.leagueoflegends.com/pt-br/champions/'+ temp.id.toLowerCase();
            out.status = temp.partype;
            res.json(out);
        });

    }).on('error', (e) => {
        console.error(e);
    });

}
