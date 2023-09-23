const form = document.getElementById('tabela');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputSeunome = document.getElementById('name').value;
    const inputSeunumero = document.getElementById('phone').value;

    const tabela = document.querySelector('table');

   
    const novaLinha = tabela.insertRow(-1);
    const cellNome = novaLinha.insertCell(0);
    const cellTelefone = novaLinha.insertCell(1);

  
    cellNome.classList.add('nome');
    cellTelefone.classList.add('telefone');

    
    cellNome.textContent = inputSeunome;
    cellTelefone.textContent = inputSeunumero;

    
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';

    alert(`Contato adicionado: Nome - ${inputSeunome}, Telefone - ${inputSeunumero}`);
});
