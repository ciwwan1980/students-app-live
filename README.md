## What is app.use ?
we write

to run the application 
1- npm run start, 
2- 

app:

- .get
- .post
- .delete
- .put

`app.METHOD(URL, ControllerFunction aka RouteHandler)`

When some one performs a request with METHOD to URL run ControllerFunction with Request and Response objects

A Controller ends the request response cycle (sends response)

### Still what is app.use ?

> .use defines middlewares

A middleware executes on request but does not end the response
