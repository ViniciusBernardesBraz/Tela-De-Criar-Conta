function validacao(){
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    const confiSenha = document.getElementById('confiSenha').value

    if(nome == '' || nome == null){
        let alerta1 = document.getElementById('alerta1');
        alerta1.innerHTML = 'Você Não Digitou Seu Nome!'

        setTimeout(() => {
            alerta1.innerHTML = ''
        },5000);
    }if(email == '' || email == null){
        let alerta2 = document.getElementById('alerta2');
        alerta2.innerHTML = 'Você Não Digitou Seu Email!'

        setTimeout(() => {
            alerta2.innerHTML = ''
        },5000);
    }if(senha == '' || senha == null){
        let alerta3 = document.getElementById('alerta3');
        alerta3.innerHTML = 'Você Não Digitou Sua Senha!'

        setTimeout(() => {
            alerta3.innerHTML = ''
        },5000);
    }if(confiSenha == ''){
        let alerta4 = document.getElementById('alerta4');
        alerta4.innerHTML = 'Você Não Confirmou Sua Senha!'

        setTimeout(() => {
            alerta4.innerHTML = ''
        },5000);
    }else if(senha !== confiSenha){
        alerta4.innerHTML = 'Você Não Digitou A Mesma Senha!'

        setTimeout(() => {
            alerta4.innerHTML = ''
        },5000);
    }
}


