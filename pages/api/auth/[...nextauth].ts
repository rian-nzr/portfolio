// pages/api/auth/[...nextauth].ts
import NextAuth, { NextAuthOptions } from 'next-auth';
import Providers from 'next-auth/providers';
import { localStrategy, jwtStrategy } from '../../../lib/auth';

const options: NextAuthOptions = {
  providers: [
    Providers.Credentials({
      // The name to display on the sign-in form (e.g. 'Sign in with...')
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials :any) => {
        const user = await localStrategy.authenticate('local', {
          email: credentials.email,
          password: credentials.password,
        });

        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.accessToken = jwtStrategy.generateToken(user);
      }
      return Promise.resolve(token);
    },
    async session(session, token) {
      session.accessToken = token.accessToken;
      return Promise.resolve(session);
    },
  },
};

export default NextAuth(options);