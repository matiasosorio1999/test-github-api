const express = require('express');
const searchController = require('./controllers/search.controller.js');
const projectController = require('./controllers/project.controller.js');
const commentsController = require('./controllers/comments.controller.js');


const app = express();

app.get('/search-projects', searchController.get);

app.get('/project', projectController.get);

app.get('/project/issues', projectController.getIssues);

app.get('/project/issues', commentsController.get);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});