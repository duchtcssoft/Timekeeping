## Commands:

### Development:

```bash
yarn install
yarn dev
Go to http://localhost:3000

with Docker:
make build-dev
make dev
Go to http://localhost:3000
```

### Production

```bash
Create .env from .env.example
make prod
```

# TODO List

- [ ] Docker hot-reload without setting CHOKIDAR_USEPOLLING='true'
- [ ] Better Tree shaking? https://www.npmjs.com/package/babel-plugin-wildcard, https://mui.com/guides/minimizing-bundle-size/
