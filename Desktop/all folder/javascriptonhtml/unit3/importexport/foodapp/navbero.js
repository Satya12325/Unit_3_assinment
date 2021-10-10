function Navbar(){
    return `
    <div id="navbar">
            <h2>Food Panda</h2>
            
            <div class="right">
                <p onclick="getrecipi_oftheDay()">get receipe of the day </p>
                <p onclick="latest()">show latest receipe</p>
            </div>
         </div>
    `
}

export default Navbar

