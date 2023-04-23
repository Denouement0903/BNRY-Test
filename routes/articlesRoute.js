const express = require('express');

const router = express.Router();
const articlesModel = require("../model/articlesModel");



router.get('/', function (request, response) {
    response.send('Hello There, this is the home directory.');
  });


router.get('/articles', async (req, res, next) => {
  try {
    const articlesData = await articlesModel.getNews();
    res.json(articlesData);
  } catch (err) {
    console.error(err);
    next(err);
  }
})
router.get('/search', async (req, res, next) => {
  try {
    const articlesData = await articlesModel.searchNews(req.query.search);
    res.json(articlesData);
  } catch (err) {
    console.error(err);
    next(err);
  }
})



  module.exports = router;
