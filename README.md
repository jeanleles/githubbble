# GitHubbble - Front-end Componentizado com ReactJS

![GitHubbble](https://user-images.githubusercontent.com/7783578/178889891-03074b2b-12ab-411c-913d-e4a05991fb35.png)

## 📋 Descrição

GitHubbble é uma aplicação web moderna que consome a API do GitHub para buscar usuários e suas informações públicas. O projeto foi desenvolvido com ReactJS seguindo boas práticas de componentização e arquitetura escalável.

## ✨ Funcionalidades

- 🔍 **Busca de Usuários**: Pesquisa por username do GitHub
- 👤 **Perfil Detalhado**: Exibe informações completas do usuário
- 📦 **Repositórios**: Lista todos os repositórios públicos
- ⭐ **Repositórios Favoritados**: Mostra repositórios marcados com star
- 🎨 **Interface Moderna**: Design responsivo e intuitivo
- 🔒 **Tratamento de Erros**: Feedback amigável para usuários não encontrados
- 📱 **Responsivo**: Funciona perfeitamente em desktop e mobile

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19.1.0** - Biblioteca JavaScript para interfaces
- **Styled Components 6.1.19** - CSS-in-JS para estilização
- **React Icons 5.5.0** - Biblioteca de ícones
- **React Tabs 6.1.0** - Componente de abas
- **Axios 1.10.0** - Cliente HTTP para requisições
- **Date-fns 4.1.0** - Manipulação de datas

### Desenvolvimento
- **React Scripts 5.0.1** - Scripts de build e desenvolvimento
- **Testing Library** - Testes de componentes
- **Web Vitals 5.0.3** - Métricas de performance

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/githubbble.git
cd githubbble
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute o projeto
```bash
npm start
```

O projeto estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── header/         # Header com busca
│   ├── profile/        # Perfil do usuário
│   ├── repositories/   # Lista de repositórios
│   ├── loading/        # Componente de loading
│   └── error/          # Componente de erro
├── hooks/              # Custom hooks
├── providers/          # Context providers
├── services/           # Serviços de API
└── global/             # Estilos globais
```

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm start          # Inicia servidor de desenvolvimento

# Build
npm run build      # Gera build de produção

# Testes
npm test           # Executa testes

# Eject (não recomendado)
npm run eject      # Ejetar configurações do CRA
```

## 🌐 Deploy

### Hospedagem Compartilhada
1. Execute `npm run build`
2. Faça upload dos arquivos da pasta `build/` para `public_html/`
3. O arquivo `.htaccess` já está configurado

### Outras Plataformas
- **Netlify**: Conecte o repositório e configure build command
- **Vercel**: Deploy automático com `npm run build`
- **GitHub Pages**: Configure no settings do repositório

## 🎨 Características do Design

- **Tema Escuro**: Interface moderna com tema dark
- **Cores**: Paleta baseada em verde (#4ECCA3)
- **Tipografia**: Fonte moderna e legível
- **Animações**: Transições suaves e feedback visual
- **Layout**: Profile fixo durante rolagem

## 🔍 API do GitHub

O projeto utiliza a API pública do GitHub:
- **Endpoint**: `https://api.github.com/users/{username}`
- **Rate Limit**: 60 requisições/hora para usuários não autenticados
- **Dados**: Perfil, repositórios e favoritos

## 🧪 Testes

```bash
# Executar testes
npm test

# Executar testes em modo watch
npm test -- --watch

# Gerar relatório de cobertura
npm test -- --coverage
```

## 📦 Build de Produção

```bash
# Gerar build otimizado
npm run build

# Tamanho do bundle: ~102KB (comprimido)
# Arquivos gerados na pasta build/
```

## 🔧 Configurações

### Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto:

```env
REACT_APP_GITHUB_API_URL=https://api.github.com
```

### Personalização
- **Cores**: Edite as variáveis CSS em `src/global/styles.js`
- **Layout**: Modifique os componentes em `src/components/`
- **API**: Configure endpoints em `src/services/api.js`

## 🐛 Solução de Problemas

### Erro de CORS
- A API do GitHub não requer configuração de CORS
- Verifique se está usando HTTPS em produção

### Rate Limit Excedido
- Aguarde 1 hora ou use autenticação
- Implemente cache local se necessário

### Build Falha
- Limpe cache: `npm run build -- --reset-cache`
- Verifique versão do Node.js
- Reinstale dependências: `rm -rf node_modules && npm install`

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Jean** - [GitHub](https://github.com/jeanleles)

## 🙏 Agradecimentos

- [DIO](https://dio.me) - Bootcamp Spread Fullstack Developer
- [Matheus Benites](https://github.com/benites) - Professor do curso
- [GitHub API](https://docs.github.com/en/rest) - Documentação da API

---

⭐ Se este projeto te ajudou, deixe uma estrela no repositório!
