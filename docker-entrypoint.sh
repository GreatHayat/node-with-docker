#!/bin/bash

echo "Installing your application dependencies..."
npm install

echo "Applying database migrations..."
npx sequelize db:migrate

echo "Starting Your Application..."
npm start