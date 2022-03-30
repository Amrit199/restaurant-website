const gallery = [
    {
        id: 1,
        title: 'buff-thukpa',
        img: '/gallery/img/buff-thukpa.jpg',
    },
    {
        id: 2,
        title: 'chicken-rice',
        img: '/gallery/img/chicken-rice.jpg',
    },
    {
        id: 3,
        title: 'chicken-thukpa',
        img: '/gallery/img/chicken-thukpa.jpg',
    },
    {
        id: 4,
        title: 'c-momo',
        img: '/gallery/img/C-momo.jfif',
    },
    {
        id: 5,
        title: 'jhol-momo',
        img: '/gallery/img/jhol-momo.jpg',
    },
    {
        id: 6,
        title: 'kothey-momo',
        img: '/gallery/img/kothey-momo.jpg',
    },
    {
        id: 7,
        title: 'steam-momo',
        img: '/gallery/img/steam-momo.jpg',
    },
    {
        id: 8,
        title: 'veg-thukpa',
        img: '/gallery/img/veg-thukpa.jpg',
    },
    {
        id: 9,
        title: 'buff-chilly',
        img: '/gallery/img/Buff-Chilly.jpg',
    },
]

const galleryItem = document.querySelector('.gallery-item')
const galleryoverlay = document.querySelector('.gallery-overlay')
const closebtn = document.querySelector('.close-btn')

window.addEventListener('DOMContentLoaded', () => {
    displayGallery(gallery)
})

function displayGallery (galleryItems) {
    let displaygalleryitems = galleryItems.map((item) => {
       return `<img src=${item.img} alt=${item.title} class="photo">`
    })
    displaygalleryitems = displaygalleryitems.join('')

    galleryItem.innerHTML = displaygalleryitems

    const galleryimages = galleryItem.querySelectorAll('.photo')
    const gallerys =document.querySelector('#gallery-modal')

    galleryimages.forEach(galleryimage => galleryimage.addEventListener
        ('click', (e) => {
            gallerys.src = e.target.src
            galleryoverlay.classList.add('open-gallery')
                   
        }))
    closebtn.addEventListener('click', () => {
        galleryoverlay.classList.remove('open-gallery')
    })
}

// Nav toggle
const navToggle = document.querySelector('.nav-toggle')
const navMenu = document.querySelector('.sidebar')

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-sidebar')
})
