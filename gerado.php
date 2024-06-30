<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Dados do Currículo Gerado</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div class="todo">
        <h1>Dados do Currículo Gerado</h1>
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            
            $nome = htmlspecialchars($_POST['nome']);
            $data_nascimento = $_POST['data_nascimento'];
            $email = $_POST['email'];
            $telefone = $_POST['telefone'];
            $endereco = $_POST['endereco'];
            $qualificacoes = $_POST['qualificacoes'];
            $experiencias = $_POST['experiencias'];
            $sobre_mim = $_POST['sobre_mim'];
            $referencias = $_POST['referencias'];

            echo "<h2>Dados Pessoais</h2>";
            echo "<p><strong>Nome:</strong> $nome</p>";
            echo "<p><strong>Data de Nascimento:</strong> $data_nascimento</p>";
            echo "<p><strong>Email:</strong> $email</p>";
            echo "<p><strong>Telefone/Celular:</strong> $telefone</p>";
            echo "<p><strong>Endereço:</strong> $endereco</p>";

            echo "<h2>Qualificações</h2>";
            if (!empty($qualificacoes)) {
                foreach ($qualificacoes as $qualificacao) {
                    echo "<p><strong>Curso:</strong> " . htmlspecialchars($qualificacao['curso']) . "</p>";
                    echo "<p><strong>Instituição:</strong> " . htmlspecialchars($qualificacao['instituicao']) . "</p>";
                    echo "<p><strong>Conclusão:</strong> " . $qualificacao['conclusao'] . "</p>";
                    echo "<hr>";
                }
            }

            echo "<h2>Experiência Profissional</h2>";
            if (!empty($experiencias)) {
                foreach ($experiencias as $experiencia) {
                    echo "<p><strong>Data de Entrada:</strong> " . $experiencia['data_entrada'] . "</p>";
                    echo "<p><strong>Data de Saída:</strong> " . $experiencia['data_saida'] . "</p>";
                    echo "<p><strong>Empresa:</strong> " . htmlspecialchars($experiencia['empresa']) . "</p>";
                    echo "<p><strong>Cargo:</strong> " . htmlspecialchars($experiencia['cargo']) . "</p>";
                    echo "<hr>";
                }
            }

            echo "<h2>Sobre Mim</h2>";
            echo "<p>$sobre_mim</p>";

            echo "<h2>Referências</h2>";
            echo "<p>$referencias</p>";
        } else {
            echo "<p>Nenhum dado foi submetido.</p>";
        }
        ?>
        <a href="GeradorCurriculium.html">Voltar para o formulário</a>
    </div>
</body>
</html>
