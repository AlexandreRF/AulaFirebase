var nameInput = document.getElementById('nameInput')
var ageInput = document.getElementById('ageInput')

var addButton = document.getElementById('addButton')

addButton.addEventListener('click', function(e){ //add addEventListener = executando um evento//
    e.preventDefault();
    create(nameInput.value, ageInput.value)
})

function create(name, age){
    var data = {name: name, age: age}

    return firebase.database().ref().child('usuarios').push(data)
}


