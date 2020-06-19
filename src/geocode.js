
const request=require('request')


const geocode=(address,callback)=>{
const loc="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1Ijoicmlha3lhbCIsImEiOiJja2JnMGNoeTQwZWo3MnltbDRpdGV4cTVoIn0.4gJOFQjQypU1gkLqKYCBOg"
request({url:loc,json:true},(error,response)=>{
    
   
    if(response.body.features.length==0)
    {
        callback({
            error:'Not Found'
        },undefined)
    }
   else{
    callback(undefined,{
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        place: response.body.features[0].place_name
    })
}
})

}
module.exports=geocode