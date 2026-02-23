# Guia de Publicação: MBA em Gestão de Negócios em Serviços e IA (Subdomínio)

Este guia contém o passo a passo para publicar a landing page em um subdomínio, como:
**https://mba.fabrani.com.br** ou **https://lp.fabrani.com.br**

---

## Passo 1: Criar o Subdomínio (cPanel)

1.  Acesse o seu painel de controle (cPanel).
2.  Procure pela seção **Domínios** e clique em **Subdomínios** (ou "Domínios" nas versões mais novas do cPanel).
3.  No campo "Subdomínio", digite o nome desejado (ex: `mba`).
4.  No campo "Domínio", selecione `fabrani.com.br`.
5.  O campo "Raiz do Documento" (Document Root) será preenchido automaticamente (geralmente `/mba.fabrani.com.br` ou `/public_html/mba`). **Anote este caminho.**
6.  Clique em **Criar**.

---

## Passo 2: Enviar os Arquivos

1.  Acesse o **Gerenciador de Arquivos** do cPanel.
2.  Navegue até a pasta que foi criada para o subdomínio (o caminho que você anotou no passo anterior).
3.  Certifique-se de que a pasta esteja vazia (ou remova arquivos padrão criados pelo host).
4.  Clique em **Carregar (Upload)** e envie o arquivo `deploy-subdominio-mba.zip` que está em anexo.
5.  Após o upload, clique com o botão direito no arquivo zip e selecione **Extrair (Extract)**.
6.  **Importante:** Os arquivos `index.html`, `assets`, etc., devem ficar soltos na raiz da pasta do subdomínio.

---

## Passo 3: Configuração de Roteamento (Erro 404)

Como o site usa tecnologia React (Single Page Application), é necessário garantir que todas as rotas sejam direcionadas para o `index.html`.

1.  No Gerenciador de Arquivos, dentro da pasta do subdomínio, verifique se existe um arquivo chamado `.htaccess`.
2.  Se não existir, crie um novo arquivo com o nome `.htaccess` (o ponto no início é obrigatório).
3.  Edite o arquivo e cole o seguinte código:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

4.  Salve o arquivo.

---

## Passo 4: Certificado SSL (HTTPS)

Geralmente, o cPanel instala o certificado SSL automaticamente para novos subdomínios em até 24 horas. Se o site abrir com um aviso de "Não Seguro", procure a opção **SSL/TLS Status** no cPanel e clique em "Run AutoSSL" para forçar a instalação imediata.

---

## Resumo Técnico

*   **Pacote de Deploy:** `deploy-subdominio-mba.zip`
*   **Configuração:** Build otimizado para rodar na raiz (`/`) de qualquer domínio ou subdomínio.
*   **Tecnologia:** React 19 + Vite (Static).

Se precisar de suporte adicional, entre em contato com o suporte da sua hospedagem fornecendo este guia.
