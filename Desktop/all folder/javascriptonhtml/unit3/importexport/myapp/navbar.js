function Navbar({title = 'Title'}){
    return `
    <div id="navbar">
    <div class="left">${title}1</div>
    <div class="right">
    <div>2</div>
    <div>3</div>
    <div>4</div>
    </div>
    `
}

export default Navbar;