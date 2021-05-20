---
title: Running AWS Amplify Video Community Site locally
description: Steps to run project locally
---

# Requirements

## Install amplify-cli
```
npm install -g @aws-amplify/cli
```

## Install amplify-video plugin
```
npm i -g amplify-category-video
```

# Pulling existing back-end
You must have pre-configure your AWS profiles before.
```
amplify pull
```

```
Which app are you working on?
> aws-amplify-video-community-site
```

```
? Pick a backend environment:
> prod
```

# Deploy with a new user
```
amplify configure
```

If you provide a new backend into AWS Cloud, please create a new user account and add it to the admin Cognito user group on the console.

# Start project
## Install dependencies
```
yarn
```

## Run React App
```
yarn start
```
