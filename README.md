
## Development 
### Project Setup
The project is built and setup using Node,js make sure you install suitable version(>12).After cloning repository follow the steps\
```
npm install
```
To start the project in Development Mode
```
npm start
```


### Database Setup 
This application uses *MongoDb* for database services
i am using Mongodb Atlas(Cloud Service) You can also use Local setup 
Get mongodb cluster link and change the connection string to your string in db.js connect method

```
//Change Your Connection String Here
const connection= mongoose.connect("mongodb+srv://harish143:12345678@@cluster0.5b5nr.mongodb.net/urlShortener?retryWrites=true&w=majority",{
  useNewUrlParser: true, 
  .....
  .....
```
You might get a cors if you are working with Atlas allow your IP in Network access field
