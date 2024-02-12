// STEP 1
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário pelo seu identificador único ou classe
    var loginForm = document.querySelector('form.card-content');

    // Adiciona um ouvinte de eventos para capturar o evento de submissão do formulário
    loginForm.addEventListener('submit', function(event) {
        // Previne o comportamento padrão do formulário de ser submetido
        event.preventDefault();

        // Captura os valores dos campos de e-mail e senha
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        // Loga os valores no console para testar a funcionalidade
        console.log('E-mail:', email);
        console.log('Senha:', password);

        // Aqui, você pode adicionar qualquer lógica adicional que desejar após a captura dos valores,
        // como validar os dados, enviar para um servidor através de AJAX, etc.
    });
});
