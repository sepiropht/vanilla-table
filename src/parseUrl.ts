export default (url: string) => {
  const urlParams = new URLSearchParams(url)
  return urlParams.entries()
}
const removeDuplicateKey = (url) => {}
