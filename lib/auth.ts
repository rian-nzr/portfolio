// utils/auth.ts
import { PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcrypt';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const secretKey = 'your';

export const localStrategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        return done(null, false, { message: 'Invalid email or password.' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return done(null, false, { message: 'Invalid email or password.' });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
);

export const jwtStrategy = new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secretKey,
  },
  async (payload: any, done) => {
    try {
      const user = await prisma.user.findUnique({ where: { id: payload.sub } });
      if (!user) {
        return done(null, false);
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
);

export const generateToken = (user: User) => {
  const payload = { sub: user.id, role: user.role };
  return jwt.sign(payload, secretKey, { expiresIn: '1d' });
};
