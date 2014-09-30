# Livingdocs Delivery App

This is a simple website setup which fetches documents from livingdocs.io
The application uses nunjucks templates and renders them server and client side.

## Demo
[http://livingdocs-delivery.herokuapp.com](http://livingdocs-delivery.herokuapp.com)

## Installation
```
git clone git@github.com:marcbachmann/livingdocs-delivery.git
cd livingdocs-delivery
npm install
```

## Start
The server listens on port `8080`.
It listens on the value of the environment variable `$PORT` if it's defined.  
You can push this app directly to heroku. It should work without a special setup as it doesn't use a database.
```
npm start
```
