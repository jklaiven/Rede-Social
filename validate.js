function validateForm() {
    var email = document.getElementById('email').value;
    var apelido = document.getElementById('apelido').value;
    var mensagem = document.getElementById('mensagem').value;
    
    // Validar os campos necessários
    if (email.trim() === '' || apelido.trim() === '' || mensagem.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }
    
    return true;
}