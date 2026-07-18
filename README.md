# Blend Admin Phase 2 - Application

A Node.js web application for Blend Admin Phase 2, with automated deployment to Azure Web Apps via GitHub Actions.

## Quick Start

### Prerequisites
- Node.js 20.x or later
- npm

### Local Development

```bash
# Install dependencies
npm install

# Run the application
npm start

# Run tests
npm test

# Build the application
npm run build
```

The application will start on `http://localhost:3000`

## Deployment to Azure

### Prerequisites
1. An Azure Web App (Node.js runtime)
2. Azure Publish Profile
3. GitHub Repository Secrets configured

### Setup Instructions

See [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md) for complete deployment setup guide.

### Quick Setup

1. **Get Azure Publish Profile**
   - Go to Azure Portal → Your Web App → Overview
   - Click "Get publish profile" (download XML file)

2. **Add GitHub Secret**
   - Go to Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `AZURE_WEBAPP_PUBLISH_PROFILE`
   - Value: Paste contents of the XML file
   - Click "Add secret"

3. **Update Workflow**
   - Edit `.github/workflows/azure-webapps-node.yml`
   - Change `AZURE_WEBAPP_NAME` from `your-app-name` to your actual Azure app name

4. **Deploy**
   - Commit and push to `main` branch
   - GitHub Actions will automatically build and deploy
   - Monitor progress in the Actions tab

## Project Structure

```
.
├── index.js                          # Main application entry point
├── package.json                      # Project metadata and dependencies
├── SETUP_INSTRUCTIONS.md             # Detailed setup guide
├── README.md                         # This file
└── .github/
    └── workflows/
        └── azure-webapps-node.yml    # GitHub Actions deployment workflow
```

## Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment mode (development/production)

## API Endpoints

- `GET /` - Returns application status and version

Example response:
```json
{
  "message": "Blend Admin Phase 2 Application",
  "version": "1.0.0",
  "status": "running"
}
```

## Troubleshooting

### Build Fails
- Check Node.js version: `node --version` (should be 20.x or compatible)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`

### Deployment Error: "No credentials found"
- Verify `AZURE_WEBAPP_PUBLISH_PROFILE` secret is configured
- Confirm secret contains valid Azure publish profile XML
- Regenerate publish profile in Azure Portal if needed

### Application Not Starting
- Check Azure App Service logs in Azure Portal
- Verify PORT environment variable is set
- Ensure Node.js version compatibility

## License

ISC
