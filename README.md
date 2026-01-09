# IP to Country Service

A Node.js/TypeScript service that provides IP address to country lookup functionality using multiple external IP geolocation vendors with rate limiting and caching.

## Quick Start

```bash
# 1. Start Redis with Docker
docker-compose up -d redis

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env  # or create .env manually

# 4. Start the server
npm start

# 5. Test the API
curl "http://localhost:3000/api/ip-to-country/ip/country?ip=8.8.8.8"
```

## Prerequisites

- Node.js (v16 or higher)
- Docker (for Redis)
- npm or yarn

## Installation

1. Clone the repository and navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

Create a `.env` file in the root directory with the following environment variables (see configuration section below):

```env
# Vendor API Keys
IPSTACK_KEY=<your-key-here>  # optional, for ipstack vendor
```

## Running the Server

### Production Mode

1. **Ensure Redis is running** (see Redis Setup section above)
2. Start the server:

```bash
npm start
```

The server will start on the configured port (default: 3000) and display:

```
Server running on port 3000
[Redis] connected
```

## API Usage

### Get Country by IP

```bash
curl "http://localhost:3000/api/ip-to-country/ip/country?ip=8.8.8.8"
```

**Parameters:**

- `ip` (required): Valid IPv4 or IPv6 address

**Success Response (200):**

```json
{
  "success": true,
  "message": "Country fetched successfully",
  "data": {
    "ip": "8.8.8.8",
    "country": "United States"
  }
}
```

### Running Tests

```bash
npm test
```

### Test Scripts

- `npm test` - Run all e2e tests
