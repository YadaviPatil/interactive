window.onload = () => {
  
  // ---- Text 1 ----

  let text1Div = document.getElementById('text-1')
  let text1Content = text1Div.firstElementChild
  let text1Top = text1Content.offsetTop
  let text1Left = text1Content.offsetLeft

  text1Div.addEventListener('mousemove', (e) => {
    let coordX = e.offsetX - text1Div.offsetWidth / 2
    let coordY = e.offsetY - text1Div.offsetHeight / 2
    console.log(coordX + "," + coordY)
    text1Content.style.left = text1Left - coordX + "px"
    text1Content.style.top = text1Top - coordY + "px"
  })



  // ---- Text 2 ----

  let text2Div = document.getElementById('text-2')
  let text2Content = text2Div.firstElementChild
  let distance = 0

  text2Div.addEventListener('mousemove', (e) => {
    let distanceX = Math.abs(e.offsetX - text1Div.offsetWidth / 2) - text2Content.offsetWidth / 2
    let distanceY = Math.abs(e.offsetY - text1Div.offsetHeight / 2) - text2Content.offsetHeight / 2

    if (distanceX * distanceY < 0) {
      distance = Math.max(distanceX, distanceY)
    } else if (distanceX > 0 && distanceY > 0) {
      distance = calcHypotenuse(distanceX, distanceY)
    } else if (distanceX < 0 && distanceY < 0) {
      distance = 0
    }
    // console.log(distanceX + "," + distanceY)
    // console.log(distance)
    text2Content.style.filter = `blur(${distance / 20}px)`
  })

  function calcHypotenuse(a, b) {
    return (Math.sqrt((a * a) + (b * b)));
  }



  // ---- Text 3 ----

  let text3Div = document.getElementById('text-3')
  let text3Content = text3Div.firstElementChild
  let halfWidth = text3Div.offsetWidth / 2
  let halfHeight = text3Div.offsetHeight / 2
  let deg = 0

  text3Div.addEventListener('mousemove', (e) => {
    let n = Math.abs(e.movementX) + Math.abs(e.movementY)
    if (e.offsetX < halfWidth && e.offsetY < halfHeight) {
      if (e.movementX <= 0) {deg -= n}
      else {deg += n}
    } else if (e.offsetX >= halfWidth && e.offsetY < halfHeight) {
      if (e.movementX <= 0) {deg -= n}
      else {deg += n}
    } else if (e.offsetX >= halfWidth && e.offsetY >= halfHeight) {
      if (e.movementY <= 0) {deg -= n}
      else {deg += n}
    } else {
      if (e.movementY <= 0) {deg += n}
      else {deg -= n}
    }
    // console.log(deg)
    text3Content.style.transform = `translate(-50%, -50%) rotate(${deg}deg)`
  })



  // ---- Text 4 ----

  let text4Div = document.getElementById('text-4')
  let text4Content = text4Div.firstElementChild
  text4Content.style.transition = "transform .1s"

  text4Div.addEventListener('mousedown', (e) => {
    text4Content.style.left = e.offsetX + "px"
    text4Content.style.top = e.offsetY + "px"
    text4Content.style.transform = `translate(-50%, -50%) scale(2)`
  })
  text4Div.addEventListener('mouseup', (e) => {
    text4Content.style.transform = `translate(-50%, -50%) scale(1)`
  })
}



