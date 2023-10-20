#!/bin/bash

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
  echo "pnpm is not installed. Please install it before running this script."
  exit 1
fi

# Update pnpm itself
pnpm install -g pnpm

# Change to the directory containing your package.json
cd /path/to/your/project

# Check if package.json exists
if [ ! -f "package.json" ]; then
  echo "package.json not found in the current directory. Please make sure you are in the right directory."
  exit 1
fi

# Install the latest versions of dependencies
pnpm update --recursive
