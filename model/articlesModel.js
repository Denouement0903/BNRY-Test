const express = require('express')

const fetch = require("node-fetch");

async function getNews() {
  const url = "https://newsapi.org/v2/everything?q=tesla&from=2023-03-22&sortBy=publishedAt&apiKey=21486e37c8984a9a90f807e01585acac";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

async function searchNews(q) {
    const url = `https://newsapi.org/v2/everything?q=${q}&from=2023-03-22&sortBy=publishedAt&apiKey=21486e37c8984a9a90f807e01585acac`;
  
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
