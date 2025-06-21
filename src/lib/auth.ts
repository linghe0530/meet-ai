import { db } from '@/db'
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import * as schema from '@/db/schema'
import { genericOAuth } from 'better-auth/plugins'

export const auth = betterAuth({
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },
    plugins: [
        genericOAuth({
            config: [
                {
                    providerId: 'gitee',
                    clientId: 'dcb4ca932e0b3e4e0b957a39caa0b1ee9b9ddcff8bcf92678f23b603f21a5cd6',
                    clientSecret: '8d996552a173dd286f52fab15275f4a8b4d8a707050204756d941bfd83b3162c',
                    authorizationUrl: 'https://gitee.com/oauth/authorize',
                    tokenUrl: 'https://gitee.com/oauth/token',
                    // scopes: ['users:read.email'], // and more...
                },
            ],
        }),
    ],
    emailAndPassword: {
        enabled: true,
    },

    database: drizzleAdapter(db, {
        provider: 'pg',
        schema,
    }),
})
