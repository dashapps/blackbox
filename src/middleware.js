export async function onRequest({ url, redirect, next }) {
  if (url.pathname === '/docs/' || url.pathname === '/docs') {
    return redirect('/docs/intro/01/', 307);
  }
  return next();
}
