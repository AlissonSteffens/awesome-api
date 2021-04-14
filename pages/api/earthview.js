import endpoints from '../../data/satellite_images.json'

export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.statusCode = 200;
  // res.json(endpoints)
  let temp = endpoints[(Math.random() * endpoints.length) | 0]
  var out = {};
  let name = ""
  if (temp.region !== "") {
    name = `${temp.region} - ${temp.country}`
  } else {
    name = temp.country
  }
  out.title = name;
  out.author = "Google Earth";
  out.img = 'https://awesome-api.vercel.app/api/cors?image=' + temp.image;
  out.source = temp.map;
  res.json(out);
}