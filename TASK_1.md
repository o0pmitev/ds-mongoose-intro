# Mongoose - Exercise 1

## Write a MongoDB "seed script" (=> fill Mongo with initial data)

* Install package mongoose

* Create a schema "UserSchema" for a user document
    * It should contain two fields: name (String) and isAdmin (Boolean)
* Create a model "User" on the users collection
    * attach the schema to the model

* Connect to your MongoDB users database using mongoose.connect(...)

* After connection:
    * Insert three users using the model method User.create() or User.insertMany()
    * This kind of data initialisation using a script we call "seeding"

* Check the generated user documents in Compass

* If your "seed script" worked alright, you are done
* If your script produced faulty records
    * Go into Compass and delete your records (or even easier: drop the complete collection)
    * Or go into the mongo shell to the user database and execute db.users.deleteMany({})


### BONUS
   
* Install package faker
    * Check some examples how to generate fake data: https://github.com/marak/Faker.js/#nodejs

* Update your seed script:
    * Create 5 user records using a for loop
        * Generate random user entries using faker methods, e.g.: `faker.name.firstName()`

* Check in Compass if fake users were correctly written to MongoDB
