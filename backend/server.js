const express = require ('express');
const cors = require ('cors');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require("mongoose");


dotenv.config();



const URL = process.env.MONGODB_URL;
const connection = mongoose.connection;
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());



mongoose.connect(URL, {
    //define connection
  });

  app.listen(PORT,() => {
    console.log(`Server id running on port ${PORT}`);
});

connection.once("open", () => {
    //open connection for one time
    console.log("MongoDB connection was successful"); //display message in console when the connection was successful
  });



  // Shed routes

  const myRoutes = express.Router();
  app.use('/railway', myRoutes);
  let shed_menu = require('./models/shed_model');


  myRoutes.route('/').get(function(req, res) {
    shed_menu.find(function(err, Shed_Menu) {
        if (err) {
            console.log(err);
        } else {
            res.json(Shed_Menu);
        }
    });
});

myRoutes.route('/add').post(function(req, res) {
    let ShedMenu = new shed_menu(req.body);
    ShedMenu.save()
        .then(ShedMenu => {
            res.status(200).json({'ShedMenu': 'ShedMenu added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

myRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    shed_menu.findById(id, function(err, ShedMenu) {
        res.json(ShedMenu);
    });
});

myRoutes.route('/update/:id').put(function(req, res) {
    shed_menu.findById(req.params.id, function(err, ShedMenu) {
        if (!ShedMenu)
            res.status(404).send("data is not found");
        else
        ShedMenu.Date = req.body.Date;
        ShedMenu.Train_Name = req.body.Train_Name;
        ShedMenu.From = req.body.From;
        ShedMenu.Depature_Time = req.body.Depature_Time;
        ShedMenu.To = req.body.To;
        ShedMenu.Arrive_Time = req.body.Arrive_Time;
        ShedMenu.Stations = req.body.Stations;
        

        ShedMenu.save().then(ShedMenu => {
                res.json('ShedMenu updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});



myRoutes.route("/delete/:id").delete(async (req, res) => { 
    const { id } = req.params;
  
    await shed_menu.findByIdAndDelete(id) 
      .then(() => res.json({ message: "Successfully Deleted" }))
      .catch((error) => res.status(500).json({ success: false, error: error ,con}));

  })


// Dis routes

const DisRoutes = express.Router();
  app.use('/dis', DisRoutes);
  let dis_menu = require('./models/dis_model');


  DisRoutes.route('/').get(function(req, res) {
    dis_menu.find(function(err, Dis_menu) {
        if (err) {
            console.log(err);
        } else {
            res.json(Dis_menu);
        }
    });
 });

 DisRoutes.route('/add').post(function(req, res) {
    let Dis_menu = new dis_menu(req.body);
    Dis_menu.save()
        .then(Dis_menu => {
            res.status(200).json({'Dis_menu': 'Dis_menu added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

DisRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    dis_menu.findById(id, function(err, Dis_menu) {
        res.json(Dis_menu);
    });
});

DisRoutes.route('/update/:id').post(function(req, res) {
    dis_menu.findById(req.params.id, function(err, Dis_menu) {
        if (!Dis_menu)
            res.status(404).send("data is not found");
        else
        Dis_menu.Distance = req.body.Distance;
        Dis_menu.Station_Name = req.body.Station_Name;
        
        Dis_menu.save().then(Dis_menu => {
                res.json('DisMenu updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

DisRoutes.route("/delete/:id").delete(async (req, res) => { 
    const { id } = req.params;
  
    await dis_menu.findByIdAndDelete(id) 
      .then(() => res.json({ message: "Successfully Deleted" }))
      .catch((error) => res.status(500).json({ success: false, error: error ,con}));

  })