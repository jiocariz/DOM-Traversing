let celdas = document.querySelectorAll("td");
celdas.forEach(celda => {
    celda.addEventListener("mouseenter", e => {
        //e.target.classList.add(".selected");
        //e.target.style.backgroundColor = "red";
        let celdasFila = e.target.parentElement.children; 
        Array.from(celdasFila).forEach( celda => {
            celda.style.backgroundColor = "red";
            celda.style.height="50px";
        } );      
        
        let row = e.target.cellIndex;
        //let rowOtraForma = Array.from(celdasFila).indexOf(e.target);
        //console.log("row="+row+", rowOtraForma="+rowOtraForma);
        let filas = e.target.parentElement.parentElement.children;
        for(let i=1; i<filas.length; i++){
            filas[i].children[row].style.backgroundColor = "red";
        }
    });
    celda.addEventListener("mouseleave", e => {
        //e.target.classList.remove(".selected");
        e.target.style.backgroundColor = "white";
        let celdasFila = e.target.parentElement.children;
        for(let i=0; i<celdasFila.length; i++){
            celdasFila[i].style.backgroundColor = "white";
            celdasFila[i].style.height="10px";
        }
        let row = e.target.cellIndex;
        let filas = e.target.parentElement.parentElement.children;
        for(let i=1; i<filas.length; i++){
            filas[i].children[row].style.backgroundColor = "white";
        }
    });
})