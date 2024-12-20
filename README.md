# Simulon API

Simulon API is a collection of APIs for generating fake data using the `faker`
library. It provides various endpoints to generate random data for different
categories such as airline, animal, book, color, commerce, company, database,
date, finance, food, git, hacker, image, internet, location, lorem, music,
person, phone, science, string, system, vehicle, and word.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/IKatsuba/simulon.git
   cd simulon
   ```

2. Install the dependencies:
   ```sh
   deno task dev
   ```

## Usage

To run the API locally, use the following command:

```sh
deno run --allow-net --allow-env --allow-read apps/api/main.ts
```

The API will be available at `http://localhost:8000`.

## Available API Endpoints

Here is a list of available API endpoints:

- `/v1/airline`
- `/v1/animal`
- `/v1/book`
- `/v1/color`
- `/v1/commerce`
- `/v1/company`
- `/v1/database`
- `/v1/datatype`
- `/v1/date`
- `/v1/finance`
- `/v1/food`
- `/v1/git`
- `/v1/hacker`
- `/v1/image`
- `/v1/internet`
- `/v1/location`
- `/v1/lorem`
- `/v1/music`
- `/v1/number`
- `/v1/person`
- `/v1/phone`
- `/v1/science`
- `/v1/string`
- `/v1/system`
- `/v1/vehicle`
- `/v1/word`
- `/v1/json`

For detailed information about each endpoint, refer to the OpenAPI documentation
available at `http://localhost:8000/openapi` and the Swagger UI at
`http://localhost:8000/ui`.
