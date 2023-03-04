'use strict'

const navbar = document.querySelector('.navbar')
const navIcon = document.querySelector('.nav-icon')
const spanElemen = document.querySelectorAll('.spanElement')

spanElemen.forEach((item) => {
    navIcon.addEventListener('click', () => {
        item.classList.toggle('span-nav')
    })
})

navIcon.addEventListener('click', () => {
    navbar.classList.toggle('active-menu')
})