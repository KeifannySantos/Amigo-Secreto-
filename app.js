const amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const lista = document.getElementById('listaAmigos');
    const nome = input.value.trim(); // Remove espaços em branco extras

    if (nome) {
        amigos.push(nome); // Adiciona o nome à lista de amigos
        const li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li); // Exibe o nome na lista
        input.value = ''; // Limpa o campo de entrada
    } else {
        alert('Por favor, insira um nome válido.');
    }
}

// Função para sortear os amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para realizar o sorteio.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa os resultados anteriores

    // Cria uma cópia da lista embaralhada
    const amigosEmbaralhados = [...amigos].sort(() => Math.random() - 0.5);

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        const sorteado = amigosEmbaralhados[index];
        li.textContent = `${amigo} tirou ${sorteado}`;
        resultado.appendChild(li);
    });
}

