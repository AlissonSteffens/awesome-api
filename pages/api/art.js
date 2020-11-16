import https from 'https';

export default (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    https.get('https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&isOnView=true&q=canvas', (data) => {
        var body = '';

        data.on('data', function (chunk) {
            body += chunk;
        });

        data.on('end', function () {
            let list = JSON.parse(body).objectIDs;
            var objid = list[Math.floor(Math.random() * list.length)]
            https.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + objid, (ndata) => {
                var content = '';

                ndata.on('data', function (chunk) {
                    content += chunk;
                });

                ndata.on('end', function () {
                    let temp = JSON.parse(content);
                    var out = {};
                    out.title = temp.title;
                    out.author = temp.artistDisplayName;
                    out.img = 'https://awesome-api.vercel.app/api/cors?image=' + temp.primaryImage;
                    out.source = temp.objectURL;
                    out.year = temp.objectDate;
                    res.json(out);
                });

            }).on('error', (e) => {
                console.error(e);
            });
            
        });

    }).on('error', (e) => {
        console.error(e);
    });

}
