export function setStorage(key: string, object: string) {
  localStorage.setItem(key, object);
}

export function getStorage(key: any) {
  return localStorage.getItem(key);
}

export function removeStorage(key: string) {
  return localStorage.removeItem(key);
}

export function clearStorage() {
  return localStorage.clear();
}
