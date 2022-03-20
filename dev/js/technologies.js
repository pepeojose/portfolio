const technologies = ['Front-End Developer', 'Html', 'Css', 'JavaScript', 'React', 'Gulp', 'Pug', 'Sass', 'Git', 'npm', 'Yarn', 'WordPress']

const languages = document.getElementById('languages')
const fragment = document.createDocumentFragment()
        

technologies.map(technology => {

    const li = document.createElement('li')
    const languageText = document.createTextNode(technology)
    technology === 'Front-End Developer'? li.className = ('languages__h2') : li.className = ('languages__h3')
        
    li.appendChild(languageText)
    fragment.appendChild(li)
        
})

languages.appendChild(fragment) 