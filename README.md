![ESLint](https://github.com/trackit/aws-amplify-video-community-site/actions/workflows/lint.yml/badge.svg)

# aws-amplify-video-community-site
## Requierements
amplify-cli
```
npm install -g @aws-amplify/cli
```

amplify-video plugin
```
npm i -g amplify-category-video
```

### Pulling existing back-end
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

### Deploy with a new user
```
amplify configure
```

If you provides a new backend into AWS Cloud, please create a new user account and add it to the admin Cognito user group on the console.

## Start project
### Install dependencies
```
yarn
```

### Run React App
```
yarn start
```