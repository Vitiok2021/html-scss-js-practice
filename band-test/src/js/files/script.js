// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js'
// Підключення списку активних модулів
import { flsModules } from './modules.js'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({ offset: 50 })

function showMessage(element, text, color = 'green', delay = 1500, hideAfter = null) {
  element.style.display = 'block'
  element.style.color = 'grey'
  element.textContent = 'Відправка...'

  setTimeout(() => {
    element.style.color = color
    element.textContent = text
    if (hideAfter) {
      setTimeout(() => {
        element.style.display = 'none'
      }, hideAfter)
    }
  }, delay)
}

const forms = document.querySelectorAll('.form')

forms.forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const message = form.querySelector('.form__message')

    const formData = new FormData(form)
    const params = new URLSearchParams(formData).toString()

    if (message) {
      showMessage(message, 'Форма успішно відправлена!', 'green', 1500, 5000)
    }

    fetch(`/?${params}`, {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          form.reset()
        }
      })
      .catch((error) => console.error('Помилка відправки:', error))
  })
})
