const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorTitle: getStyle(html, "--color-title"),
    colorText: getStyle(html, "--color-text"),
    botaoConteudo: getStyle(html, "--botao-conteudo"),
    segundoConteudo: getStyle(html, "--segundo-conteudo"),
    menuMobile :getStyle(html, "--menu-mobile"),
}

const darkMode = {
    bg: "#333333",
    bgPanel: "#434343",
    colorTitle: "#FFFFFF",
    colorHeadings: "#3664FF",
    colorText: "#FFFFFF",
    botaoConteudo: "#3664FF",
    segundoConteudo: "#696969",
    menuMobile: "#696969",

}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})