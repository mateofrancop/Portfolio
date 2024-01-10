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



