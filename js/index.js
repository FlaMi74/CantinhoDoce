import {Router} from "./router.js"

window.route = () => router.route()

const router = new Router()

router.add("/home" ,"CantinhoDoce/pages/home.html")
router.add("/quemsou", "CantinhoDoce/pages/whoIAm.html")
router.add("/suspiros", "CantinhoDoce/pages/candyType.html")
router.add("/lembrancinhas", "CantinhoDoce/pages/souveniers.html")
router.add("/contato", "CantinhoDoce/pages/contact.html")
router.add(404, "CantinhoDoce/pages/404.html")

  router.handle()

  window.onpopstate = () => router.handle()
 window.route = () => router.route()
