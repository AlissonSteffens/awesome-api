import endpoints from '../../data/satellite_images.json'

export default (req, res) => {
  res.statusCode = 200
  // res.json(endpoints)
  let temp = endpoints[(Math.random() * endpoints.length) | 0]
  var out = {};
  let name = ""
  if(temp.region !== ""){
    name = `${temp.region} - ${temp.country}`
  } else{
    name = temp.country
  }
  out.title = name;
  out.img = 'https://awesome-api.vercel.app/api/cors?' + temp.image;
  out.source = temp.map;
  res.json(out);
}