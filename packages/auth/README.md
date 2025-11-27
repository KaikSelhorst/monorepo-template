# @org/auth

Package responsible for authentication using Better Auth with OAuth support (Discord).

## Technologies

- **[Better Auth](https://www.better-auth.com/)** - TypeScript authentication framework
- **[Discord OAuth](https://discord.com/developers/docs/topics/oauth2)** - Discord authentication

## Environment Variables

This package uses environment variables from `@org/database` and `@org/cache` packages, plus the following:

### `DISCORD_CLIENT_ID`

Discord application ID for OAuth.

**How to get:**
1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application or select an existing one
3. In the "OAuth2" tab, copy the **Client ID**
4. **Documentation:** [Discord OAuth2 Documentation](https://discord.com/developers/docs/topics/oauth2)

**Example:**
```env
DISCORD_CLIENT_ID=123456789012345678
```

### `DISCORD_CLIENT_SECRET`

Discord application secret for OAuth.

**How to get:**
1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Select your application
3. In the "OAuth2" tab, click "Reset Secret" if necessary
4. Copy the **Client Secret**
5. **⚠️ IMPORTANT:** Never share this secret publicly
6. **Documentation:** [Discord OAuth2 Documentation](https://discord.com/developers/docs/topics/oauth2)

**Example:**
```env
DISCORD_CLIENT_SECRET=abc123def456ghi789jkl012mno345pqr678
```

### `ORIGIN_ALLOWED`

List of allowed origins for CORS, separated by commas.

**Format:**
```
url1,url2,url3
```

**Example:**
```env
# Local development
ORIGIN_ALLOWED=http://localhost:3000

# Production (multiple origins)
ORIGIN_ALLOWED=https://app.example.com,https://www.example.com
```

## Dependencies on Other Packages

This package depends on the following environment variables from other packages:

- **`DATABASE_URL`** - From `@org/database` package ([see documentation](../database/README.md))
- **`SECONDARY_DATABASE_URL`** - From `@org/cache` package ([see documentation](../cache/README.md))

## Useful Links

- [Better Auth Documentation](https://www.better-auth.com/docs)
- [Discord Developer Portal](https://discord.com/developers/applications)
- [Discord OAuth2 Documentation](https://discord.com/developers/docs/topics/oauth2)
- [Better Auth - OAuth Providers](https://www.better-auth.com/docs/guides/oauth)
