let express = require('express');
let routes = require('./controllers');
let sequelize = require('./config/connection');
const path = require('path');


const helpers = require('./utils/helpers');



const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });


const session = require('express-session');

let app = express();
let PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'bigbluedog',
  cookie: {
        // Session will automatically expire in 10 minutes
        expires: 10 * 60 * 1000
  },
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  }),
};

app.use(session(sess));


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));



// Static directory

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
    });