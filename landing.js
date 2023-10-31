
// document.addEventListener("DOMContentLoaded", function() { /* tu met ton code js à l'interieur*/ 


function getProjects(){
    const urlGitHub = 'https://api.github.com/users/mayconbernardes/repos'
    const loadingElement = document.getElementById('loading')

    fetch(urlGitHub,{
        method: 'GET',
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            showProjects(response)
            loadingElement.style.display = 'none'
        })
        .catch((e) => {
            console.log(`Error -> ${e}`)
        })
}

function showProjects(data){
    var listElement = document.getElementById('my-projects-list')
    for(let i = 0; i < data.length; i++)
    {
        let div = document.createElement("div")
        let a = document.createElement("a")
        a.href = data[i]['clone_url']
        a.target = '_blank'
        a.title = data[i]['description']
        let linkText = document.createTextNode(data[i]['name']);
        a.appendChild(linkText);
        div.appendChild(a)
        listElement.appendChild(div)
    }
}



document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.querySelector('form');
    const confirmationMessage = document.getElementById('confirmationMessage');

getProjects()
    emailForm.addEventListener('submit', function() {
        confirmationMessage.style.display = 'block';
        confirmationMessage.style.backgroundColor = '#4CAF50'; // Cor de fundo verde
        confirmationMessage.style.color = 'white'; // Texto branco
        confirmationMessage.style.padding = '10px'; // Espaçamento interno
        confirmationMessage.style.marginTop = '10px'; // Espaçamento superior
        confirmationMessage.style.borderRadius = '4px'; // Borda arredondada
    });
});




        
        document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopButton = document.getElementById('scrollToTop');
    
   

    scrollToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });







  