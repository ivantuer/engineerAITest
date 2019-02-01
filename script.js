const wrapper = document.getElementById('wrapper')
const downButton = document.getElementById('down')

let height = 0
let animate = true
document.body.addEventListener('wheel', e => {
  console.log(e.deltaY)
  if (e.deltaY > 100 && height > -200 && animate) {
    height -= 100
    wrapper.style.transform = `translate(0, ${height}vh)`
    animate = false
    setTimeout(() => {
      animate = true
    }, 1000)
  } else if (e.deltaY < -100 && height < 0 && animate) {
    height += 100
    wrapper.style.transform = `translate(0, ${height}vh)`
    e.preventDefault ? e.preventDefault() : (e.returnValue = false)
    animate = false
    setTimeout(() => {
      animate = true
    }, 1000)
  }
})

downButton.addEventListener('click', () => {
  if (height === 0) {
    height -= 100
    wrapper.style.transform = `translate(0, ${height}vh)`
  }
})
