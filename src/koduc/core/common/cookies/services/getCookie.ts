export function getCookie (name: string) {
  const cookies = document.cookie.split('; ');
  const targetCookie = cookies.find(cookie => cookie.startsWith(name));
  if (targetCookie) {
    return targetCookie.split('=')[1];
  }
}
