# Personal Homepage

My personal homepage with a weather widget and a contact form.

- **Frontend** (`client/`): React + Vite
- **Backend** (`serverless/`): Express on Node.js, deployed as an AWS Lambda function behind API Gateway

```
.
├── client/       # React + Vite app
└── serverless/   # Express API (Lambda handler in index.js)
```

## Impressions

![Demo](./_screenshots/demo.gif)

## Features

- Current temperature and weather icon for Munich (via [Visual Crossing](https://www.visualcrossing.com/), proxied through the backend so the API key stays secret and no visitor IP reaches a third party)
- Contact form that relays messages to my inbox via AWS SES
- Weather icons are self-hosted

## Requirements

- Node.js 24
- A [Visual Crossing](https://www.visualcrossing.com/) API key
- For a working contact form: an AWS account with SES, Lambda and API Gateway set up

## Running locally

### 1. Backend

```bash
cd serverless
npm install
```

Create `serverless/.env`:

```env
ENV=local
PORT=8000
CLIENT_ORIGIN=http://localhost:5173
WEATHER_API_KEY=your-visual-crossing-key

# Only needed to test the contact form against real SES
AWS_REGION=eu-north-1
MAIL_FROM=you@example.com
MAIL_TO=you@example.com
```

Start the server:

```bash
npm run dev
```

The API is now available at `http://localhost:8000`:

```bash
curl http://localhost:8000/weather/munich
```

### 2. Frontend

```bash
cd client
npm install
```

Create `client/.env`:

```env
VITE_API_URL=http://localhost:8000
```

Start the dev server:

```bash
npm run dev
```

Open http://localhost:5173.

## Testing

Run the tests in each folder:

```bash
cd client && npm test
cd serverless && npm test
```

- **Frontend:** Vitest + React Testing Library
- **Backend:** Vitest + Supertest. SES and the weather API are mocked.

## Deployment (AWS)

The Backend can be run for free as a single Lambda function behind an API Gateway

### Build the package

```bash
cd serverless
npm ci --omit=dev
zip -r ../lambda.zip index.js package.json routes controllers middleware node_modules
```

### Lambda settings

- Environment variables (set in the Lambda console, **not** `ENV`, `PORT` or `AWS_REGION`):

```
CLIENT_ORIGIN, MAIL_FROM, MAIL_TO, WEATHER_API_KEY
```

- Create Permission Policy for ses:SendEmail for lambda execution role

### API Gateway

Create an HTTP API with the Lambda as integration, the route `ANY /{proxy+}` and stage name `$default`.

### SES

Verify E Mail

### Frontend

Set the API URL in `client/.env` (no trailing slash):
