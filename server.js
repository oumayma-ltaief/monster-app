//mongodb://oumayma:monster@ds037205.mongolab.com:37205/monsters
var app = require('./express_app.js').app;
var Monster = require('./monster.js').Monster;

app.get('/', function (req,res) {
  res.render('home.jade');
});

app.get('/monsters', function (req,res) 
{
  Monster.find(function(err, monsters)
    {
      if(err)
      {
        console.log("error fetching data");
      }
      else
      {
        res.render('monsters.jade', {monsters: monsters});
      }
    });
});

app.get('/new_monster', function (req,res) {
  res.render('new_monster.jade');
});

app.get('/monster/:id', function (req,res) {
  Monster.findById(req.params.id,function(err, monster)
    { 
      if(err)
      {
        console.log("error fetching data");
      }
      else
      {
        res.render('monster.jade', {monster: monster});
      } 
    });
});

app.post('/create_monster', function (req,res) 
{
	var monster = new Monster
	({
	  name: req.body.name,
	  desc: req.body.desc,
	  level: parseInt(req.body.level,10)
	});
  monster.save(function(err, monster)
  {
     if(err)
     {
        console.log("error saving data");
     }
     else
     {
       res.render('monster_created.jade');
     }
  });
});

app.listen(8888);
