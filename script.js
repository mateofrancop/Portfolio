let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("excel");
        habilidades[1].classList.add("power_bi");
        habilidades[2].classList.add("tableau");
        habilidades[3].classList.add("mysql_postgresql");
        habilidades[4].classList.add("python");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
};

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

    // Recoger los datos del formulario
    const form = event.target;
    const formData = new FormData(form);

    // Enviar el formulario usando Fetch
    fetch(form.action, {
        method: form.method,
        headers: {
            'Accept': 'application/json'
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Mostrar mensaje de confirmación al usuario
        alert('Message sent succesfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while sending the message. Please try again.');
    });
});

function openModal(projectId) {
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modal-img");
    let modalText = document.getElementById("modal-text");

    // Customize the content based on the project
    if (projectId === 'proyecto1') {
        modalImg.innerHTML = `
            <a href="https://github.com/mateofrancop/Pereira-Economy" target="_blank">
                <img src="img/Captura.PNG" alt="Pereira Economy">
            </a>`;
        modalText.innerHTML = `
            <h2>Pereira Economy</h2>
            <p class="tecnologias">Tools used:</p>
            <ul class="tecnologias">
                <li>Python</li>
                <li>MySQL</li>
                <li>Excel</li>
                <li>Tableau</li>
            </ul>
            <p class="descripcion">
                In this project, we evaluate the economic conditions of the city of Pereira, aiming to find patterns and behaviors that help determine the feasibility of investing in the city.
                <br><br>
                <a href="https://github.com/mateofrancop/Pereira-Economy" target="_blank">If you want to know more, click here</a>
            </p>
        `;
    } else if (projectId === 'proyecto2') {
        modalImg.innerHTML = `
            <a href="https://github.com/mateofrancop/R.S-Project" target="_blank">
                <img src="img/Capturaferw.PNG" alt="R.S Project">
            </a>`;
        modalText.innerHTML = `
            <h2>R.S Project</h2>
            <p class="tecnologias">Tools used:</p>
            <ul class="tecnologias">
                <li>Python</li>
                <li>Excel</li>
                <li>Power BI</li>
            </ul>
            <p class="descripcion">
                In this project, the accounting records of a small company in the center of Pereira are used to evaluate its status, aiming to find patterns and solutions that help improve the company's financial situation.
                <br><br>
                <a href="https://github.com/mateofrancop/R.S-Project" target="_blank">If you want to know more, click here</a>
            </p>
        `;
    } else if (projectId === 'proyecto3') {
        modalImg.innerHTML = `
            <a href="https://github.com/mateofrancop/Investment-Portfilio" target="_blank">
                <img src="img/Dispercion1.PNG" alt="Investment Portfolio">
            </a>`;
        modalText.innerHTML = `
            <h2>Investment Portfolio</h2>
            <p class="tecnologias">Tools used:</p>
            <ul class="tecnologias">
                <li>Python</li>
                <li>Excel</li>
                <li>Power BI</li>
            </ul>
            <p class="descripcion">
                In this project, stocks from the New York Stock Exchange are analyzed comprehensively, including charts, the Markowitz model, financial indicators, etc., with the aim of finding the best investment strategy.
                <br><br>
                <a href="https://github.com/mateofrancop/Investment-Portfilio" target="_blank">If you want to know more, click here</a>
            </p>
        `;
    } else if (projectId === 'proyecto4') {
        modalImg.innerHTML = `
            <a href="https://github.com/mateofrancop/Portfolio_Optimization" target="_blank">
                <img src="img/Rplot.PNG" alt="Portfolio Optimization">
            </a>`;
        modalText.innerHTML = `
            <h2>Portfolio Optimization</h2>
            <p class="tecnologias">Tools used:</p>
            <ul class="tecnologias">
                <li>R</li>
                <li>Excel</li>
            </ul>
            <p class="descripcion">
                In this project, the goal is to optimize the investment portfolio for a person in Colombia by selecting various companies available in the Tree app, consisting of national and international stocks and ETFs.
                <br><br>
                <a href="https://github.com/mateofrancop/Portfolio_Optimization" target="_blank">If you want to know more, click here</a>
            </p>
        `;
    } else if (projectId === 'proyecto5') {
        modalImg.innerHTML = `
            <a href="https://github.com/mateofrancop/Customer-s-Complaints" target="_blank">
                <img src="img/tegd.PNG" alt="Customer's Complaints">
            </a>`;
        modalText.innerHTML = `
            <h2>Customer's Complaints</h2>
            <p class="tecnologias">Tools used:</p>
            <ul class="tecnologias">
                <li>Power BI</li>
            </ul>
            <p class="descripcion">
                This project aims to analyze the complaints received by a company in the Risaralda department.
                <br><br>
                <a href="https://github.com/mateofrancop/Customer-s-Complaints" target="_blank">If you want to know more, click here</a>
            </p>
        `;
    } else if (projectId === 'proyecto6') {
        modalImg.innerHTML = `
            <a href="https://github.com/mateofrancop/Black-Litterman_Markowitz" target="_blank">
                <img src="img/Frontier.PNG" alt="Markowitz and Black-Litterman">
            </a>`;
        modalText.innerHTML = `
            <h2>Markowitz and Black-Litterman</h2>
            <p class="tecnologias">Tools used:</p>
            <ul class="tecnologias">
                <li>Python</li>
                <li>Excel</li>
            </ul>
            <p class="descripcion">
                This project compares two portfolio optimization models (Markowitz and Black-Litterman) to discover which one is more reliable for investing. For this, Colombian companies are selected.
                <br><br>
                <a href="https://github.com/mateofrancop/Black-Litterman_Markowitz" target="_blank">If you want to know more, click here</a>
            </p>
        `;
    }



    modal.style.display = "block";
}

function closeModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Cierra el modal cuando el usuario hace clic fuera del contenido del modal
window.onclick = function(event) {
    let modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


