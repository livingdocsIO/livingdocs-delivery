# Livingdocs Blog App

This is a simple blog setup which fetches documents from livingdocs-beta.io
The application uses nunjucks templates to render a collection or single articles.

## Demo
This application is used to render our own blog at [http://blog.livingdocs.io](http://blog.livingdocs.io)

## Installation
npm version ~2.0.0 is required. You will have to update unless `npm -v` returns the correct version.
```
npm install -g npm
```

```
git clone git@github.com:livingdocsIO/livingdocs-delivery.git
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

## Customize
You can easily build your own frontend application building upon this project. To do this start by forking this repository.

### Configuration
The only thing you need to change to get the same experience as the Livingdocs Blog for your own documents are 2 values in `conf/index.coffee`

`space_id`: The first value you need to change is the `space_id`. This is the id that identifies your account on `http://livingdocs-beta.io`. Unfortunately, we don't have a nice interface yet where you can get this number. For the moment we advice you to open one of your documents on `http://livingdocs-beta.io` publish it and then click the link "Use API access". In the JSON file that is returned search for the entry `space_id`.

`start_page_document`: This value is optional. If you want your documents to be listed automatically by publication date just set this value to `false` or `undefined`. Livingdocs gives you the possibility though to use a specific document for the start page as we did on our Blog. Check out our [tutorial video](https://vimeo.com/125958273) to learn how to do a start page with Livingdocs. Once you have a start page document you get its id in the same way as the `space_id` before. This time search for the entry `document_id` in the JSON. Paste this id in the config file and you're ready to go.


### Deployment
While you can deploy wherever you want, we provide a little description of how you can deploy your Blog to heroku (which we also do with our blog).

First, install the heroku toolbelt and login with heroku as described [here](https://toolbelt.heroku.com/)

Then, create your app with heroku by typing:
```
heroku create <your-app-name>
```

And finally push to your newly created app by typing:
```
git push heroku master
```

Pro-Tip: You can give a custom name to the heroku endpoint. Type `git config -e` and navigate to the heroku remote. Give it a name, e.g., `blog` and then deploy to heroku by typing `git push blog`. For the curious, this is our git config:
```
[remote "blog"]
        url = git@heroku.com:livingdocs-blog.git
        fetch = +refs/heads/*:refs/remotes/blog/*
```

Once you deployed your heroku app, heroku gives you a URL. In your DNS management tool you can create a new CNAME record for your domain that points to the heroku URL so that you can have your blog run under your own URL.

### Design / Content
You will realize that the branding and styles are specific to Livingdocs. For example the header reads "Livingdocs" where you will probably want to have your own logo.
Start by making this project your own! You just need a little HTML and CSS knowledge, there is no special magic here.


## Licence

Copyright (c) 2012-2014 upfront GmbH

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License (LGPL) as
published by the Free Software Foundation, either version 3 of the License, 
or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License (LGPL) for more details.

You should have received a copy of the GNU Lesser General Public License
(LGPL) along with this program.  If not, see <http://www.gnu.org/licenses/>.


