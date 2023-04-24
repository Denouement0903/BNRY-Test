const express = require('express')
require('dotenv').config();


const fetch = require("node-fetch");

const API_KEY= process.env.API_KEY;

async function getNews() {
  const url = `https://newsapi.org/v2/everything?q=tesla&from=2023-03-23&sortBy=publishedAt&apiKey=${API_KEY}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

async function searchNews(q) {
  // search by category
    const url = `https://newsapi.org/v2/everything?q=${q}&from=2023-03-23&sortBy=publishedAt&apiKey=${API_KEY}`;
  
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
module.exports = {
  getNews,
  searchNews
};