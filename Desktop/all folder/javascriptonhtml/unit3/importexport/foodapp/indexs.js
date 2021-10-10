import Navbar from "./navbero.js"

const navbar = Navbar({title:"user page"})
const container = document.getElementById("navebar_container");

container.innerHTML = navbar;