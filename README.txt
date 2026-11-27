CONVITE DIGITAL — TACIANE BAUM CRUZ

ARQUIVOS
- index.html: convite principal.
- presente.html: página de presente com chave PIX.
- assets/foto-1.jpg: fotografia principal da formanda na abertura.
- assets/taci-consultorio.jpeg e assets/taci-canudo.jpeg: fotos emolduradas no rodapé.
- assets/flores-aquarela-cortada.png: borda floral aprovada, com corte discreto no desktop e proporção preservada no celular.
- assets/icone-blazer.png: ícone do traje esporte fino.
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
A fotografia principal da formanda foi preservada na abertura. As duas fotos adicionais aparecem em molduras no rodapé. A borda floral aprovada é mantida sem deformação: no celular aparece inteira, e no computador recebe apenas um corte vertical discreto. Os elementos florais ficam abaixo da data e da cidade.
