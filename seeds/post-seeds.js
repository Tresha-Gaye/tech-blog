const { Post } = require('../models');

const postData = [
  {
    title: "Understanding Insomnia REST Client Made Easy 101", 
    post_url: "https://hevodata.com/learn/insomnia-rest-client/", 
    post_about: "This guide will cover the benefits of API testing and introduce you to the Insomnia REST client.",
    user_id: "1"
  },
  {
    title: "Session Management in Node.js using ExpressJS and Express Session", 
    post_url: "https://www.section.io/engineering-education/session-management-in-nodejs-using-expressjs-and-express-session/", 
    post_about: "A session contains unique data about that client to allow the server to keep track user’s state and store user’s state in server's memory or a database.",
    user_id: "2"
  },
  {
    title: "A Beginner’s Guide to Handlebars", 
    post_url: "https://www.sitepoint.com/a-beginners-guide-to-handlebars/", 
    post_about: "Handlebars is a logic-less templating engine that dynamically generates your HTML page.",
    user_id: "3"
  },
  {
    title: "A Future Made of JavaScript!", 
    post_url: "https://medium.com/bitsrc/a-future-made-of-javascript-5ab417f34355", 
    post_about: " JavaScript can be part of both, our technical lives as well as our personal ones",
    user_id: "4"
  },
  {
    title: "A Complete Guide for Reading Files in Node.js", 
    post_url: "https://medium.com/javascript-in-plain-english/complete-guide-for-reading-file-in-nodejs-3cf6b3d0b2f4", 
    post_about: "3 ways to read files in Node. They are known as the promise way, the callback way, and the synchronous way.",
    user_id: "5"
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
