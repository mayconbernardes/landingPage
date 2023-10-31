
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




     //Get the button
let mybutton = document.getElementById("scrollToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}





  scrollToTop


  