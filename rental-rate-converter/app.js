const eventType = ['change', 'keyup']
const perWeek = document.querySelector('.per-week')
const perMonth = document.querySelector('.per-month')

function calculateAmountPerMonth(value) {
  return (((value / 7) * 365.25) / 12).toFixed(2)
}

function calculateAmountPerWeek(value) {
  return (((value * 12) / 365.25) * 7).toFixed(2)
}

eventType.forEach((event) =>
  perWeek.addEventListener(event, () => {
    if (perWeek.value === '') {
      perWeek.focus()
    } else {
      perMonth.value = calculateAmountPerMonth(perWeek.value)
    }
  })
)

eventType.forEach((event) =>
  perMonth.addEventListener(event, () => {
    if (perMonth.value === '') {
      perMonth.focus()
    } else {
      perWeek.value = calculateAmountPerWeek(perMonth.value)
    }
  })
)
