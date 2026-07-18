# Blend Admin Phase 2 - Setup Instructions

## Prerequisites

Before deploying to Azure, complete these steps:

### 1. Azure Setup

1. **Create an Azure Web App** (if not already created):
   - Go to [Azure Portal](https://portal.azure.com)
   - Create a new App Service (Web App)
   - Choose Node.js runtime
   - Take note of your app name

2. **Get Publish Profile**:
   - In Azure Portal, go to your Web App
   - Click **Overview** → **Get publish profile** (top menu)
   - Save the downloaded XML file

### 2. GitHub Configuration

1. **Add Repository Secret**:
   - Go to your GitHub repository
   - Navigate to **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret**
   - Name: `AZURE_WEBAPP_PUBLISH_PROFILE`
   - Value: Paste the entire contents of the Azure publish profile XML file
   - Click **Add secret**

2. **Update Workflow**:
   - Edit `.github/workflows/azure-webapps-node.yml`
   - Change `AZURE_WEBAPP_NAME` to your actual Azure app name
   - Commit and push the changes

### 3. Verify Configuration

Before deploying, verify:
- [ ] `AZURE_WEBAPP_NAME` in workflow matches your Azure app name
- [ ] `AZURE_WEBAPP_PUBLISH_PROFILE` secret is configured
- [ ] Secret contains valid Azure publish profile XML
- [ ] Node.js version is 20.x or compatible

## Deployment

The workflow automatically deploys when you push to the `main` branch:

1. Build and test run locally:
   ```bash
   npm install
   npm run build
   npm run test
   ```

2. Push to main branch:
   ```bash
   git push origin main
   ```

3. Monitor deployment in **Actions** tab of your repository

## Troubleshooting

### "No credentials found" Error
- Verify `AZURE_WEBAPP_PUBLISH_PROFILE` secret is configured
- Confirm secret contains the complete XML publish profile
- Regenerate publish profile in Azure Portal if needed

### Deployment Timeout
- Check Azure Web App resource tier (ensure adequate resources)
- Review build logs in GitHub Actions

### Application Not Starting
- Verify `PORT` environment variable is set (defaults to 3000)
- Check Application Insights logs in Azure Portal
- Ensure Node.js version matches (20.x or compatible)

## Local Development

To run the application locally:

```bash
npm install
npm start
```

The application will start on `http://localhost:3000`

## Project Structure

- `index.js` - Main application entry point
- `package.json` - Dependencies and scripts
- `.github/workflows/` - GitHub Actions workflows
- `SETUP_INSTRUCTIONS.md` - This file
