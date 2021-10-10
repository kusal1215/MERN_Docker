const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const Items =  require('./models/items');

mongoose.connect('mongodb://mongo:27017/products', { useNewUrlParser: true}
).then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// mongoose.connection.once('open' , () => {
//     console.log("Mongodb connected successfully...")
// });

const PORT = 4000;

const app = express();

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    Items.find((err, items) => {
        if(err){
            console.log(err);
        } else {
            res.json(items);
        }
    });
});

app.post('/create', (req,res) => {
    const items = new Items(req.body)
    items.save().then((items) => {
        res.json(items);
    }).catch(err => {
        res.status(500).send(err.mes);
    });
});


app.get('/:id',(req, res) => {
    const id = req.params.id;
    Items.findById(id, (err, items) => {
        res.json(items);
    });
});

app.post("/:id", (req, res) => {

    const id = req.params.id;

    Items.findById(id, (err, items) => {

      if (!items) {
        res.status(404).send("items not found");
      } else {
        items.product_name = req.body.product_name;
        items.product_qty = req.body.product_qty;
        items.product_price = req.body.product_price;
        items.product_des = req.body.product_des;
  
        items
          .save()
          .then((items) => {
            res.json(items);
          })
          .catch((err) => res.status(500).send(err.message));
      }
    });
  });

app.listen(PORT, () => {
    console.log("Server is runnig on port " + PORT );
})