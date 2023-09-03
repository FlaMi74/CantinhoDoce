import {Router} from "./router.js"

const router = new Router()

 window.route = () => router.route()
router.add("/" ,"CantinhoDoce/pages/home.html")
router.add("/quemsou", "CantinhoDoce/pages/whoIAm.html")
router.add("/suspiros", "CantinhoDoce/pages/candyType.html")
router.add("/lembrancinhas", "CantinhoDoce/pages/souveniers.html")
router.add("/contato", "CantinhoDoce/pages/contact.html")
router.add(404, "CantinhoDoce/pages/404.html")

console.log(router)
  router.handle()

  window.onpopstate = () => router.handle()
 
