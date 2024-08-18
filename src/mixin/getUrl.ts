export function getUrl(path: string) {
  console.log()
  return new URL(`${import.meta.env.BASE_URL}/` + path, import.meta.url).href
}
