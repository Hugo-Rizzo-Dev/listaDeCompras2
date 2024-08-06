function saveProduct() {
    const nameInput = document.getElementById('productImput');
    const name = nameInput.value.trim();

    if (name) {
        // Recupera nomes já armazenados no localStorage ou inicializa como um array vazio
        let names = JSON.parse(localStorage.getItem('products')) || [];

        // Adiciona o novo nome ao array
        names.push(name);

        // Armazena o array atualizado de volta no localStorage
        localStorage.setItem('products', JSON.stringify(names));

        // Limpa o campo de entrada de texto
        nameInput.value = '';
    } else {
        alert('Please enter a valid name.');
    }
}
