import SimpleCrypto from 'simple-crypto-js';
import cookie from 'react-cookies';

export function obterToken(): string {
  const token: string = cookie.load('@localiza-auth');

  if (!token) { return ''; }

  const simpleCrypto = new SimpleCrypto(process.env.NEXT_PUBLIC_SECRET_KEY);
  return simpleCrypto.decrypt(token).toString();
}

export function salvarToken(token: string): void {
  const simpleCrypto = new SimpleCrypto(process.env.NEXT_PUBLIC_SECRET_KEY);
  cookie.save('@localiza-auth', simpleCrypto.encrypt(token), { path: '/' });
}

export function obterRole(): string {
  const token: string = cookie.load('@localiza-role');

  if (!token) { return ''; }

  const simpleCrypto = new SimpleCrypto(process.env.NEXT_PUBLIC_SECRET_KEY);
  return simpleCrypto.decrypt(token).toString();
}

export function salvarRole(role: string): void {
  const simpleCrypto = new SimpleCrypto(process.env.NEXT_PUBLIC_SECRET_KEY);
  cookie.save('@localiza-role', simpleCrypto.encrypt(role), { path: '/' });
}

export function logout(): void {
  cookie.remove('@localiza-auth', { path: '/' });
  cookie.remove('@localiza-role', { path: '/' });
}
