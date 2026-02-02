import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Si on est à la racine, rediriger vers /fr
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/fr', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};