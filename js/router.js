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
    const { pathname } = window.location
    console.log(pathname)
    if (pathname == "/CantinhoDoce/") {
        pathname = "CantinhoDoce/pages/home.html"
    } else {
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
