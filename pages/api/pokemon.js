import https from 'https';

export default (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    https.get('https://pokeapi.co/api/v2/pokemon/' + Math.ceil(Math.random() * 893) , (data) => {
        var body = '';

        data.on('data', function (chunk) {
            body += chunk;
        });

        data.on('end', function () {
            let temp = JSON.parse(body);
            var out = {};
            out.name = temp.name;
            let types = [];
            temp.types.forEach(element => {
                types.push(element.type.name)
            });
            out.type = types.join(' - ');
            out.img = temp.sprites.front_default;
            out.source = 'https://www.pokemon.com/br/pokedex/'+temp.name;
            out.status = temp.status;
            res.json(out);
        });

    }).on('error', (e) => {
        console.error(e);
    });
}
