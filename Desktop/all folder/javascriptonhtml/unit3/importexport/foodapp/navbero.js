function Navbar({title = 'Title'}){
    return `
    <div id="navbar">
            <h2>Food Panda</h2>
            <p>${title}</p>
            <div class="right">
                <p>Sign up</p>
                <p>Login</p>
            </div>
         </div>
    `
}

export default Navbar