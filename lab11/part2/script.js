
document.addEventListener('DOMContentLoaded', function(){
    fetchData();
})

let url = 'https://reqres.in/api/users?page=2'

async function fetchData(){
    let streamData = await fetch(url)
    let transformData = await streamData.json();
    let arrayData = await transformData.data
    display(arrayData)
}

function display(users){
    let div = document.createElement('div')
    div.style.textAlign = 'center'
    div.style.backgroundColor = 'grey'
    div.style.fontSize = '20px'
    div.style.fontWeight = 'Bold'

    users.forEach(element => {
        let img = document.createElement('img')
        img.style.borderRadius = '30px'
        img.src = element.avatar;
        
        let text = document.createElement('p')
        text.textContent = element.email
        
        div.appendChild(img)
        div.appendChild(text)
    });
    document.body.appendChild(div)
}

  