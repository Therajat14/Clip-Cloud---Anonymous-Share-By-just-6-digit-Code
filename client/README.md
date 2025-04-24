<p align="center">
  <a href="https://text-bridge-eight.vercel.app/" target="_blank" rel="noopener noreferrer">
    <img src="assets/cover.png" alt="ClipCloud Cover" width="600" />
  </a>
</p>

# ClipCloud

TextBridge is a lightweight, secure text-sharing application built with Vite, React, and Tailwind CSS. It enables users to generate short codes for plain text snippets or messages and retrieve them on any device without accounts or sync.

## Features

- **Instant Text Sharing**: Paste text and generate a 6-character code to share.
- **Easy Retrieval**: Enter the code to retrieve and copy shared text.
- **Minimal UI**: Dark-themed, responsive design inspired by modern dark dashboards.
- **No Accounts Required**: Private by design — text lives temporarily on the server.
- **Clipboard Integration**: Auto-copy codes and retrieved text for seamless UX.

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, React Router, React Icons
- Backend: Node.js, Express, CORS
- Deployment: Vercel (frontend), [Your Backend Host]

## Getting Started

### Prerequisites

- Node.js v16+ and npm or Yarn installed

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/Therajat14/TextBridge.git
   cd TextBridge
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create environment variables:
   - Create a `.env` file in the root:
     ```env
     VITE_API_URL=http://localhost:4000/api
     ```

### Running Locally

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Building for Production

```bash
npm run build
# or
yarn build
```

### Backend Setup

1. Navigate to your backend folder:
   ```bash
   cd server
   ```
2. Install dependencies & configure CORS:
   ```bash
   npm install
   ```
3. Start server:
   ```bash
   npm start
   ```

_Backend should listen on port 4000 by default._

## Environment Variables

### Client (`.env`)

```
VITE_API_URL=http://localhost:4000/api
```

### Server (`.env`)

```
PORT=3000
MONGODB_URI=<Your MongoDB Connection URI>
ORIGIN=http://localhost:5173
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

[MIT](LICENSE)
