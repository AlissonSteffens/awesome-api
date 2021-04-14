import endpoints from '../../data/endpoints'
export default (req, res) => {
  res.statusCode = 200
  res.json(endpoints)
}
