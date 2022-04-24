# Feature Flag Test Instructions

## Prerequisites

You must have `Docker` and `docker-compose` installed.

## Set up the project & database

1. Run `npm i` to install required modules.
2. Run `npm run db`. This will spin up the Postgres Docker container.
3. Run `npm run db:migrate`. This will use Prisma to sync the database with the schema.
4. Run `npm run db:seed`. This will populate the database with the users provided in `example_users.json`.

## Run the project

To start the development server, run `npm run start:dev`.

Using the `.env` provided, this will make the service accessible on port `3000`.

## Endpoints

`GET '/'`
Returns an array of enabled features for a given email address.
If an email address is not in the database, an empty array will be returned.

**Request**
Body:

```JSON
{
	"email": "example@email.com"
}
```

**Response**
Body:

```JSON
{
	"email": "example@email.com",
	"features": [
		"feature1",
		"feature2"
	]
}
```

## Tests

Run `npm run test` to execute tests.
