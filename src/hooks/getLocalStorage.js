export const getLocalStorage = () => {
  let theme
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}
