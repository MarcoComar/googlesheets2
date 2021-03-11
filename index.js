function testGS() {
    var url = "https://script.google.com/a/yourdomain.com/macros/s/AKfycbxf8eYSOxDxza_vyEMlROLybIKxxHS1gvdXm3-p0Q/exec";

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });
    
    
}

function addGS() {
    var url = "https://script.google.com/a/yourdomain.com/macros/s/AKfycbxf8eYSOxDxza_vyEMlROLybIKxxHS1gvdXm3-p0Q/exec";

    fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        body: JSON.stringify({name: "comar"})
    });
    
    
}

document.getElementById("btn2").addEventListener("click", addGS);

document.getElementById("btn").addEventListener("click", testGS);
