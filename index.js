function testGS() {
    var url = "https://script.google.com/a/yourdomain.com/macros/s/AKfycbxf8eYSOxDxza_vyEMlROLybIKxxHS1gvdXm3-p0Q/exec";

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });
    
    
}

document.getElementById("btn").addEventListener("click", testGS);