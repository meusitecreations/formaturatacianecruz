CONVITE DIGITAL — TACIANE BAUM CRUZ

ARQUIVOS
- index.html: convite principal.
- presente.html: página de presente com chave PIX.
- assets/foto-1.jpg: fotografia original da formanda.
- assets/flores-aquarela.png: nova borda botânica de íris enviada para a versão aprovada.
- assets/style.css: identidade visual, layout e responsividade.
- assets/script.js: animações, envio do formulário e cópia do PIX.

IDENTIDADE VISUAL
- Bordô principal: #6d0519.
- Bordô escuro: #4d0715.
- Fundo marfim: #f7f2e8.
- Papel: #fffdf8.
- Dourado champanhe: #b99a62.
- Verde sálvia: #85876a.
A antiga paleta rosa/lavanda foi removida dos estilos. A nova imagem de íris fica na faixa inferior do cartão e da página de presente, separada da área de texto.

COMO VISUALIZAR
Abra index.html no navegador. Para testar o formulário, publique o site em uma hospedagem estática com HTTPS, como GitHub Pages.

PUBLICAÇÃO NO GITHUB PAGES
1. Entre no GitHub e crie um repositório (por exemplo, convite-formatura).
2. Envie todos os arquivos e pastas deste ZIP, mantendo a estrutura.
3. No repositório, abra Settings > Pages.
4. Em Build and deployment, selecione Deploy from a branch.
5. Escolha a branch main e a pasta / (root), depois salve.
6. Aguarde a publicação e acesse o endereço informado pelo GitHub Pages.

FORMULÁRIO DE CONFIRMAÇÃO
O formulário utiliza FormSubmit, com envio AJAX para tacianecruzbm@gmail.com.
Na primeira utilização, o FormSubmit pode enviar uma mensagem de ativação para esse endereço. A ativação é feita pelo titular do e-mail, uma única vez. Faça um teste após a publicação e confira também a pasta de spam.

PERSONALIZAÇÃO
- index.html: nome, curso, instituição, data, horários, locais, prazo e conteúdo do convite.
- presente.html: texto da página de presente e chave PIX.
- assets/style.css: cores e fontes no início do arquivo (:root).
Se alterar o e-mail do formulário, altere também o endereço na URL fetch de assets/script.js.

IMAGENS
A fotografia original da formanda foi preservada. A imagem floral antiga foi substituída pela nova borda botânica de íris enviada. Os elementos florais são posicionados na parte inferior do cartão, abaixo da área de texto, sem cobrir a data ou as informações.
