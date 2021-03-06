const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDBD server");
    }
    console.log("Connected to Mongo DB Server");
    const db = client.db("TodoApp");

    db.collection("Todos")
      .insertOne({
        text: "Something to do",
        completed: true
      })
      .then(
        res => console.log(JSON.stringify(res.ops, undefined, 2)),
        e => console.log("Unable to insert todo to database", e)
      );

    client.close();
  }
);
