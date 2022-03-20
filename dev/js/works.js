const worksContainer = document.getElementById('worksContainer')
const template = document.getElementById('works').content
const works = [
    {
        href: "./paginas/blogElViajero",
        src: "./img/blogViajero.png",
        alt: "Pantalla de inicio de Blog Viajes",
        title: "Bolg El Viajero",
        github: "https://github.com/pepeojose/blogElViajero"
    },
    {
        href: "./paginas/carrito-compra2-react",
        src: "./img/carrito.png",
        alt: "Pantalla de inicio de Carrito de Compra React",
        title: "Carrito Compra React",
        github: ""
    },
    {
        href: "./paginas/carrito-compra-js",
        src: "./img/carrito.png",
        alt: "Pantalla de inicio de Carrito de Compra",
        title: "Carrito Compra JS",
        github: ""
    },
    {
        href: "./paginas/CatWorld",
        src: "./img/catWorld.png",
        alt: "Pantalla de inicio de CatWorld",
        title: "CatWorld",
        github: ""
    },
    {
        href: "./paginas/RestauranteGinza",
        src: "./img/pagina3.png",
        alt: "Pantalla de inicio de Restaurante Ginza",
        title: "Restaurante Ginza",
        github: ""
    },
    {
        href: "./paginas/app-Lyrics",
        src: "./img/app-lyric.jpg",
        alt: "Pantalla de inicio de App Lyrics",
        title: "App Lyrics",
        github: ""
    },
    {
        href: "./paginas/Terror-Zone",
        src: "./img/pagina2.png",
        alt: "Pantalla de inicio de Terror Zone",
        title: "Terror Zone",
        github: ""
    },
    {
        href: "./paginas/HotelCan",
        src: "./img/pagina4.png",
        alt: "Pantalla de inicio de Hotel Can",
        title: "Hotel Can",
        github: ""
    },
    {
        href: "./paginas/Viajero",
        src: "./img/pagina5.png",
        alt: "Pantalla de inicio de Viajes El Turista",
        title: "Viajes El Turista",
        github: ""
    },
    {
        href: "./paginas/academia",
        src: "./img/academia.png",
        alt: "Pantalla de inicio de Academia",
        title: "Academia",
        github: ""
    },
    {
        href: "./paginas/menuPp2",
        src: "./img/pagina1.png",
        alt: "Pantalla de inicio de Página Efectos",
        title: "Página de Efectos",
        github: ""
    },
    {
        href: "./paginas/elementorWP",
        src: "./img/mundoSub.png",
        alt: "Pantalla de inicio de MundoSub",
        title: "MundoSub WordPress",
        github: ""
    },
    {
        href: "./paginas/piedra-papel",
        src: "./img/piedraPapel.png",
        alt: "Pantalla de inicio de Piedra Papel Tijera",
        title: "Piedra Papel Tijera",
        github: "https://github.com/pepeojose/piedraPapelTijera"
    },
    {
        href: "./paginas/TodoList",
        src: "./img/todoList.png",
        alt: "Pantalla de inicio de TodoList",
        title: "TodoList",
        github: "https://github.com/pepeojose/TodoList"
    },
    {
        href: "./paginas/peticion-pokedex",
        src: "./img/peticion-pokedex.png",
        alt: "Pantalla de inicio de Peticion Pokedex",
        title: "Peticion Pokedex",
        github: "https://github.com/pepeojose/peticion-pokedex"
    }
]

const paintWorks = works => {
    
    works.forEach(work => {
        const clone = template.cloneNode(true)

        clone.querySelector('.work__link').href = work.href
        clone.querySelector('.work__img').src = work.src
        clone.querySelector('.work__img').alt = work.alt
        
        work.github !== ""
            ? clone.querySelector('.page__name').innerHTML = `<a class="page__link" href="${work.github}" target="_blanck"><i class="fab fa-github contact__icon"></i></a> ${work.title}` 
            : clone.querySelector('.page__name').textContent = work.title
        
        fragment.appendChild(clone)
    })
    worksContainer.appendChild(fragment)
}
paintWorks(works)