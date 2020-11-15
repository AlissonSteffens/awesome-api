import request from 'request';

export default (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.query.photo) {
        request
        .get(req.query.photo)
        .on('response', function(response) {
            // res.send(response, response.headers['content-type']) // 200
            // console.log(response.headers['content-type']) // 'image/png'
        }).pipe(res)
        
    }
    else {
        request(
            { url: 'https://picsum.photos/id/' + Math.ceil(Math.random() * 1084) + '/info' },
            (error, response, body) => {
                if (error || response.statusCode !== 200) {
                    return res.status(500).json({ type: 'error', message: err.message });
                }

                res.json(JSON.parse(body));
            }
        )
    }


}
