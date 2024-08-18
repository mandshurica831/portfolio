export function getUrl(path: string) {
  return new URL(path, import.meta.url).href
}
