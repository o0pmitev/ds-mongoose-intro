const mongoose = require('mongoose')

const Schema = mongoose.Schema
const model = mongoose.model

const UserSchema = new Schema({
  name: String,
  isAdmin: Boolean
})

const User = model("User", UserSchema)


const dbName = "user"

const options = {useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(`mongodb://localhost/${dbName}`, options)
.then(()=> {
  console.log('Connected to MongoDB')
})

User.create({name: 'Plamen', isAdmin: true}).then(user => {
  console.log("User creted in DB:", user)
})

