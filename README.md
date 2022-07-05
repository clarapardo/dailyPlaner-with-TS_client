<img src="https://res.cloudinary.com/clarapardo/image/upload/v1656966557/daily_planer_woj7pg.png" alt="dailyPlaner" width="200px"/>


 <br>

This **single page application** (SPA) project has been developed for the purpose of learning TypeScript, both in client and in [server](https://github.com/clarapardo/dailyPlaner-with-TS_server). 

#### Want to take a look? [here](https://dailyplaner.netlify.app/)

<br><br>


### About *daily planer*
<p>It's a to-do-list platform.</p>
It allows you to browse through the days and view the corresponding tasks - marking them as completed, or deleting them.



<br><br><br>


## SERVER ROUTES

| METHOD | URL | DESCRIPTION |
| --- | --- | --- |
| GET | /api/all | Retrieves all the stored tasks |
| POST | /api/add | Retrieves a task from the client and sends it to the server |
| PUT | /api/update:id | Retrieves a task from the client and update it |
| DELETE | /api/delete/:id | Retrieves a task from the client and deletes it

<br>

## DB
All the tasks are being stored in an external database: [external database](https://tasksplaner.herokuapp.com/). You can test it executing Postman with the above routes.

<br>

<h4>DB task model</h4>

````
taskName: String,
deadline: Date,
description: String,
category; { type: String, enum: ["health", "social", "work","workout","other"] },
status: { type: String, enum: [ "toDo", "completed" ], default:"toDo" }