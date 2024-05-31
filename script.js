if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.toggle('dark')
  document.body.classList.toggle('light')
}

document.querySelector('.ph-moon').addEventListener('click', () => {
  document.body.classList.toggle('dark')
  document.body.classList.toggle('light')
})

