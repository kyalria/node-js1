const express=require('express')
const hbs=require('hbs')
const path=require('path')
const app=express()
const port=process.env.PORT || 3000
const geocode=require('./geocode')
const weather=require('./weather')


app.set('view engine','hbs')
const viewspath=path.join(__dirname,"../template/views")

app.set('views',viewspath)
const partialpath=path.join(__dirname,"../template/partials")

app.use(express.static(path.join(__dirname,'../Public')))

hbs.registerPartials(partialpath)


app.get('',(req,res)=>{
    res.render('Weather',{
        title:'Weather',
       
    })
})
 app.get('/Weather',(req,res)=>{
    if(!req.query.search)
    {
        res.send({
                error:'not found'
     })
    }
    else{
        const address=req.query.search
        
        const location=geocode(address,(error,data={})=>{
            
           
            if(error)
            {
                res.send({
                    error:error
                })
            }
           else{
            const weatherreport=weather(data,(error,report)=>{
                
                if(error)
                {
                    res.send({
                        error:error
                    })
                }
                else{
                res.send({
                    title:data.place,
                    msg:report.desc
                })
            }
            })
        }
        
        })
        
    
     
}
})



app.listen(port,()=>{
    console.log("server on port"+port)
})