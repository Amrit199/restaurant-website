// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const videocontainer = document.querySelector('.video-container')
const btns = document.querySelector('.switch-btn')

btns.addEventListener('click', () => {
    if(!btns.classList.contains('slide')) {
        btns.classList.add('slide')
        videocontainer.pause()
    }else {
        btns.classList.remove('slide')
        videocontainer.play()
    }
})

// Nav toggle

const navToggle = document.querySelector('.nav-toggle')
const navMenu = document.querySelector('.sidebar')

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-sidebar')
})

// our gallery
