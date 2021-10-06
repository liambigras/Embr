const axios = require('axios');
const baseURL = 'https://kdv8u5kepd.execute-api.ap-southeast-2.amazonaws.com/';

export default async(req,res) => {
 try{
  const result = await axios.get(baseURL + 'whitelist?address='+req.body)
  .then((result) => {return result})
  res.status(200).json(result.data);
 }catch(e){
  res.status(500).send(e);
 }
  
}

//https://kdv8u5kepd.execute-api.ap-southeast-2.amazonaws.com/whitelist?address=
