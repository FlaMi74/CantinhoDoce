import {Router} from "./router.js"

const router = new Router()

router.add("/" ,"./pages/home.html")
router.add("/quemsou", "./pages/whoIAm.html")
router.add("/suspiros", "./pages/candyType.html")
router.add("/lembrancinhas", "./pages/souveniers.html")
router.add("/contato", "./pages/contact.html")
router.add(404, "./pages/404.html")

  router.handle()

  window.onpopstate = () => router.handle()
  window.route = () => router.route()
