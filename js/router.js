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
    const pathVerify = window.location
    console.log(pathVerify)
    if (pathVerify == "/CantinhoDoce/") {
         const { pathname } = "CantinhoDoce/pages/home.html"
        console.log(pathname)
    } else {
        const { pathname } = pathVerify
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
