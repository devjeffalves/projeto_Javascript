//OBJETO DE USUÁRIOS
const users = {
    nome: '',
    usuario: '',
    senha: '',
    logado: false,
}
// ARRAY DE OBJETOS DOS USUÁRIOS
let usersArray = []


function startApp() {
    let opcao = 999;

    while(opcao !== 0) {
        let result;
        switch(opcao) {
            case 1:
                result = login();
                if(result) {
                    menu();
                } else { 
                    alert('Usuário ou senha incorretos!')
                }
                break;
            case 2:
                result = register();
                if (!result) {
                    alert("Não foi possível fazer o cadastro!");
                } else {
                    alert("Opa, usuário cadastrado com sucesso! 👏 Agora é só acessar..." )
                }
                break;
            case 999:
                alert("Você precisa estar logado "+ 
                    "para acessar o menu principal! \n\n" +
                    "Caso ainda não tenha usuário " +
                    "cadastrado, utilize a opção 2 do menu " +
                    "e faça o seu registro!");        
                break;
            default:
                    alert('Opção nao encontrada!')
                    break;

        }
        opcao = Number(
                prompt(
               "Selecione a opão desejada:\n" +
               "1 - Entrar\n" +
               "2 - Cadastrar usuário\n" +
               "3 - Esqueci minhas credenciais\n" +
               "0 - Sair"
            )
        )
    } 
}

function login() {
    let usuario     = prompt("Seu usuário:");
    let senha = prompt("Sua senha:");


    return validateLogin(usuario, senha);
}
function validateLogin(user, pass) {
    let result = false;
    for(let i = 0; i < usersArray.length; i++){
        console.log(usersArray[i]);
        if(usersArray[i].usuario === user && 
usersArray[i].senha === pass) {
            result = true;
            usersArray[i].logado = true;
} 
    }
    return result;

}

function register() {
    let result = false;
        users.nome      = prompt("Nome: ");
        users.usuario   = prompt("Usuário: ");
        users.senha     = prompt("Senha: ");
    

    if(users.nome !== '' && users.senha !== '') {
        usersArray.push(users);
        result = true
    }
    return result
}
// inicia o sistema
startApp();