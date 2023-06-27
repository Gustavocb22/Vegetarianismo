function sugestoes_receitas(){

    let Nome = document.getElementById('nome').value;
    let Email = document.getElementById('email').value;
    let Mensagem = document.getElementById('mensagem').value;

    if(Nome == '' || Email == '' || Mensagem == ''){
        alert('Os Campos Nome, E-mail e Mensagem não podem receber vazio !!');
    }else{
        alert("Informações enviadas com sucesso !!");
    }
}

function cadastros_receitas(){
    let Imagem_Receita = document.getElementById('imagem_receita').value;
    let Nome_Receita = document.getElementById('nome_receita').value;
    let Resumo_Receita = document.getElementById('resumo_receita').value;

    if(Imagem_Receita == ''){
        alert('O Campo Imagem de Receitas não pode receber vazio !!');
    }else if(Nome_Receita == '' || Resumo_Receita == ''){
        alert('Os Campos Nome da Receita e Resumo da Receita não podem receberem vazio !!');
    }else{
        alert('Cadastro realizado com sucesso !!');
    }

}



