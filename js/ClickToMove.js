const spans = document.querySelectorAll("span")
const contents = docment.querySelectorAll(".content")
const firstTop = contents[0].offsetTop
const secondTop = contents[1].offsetTop
const thirdTop = contents[2].offsetTop

span[0].OneClick = funtion(){
    window.scroll({ Top: firstTop, behavior: 'smooth' })
}

span[1].OneClick = funtion(){
    window.scroll({ Top: secondTop, behavior: 'smooth' })
}

span[2].OneClick = funtion(){
    window.scroll({ Top: thirdTop, behavior: 'smooth' })
}