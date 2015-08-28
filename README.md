## prismic.io Website Starter for NodeJS (uses express and jade)

### Getting started

Website Starter is a website template backed by prismic.io CMS.
#### Setting up prismic.io

##### Create your own account and repo on [prismic.io](https://prismic.io/signup).

Create the document mask of your page in prismic.io Writing-room
    
* Navigate to `Setting` / `Document masks`

* Create a new `mask-id` and and a `Mask label` for example `page`, `Page`

* Start with using this [sample document mask](https://gist.github.com/faresd/87cd721b71fbd62f84a9#file-page_document_mask).

##### Mask instance (document)

Create an instance of you document mask

* Navigate to `Your documents` / `Write something`
* Choose the mask you have created
* Start by adding your page content `Slices` on the left side `Add a Content Slice...` (`Slides`, `Alternated Highlights`, `Section Header`, `...`)
* Finally add your page url `unique-identifier-for-page-url` in Metadata tab (uid) and you Page meta title for example : `website-starter-sample-page`, `Website Starter Sample Page`
* Publish

#### prismic.io Website Starter for Javascript Node.JS

* Download the [latest release]()
* Unzip locally or on your server

Edit the `prismic-configuration.js` file to get the application connected to the right repository:

```
exports.Configuration = {

  apiEndpoint: 'https://lesbonneschoses.prismic.io/api',

  // -- Access token if the Master is not open
  // accessToken: 'xxxxxx',

  // OAuth
  // clientId: 'xxxxxx',
  // clientSecret: 'xxxxxx',
  ...
```

* Install [npm & node](https://www.npmjs.com/package/npm)

To run it on your local machine, 2 possibilities:

In command line:
* using [nodemon](https://github.com/remy/nodemon) (node wrapper)
```
npm install -g nodemon
```
```
nodemon app
```

* using node
```
npm install
```
```
node app
```
You are all set.

#### Further development

This Website Starter uses [Jade - Template Engine](http://jade-lang.com/).

To adapt the design of your web site; you can modify the corresponding slice jade mixin located in: `/views/slices/`, this appication handels `Slice labels` either by a new labeled Minxin or inline-check.


#### Deploy your NodeJS application

An easy way to deploy your NodeJS application is to use [Heroku](http://www.heroku.com). Just follow these few simple steps once you have successfully [signed up](https://id.heroku.com/signup/www-header) and [installed the Heroku toolbelt](https://toolbelt.heroku.com/):

Create a `Procfile` file at your application root, to declare the server command:

```
web: node app.js
```

Create a new Heroku application

```
$ heroku create
```

Push your code to heroku:

```
$ git push heroku master
```

Ensure you have at least one node running:

```
$ heroku ps:scale web=1
```

You can now browse your application online:

```
$ heroku open
```

#### Get started with prismic.io

You can find out [how to get started with prismic.io](https://developers.prismic.io/documentation/UjBaQsuvzdIHvE4D/getting-started) on our [prismic.io developer's portal](https://developers.prismic.io/).

#### Modifying Masks

* Modity the mask if necessary to adapt your page with the help of [Repository administrators manual](https://developers.prismic.io/documentation/repository-administrators-manual) / `Document masks`


#### Understand the JavaScript development kit

You'll find more information about how to use the development kit included in this starter project, by reading [its README file](https://github.com/prismicio/javascript-kit/blob/master/README.md).

#### More about the Javascript-nodejs-starter
This project is built on top of [Javascript-nodejs-starter](https://github.com/prismicio/javascript-nodejs-starter)

#### License

This software is licensed under the Apache 2 license, quoted below.

Copyright 2015 prismic.io (http://www.prismic.io).

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
