// you have been given an express server having a few endpoints
// your task is to create a global middleware (app.use) which will
// rate limit the request from a user to only 5 request per second
// if a user sends more than 5 request per second 
// then server should block them with a 404
// user will be sending in their user id in the header as "user-id"
// you have been given a numberOfRequestForUser object to start off with which 
// clears every one second
 
