import https from 'https';
import request from 'request';

export default (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.query.image) {
        request
            .get(req.query.image)
            .on('response', function (response) {
                // res.send(response, response.headers['content-type']) // 200
                // console.log(response.headers['content-type']) // 'image/png'
            }).pipe(res)
    }
    
}
