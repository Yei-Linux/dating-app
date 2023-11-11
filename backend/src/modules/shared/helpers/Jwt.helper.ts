import { SignJWT, jwtVerify } from 'jose';

export interface JWTSignToken<T> {
  payload: T;
  expiration: number;
}

export interface IJWTHelper {
  secret: string;
  issuer: string;
  audience: string;
}

class JWTHelper {
  constructor(
    private secret: string,
    private issuer: string,
    private audience: string
  ) {}

  async signToken<T>({ payload, expiration }: JWTSignToken<T>) {
    const iat = Math.floor(Date.now() / 1000);
    const exp = iat + expiration * 60 * 60;

    const token = await new SignJWT({ ...(payload as any) })
      .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
      .setIssuedAt()
      .setIssuer(this.issuer)
      .setAudience(this.audience)
      .setExpirationTime(exp)
      .sign(new TextEncoder().encode(this.secret));

    return token;
  }

  async verify(token: string) {
    try {
      const { payload } = await jwtVerify(
        token,
        new TextEncoder().encode(this.secret),
        {
          issuer: this.issuer,
          audience: this.audience,
        }
      );
      return payload;
    } catch (error) {
      return null;
    }
  }
}

export const jwtHelper = ({ secret, issuer, audience }: IJWTHelper) => {
  return new JWTHelper(secret, issuer, audience);
};
