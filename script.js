document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    
    // Validações básicas
    if (!email || !senha || !confirmarSenha) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Por favor, digite um email válido!');
        return;
    }
    
    if (senha.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres!');
        return;
    }
    
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem!');
        return;
    }
    
    // Simular registro bem-sucedido
    alert('Conta criada com sucesso!\nEmail: ' + email);
    
    // Aqui você normalmente enviaria os dados para um servidor
    console.log('Dados do registro:', { email, senha });
    
    // Limpar formulário
    this.reset();
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Feedback visual para confirmação de senha
document.getElementById('confirmarSenha').addEventListener('input', function() {
    const senha = document.getElementById('senha').value;
    const confirmarSenha = this.value;
    
    if (confirmarSenha && senha !== confirmarSenha) {
        this.style.borderColor = '#e74c3c';
    } else if (confirmarSenha && senha === confirmarSenha) {
        this.style.borderColor = '#27ae60';
    } else {
        this.style.borderColor = '#e1e5e9';
    }
});