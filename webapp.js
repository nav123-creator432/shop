const express=require('express');
const app= express();
const bodyParser = require("body-parser");
app.set('view engine','ejs');
app.listen(3002,() => {
  console.log("Server is running on the port 3002")
}
)   
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

let products=[];

app.get('/', (req, res) => {
  res.render('index',{products:products});
});

app.post('/product',(req,res) => {
 const name= req.body.name;
 const price= req.body.price;
  products.push({name:name,price:price});
  res.render('/');
  console.log(products);
}
);


app.use('/',(req,res) => {
    res.status(404).render('404');
}
)