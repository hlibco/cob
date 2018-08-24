# CollegeBacker Code Challenge

API Url: [http://collegebacker.xcoproject.com/](http://collegebacker.xcoproject.com/)

The API exposes 3 endpoints:

- [POST] /contributions
- [GET] /contributions
- [DELETE] /contributions/:uuid

The Swagger documentation can be found at [http://collegebacker.xcoproject.com/swagger](http://collegebacker.xcoproject.com/swagger)

## Topology

- Database: Amazon RDS (Maria DB)
- Host/PaaS: Heroku
- DNS: Google Domains

## Requirements

1. Git >= 2.14.3
2. Yarn >= 1.94
3. MariaDB >= 10.2.12 (or MySQL >= 8.0)

## Installation

Checkout this project and follow the steps below inside the project folder.

1. Install dependencies:

```sh
$ yarn install
```

2. Create a `.env` file in the root of this project with the environment variables listed on `.env-template`:

```sh
HOSTNAME=localhost
PORT=3009

# Database
# --------
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_NAME=collegebacker
DATABASE_USERNAME=root
DATABASE_PASSWORD=root
```

3. Create a **MariaDB** (or MySQL) database with the properties you specified in the `.env` file

4. Import the file [data/db.sql](data/db.sql) into the database

5. Start (it runs Nodemon in watch mode)

```sh
$ yarn start
```

## Tests

This project has **3 integration tests** [/e2e](./e2e) written in Jest.

**End-to-end Test (e2e)**

```sh
$ yarn test:e2e
```

## CI/CD

For Continuous Integration (CI) & Continuous Deployment(CD), check [/.circleci](.circleci/config.yml) for a preview of how it can be implemented using CircleCI.

## API Docs

![docs](docs/swagger.png 'API Docs')
