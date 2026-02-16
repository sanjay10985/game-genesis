#!/bin/bash

# Sanity Studio Deployment Script
# This script helps you deploy Sanity Studio quickly

echo "🚀 Sanity Studio Deployment Helper"
echo "===================================="
echo ""

# Check if we're in the right directory
if [ ! -d "sanity" ]; then
    echo "❌ Error: 'sanity' directory not found."
    echo "Please run this script from your project root."
    exit 1
fi

# Navigate to sanity directory
cd sanity

echo "📦 Building Sanity Studio..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors and try again."
    exit 1
fi

echo "✅ Build successful!"
echo ""

echo "🌐 Deploying to Sanity hosting..."
echo ""
echo "You'll be prompted to choose a hostname (e.g., 'game-genesis')"
echo "Your Studio will be available at: https://your-hostname.sanity.studio"
echo ""

npm run deploy

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deployment successful!"
    echo ""
    echo "📋 Next Steps:"
    echo "1. Configure CORS for your production domain:"
    echo "   npx sanity cors add https://your-vercel-domain.vercel.app --credentials"
    echo ""
    echo "2. Add environment variables to Vercel:"
    echo "   NEXT_PUBLIC_SANITY_PROJECT_ID=yzpvyl9n"
    echo "   NEXT_PUBLIC_SANITY_DATASET=production"
    echo "   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01"
    echo ""
    echo "3. (Optional) Set up webhooks for auto-revalidation"
    echo ""
    echo "📚 See SANITY_DEPLOYMENT_GUIDE.md for detailed instructions"
else
    echo "❌ Deployment failed. Please check the errors above."
    exit 1
fi
