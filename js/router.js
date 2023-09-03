export class Router {

routes = {}

add(routeName, page) {
    this.routes[routeName] = page
}

route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)
  
    this.handle()
    }

handle() {
    console.log(window.location.pathname)
    
    if (window.location.pathname == "https://flami74.github.io/CantinhoDoce/") {
        const { pathname } = "https://flami74.github.io/CantinhoDoce/pages/home.html"
        console.log(pathname)
    } else {
        const { pathname } = window.location
        console.log(pathname)
    }
    const route = this.routes[pathname] || this.routes[404]
    console.log(route)
    fetch(route)
    .then(data => data.text())
 
    .then(html => {
        document.querySelector("#site").innerHTML = html
    })
  }
}
