
const request=require('request')

const weather=(data,callback)=>{
 
const url="http://api.weatherstack.com/current?access_key=50e3d3d95d8b6484db12b71a666daf53&query="+data.place

request({url:url,json:true},(error,response)=>{
    
    if(response.body.error)
    {
        callback("404",undefined)
    }
    else{
     

    callback(error,{

        desc:response.body.current.weather_descriptions[0]
    })
}
    
})
}
module.exports=weather