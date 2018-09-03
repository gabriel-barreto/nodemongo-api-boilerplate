# NodeMongo API Boilerplate

_Node + Express + Mongoose_

This boilerplate aux you to build a powerful API using MongoDB and NodeJS!

## Guide

-   [Requirement](#requirements)
    -   [Recomended](#recomended)
    -   [No Container](#no-container)
-   [Usage](#usage)
-   [License](#license)
-   [Q&A](#qa)

## Requirements

### Recomended

-   Docker (^18.06)

    > _Obs.: I recommended to you run this app in docker container, in repo you have a docker-compose.yml file with all nedded configurations_

### No Container

-   MongoDB (^3.6.4)
-   Node (^8.11.4)
-   NPM (^5.6.0)

## Usage

**1. Clone this repo**

> $ git clone git@github.com/gabriel-barreto/nodemongo-api-boilerplate

**2. Install all dependencies**

_Obs.: Run this command inside cloned folder_

> $ npm install

**3. Build containers**

_Obs.: This step is unecessary if you decided to run your api out of docker container_

> $ docker-compose up

**4. Run**

_This step isn`t necessary if you're using this boilerplate docker containers_

> $ npm run dev

_To run in development mode_

> $ npm start

_To run in production mode_

**5. Verify**

_If you're running out from container use port 5000 instead 5555_

> $ curl http://127.0.0.1:5555/api/run _Containered_

> $ curl http://127.0.0.1:5000/api/run _No-Container_

**Expected Response:**

```json
{ "message": "Hello World!" }
```

**6. Before Modify**

_This going to remove old commits, link with this repo and init new repo in your application folder_

> $ rm -Rf .git
>
> $ git init

## License

[MIT](https://github.com/gabriel-barreto/nodemongo-api-boilerplate/master/LICENSE.md)

## QA

[Email Me!](mailto:barreto-gabriel@outlook.com)

[Chat](https://facebook.com/gabrielgbarreto)

[Tweet](https://twitter.com/gabrielgbarreto)
