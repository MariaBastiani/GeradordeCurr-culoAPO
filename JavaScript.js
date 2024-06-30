document.addEventListener('DOMContentLoaded', function () {
    const qualificacao = document.getElementById('qualificacao');
    const AddQualificacaoButton = document.getElementById('add-qualificacao');
    const experiencia = document.getElementById('experiencia');
    const AddExperienciaButton = document.getElementById('add-experiencia');
    const topButton = document.getElementById('top-button');

    let qualificacaoIndex = 1;
    let experienciaIndex = 1;

    AddQualificacaoButton.addEventListener('click', function () {
        const newField = document.createElement('div');
        newField.classList.add('qualificacao-item');
        newField.innerHTML = `
            <div class="dados-pessoais">
                <label for="curso${qualificacaoIndex}">Curso:</label>
                <input type="text" id="curso${qualificacaoIndex}" name="qualificacoes[${qualificacaoIndex}][curso]">
            </div>
            <div class="dados-pessoais">
                <label for="instituicao${qualificacaoIndex}">Instituição:</label>
                <input type="text" id="instituicao${qualificacaoIndex}" name="qualificacoes[${qualificacaoIndex}][instituicao]">
            </div>
            <div class="dados-pessoais">
                <label for="conclusao${qualificacaoIndex}">Conclusão:</label>
                <input type="date" id="conclusao${qualificacaoIndex}" name="qualificacoes[${qualificacaoIndex}][conclusao]">
            </div>
        `;
        qualificacao.appendChild(newField);
        qualificacaoIndex++;
    });

    AddExperienciaButton.addEventListener('click', function () {
        const newField = document.createElement('div');
        newField.classList.add('experiencia-item');
        newField.innerHTML = `
            <div class="dados-pessoais">
                <label for="data-entrada${experienciaIndex}">Data Entrada:</label>
                <input type="date" id="data-entrada${experienciaIndex}" name="experiencias[${experienciaIndex}][data_entrada]">
            </div>
            <div class="dados-pessoais">
                <label for="data-saida${experienciaIndex}">Data Saída:</label>
                <input type="date" id="data-saida${experienciaIndex}" name="experiencias[${experienciaIndex}][data_saida]">
            </div>
            <div class="dados-pessoais">
                <label for="empresa${experienciaIndex}">Empresa:</label>
                <input type="text" id="empresa${experienciaIndex}" name="experiencias[${experienciaIndex}][empresa]">
            </div>
            <div class="dados-pessoais">
                <label for="cargo${experienciaIndex}">Cargo:</label>
                <input type="text" id="cargo${experienciaIndex}" name="experiencias[${experienciaIndex}][cargo]">
            </div>
        `;
        experiencia.appendChild(newField);
        experienciaIndex++;
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY > 20) {
            topButton.style.display = 'block';
        } else {
            topButton.style.display = 'none';
        }
    });

    topButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
