
document.addEventListener('DOMContentLoaded', function(){
    fetchData();
})
let url = 'https://reqres.in/api/users?page=2'

function fetchData(){
    fetch(url)
        .then(response => response.json()
        .then(data => {
            display(data.data)
        }))
}
function display(users){
    let div = document.createElement('div')
    div.style.textAlign = 'center'
    div.style.backgroundColor = 'grey'
    div.style.fontSize = '20px'
    div.style.fontWeight = 'Bold'
    users.forEach(element => {
        
        let img = document.createElement('img')
        img.src = element.avatar;
        img.style.borderRadius = '30px'
        
        let text = document.createElement('p')
        text.textContent = element.email
        div.appendChild(img)
        div.appendChild(text)
    });
    document.body.appendChild(div)
}

  