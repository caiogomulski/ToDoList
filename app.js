let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

const inputTarefa = document.getElementById('taskInput');
const listaTarefas = document.getElementById('listaTarefas');
const checkboxOcultarConcluidas = document.getElementById('ocultarConcluidas');


function renderizarTarefas() {
  listaTarefas.innerHTML = '';
  tarefas.forEach((tarefa, index) => {
    if (!tarefa.concluida || !checkboxOcultarConcluidas.checked) {
      const li = document.createElement('li');
      li.textContent = tarefa.nome;
      if (tarefa.concluida) {
        li.classList.add('concluida');
      }
      li.addEventListener('click', () => alternarTarefa(index));
      listaTarefas.appendChild(li);
    }
  });
}


function adicionarTarefa() {
  const nomeTarefa = inputTarefa.value.trim();
  if (nomeTarefa !== '') {
    tarefas.push({ nome: nomeTarefa, concluida: false });
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    renderizarTarefas();
    inputTarefa.value = '';
  }
}


function alternarTarefa(index) {
  tarefas[index].concluida = !tarefas[index].concluida;
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
  renderizarTarefas();
}


function alternarOcultarConcluidas() {
  renderizarTarefas();
}



renderizarTarefas();
