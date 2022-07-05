export const set = (title, val) => {
  localStorage.setItem(title, JSON.stringify(val))
}
export const get = (title) => {
  return JSON.parse(localStorage.getItem(title))
}
export const remove = (title) => {
  localStorage.removeItem(title)
}
