document.addEventListener('click', documentAction)

function documentAction(e) {
  const targetElement = e.target
  if (targetElement.closest('.menu__icon')) {
    document.documentElement.classList.toggle('menu-open')
  }
}
