window.onload = function(){
    var tarefa, local, data;

    function adicionaTarefa(event) {
        // Impede o formulário de atualizar a página
        event.preventDefault();

        // Pego os dados do formulário
        tarefa = document.getElementById('tarefa').value;
        local = document.getElementById('local').value;
        data = document.getElementById('hora').value;

        document.getElementById('tarefasCriadas').innerHTML+=`
        <div class="tarefa-nova" style="display:flex;">
            <input type="checkbox" class="tarefa-nova-input">
            <div style="margin-left: 10px;>
                <h4> `+tarefa+ `</h4>
                <p style= "font-size: 10px; font-weight: 400;"> Em `+local+ ` às `+data+`</p>
            </div>
        </div>
        `
    };


    var adicione = document.getElementById('adicionar');
    adicione.addEventListener("submit", adicionaTarefa)
}