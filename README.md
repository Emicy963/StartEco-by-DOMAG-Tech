# Sistema de Urbanização Sustentável (S.U.S) - StarEco

Um sistema web desenvolvido em Django para gerenciar e monitorar projetos de urbanização sustentável em Angola. O projeto é uma iniciativa da StarEco para facilitar a migração de populações do meio rural para áreas urbanas de forma sustentável e inclusiva.

## 🚀 Funcionalidades

- Cadastro e gerenciamento de projetos urbanos sustentáveis
- Monitoramento de recursos (energia, água)
- Gestão de resíduos
- Cadastro de áreas verdes
- Geração de relatórios de sustentabilidade e impacto ambiental

## 💻 Tecnologias Utilizadas

- Python 3.8+
- Django 4.2+
- HTML5
- CSS3
- JavaScript

## 📁 Estrutura do Projeto

```
starteco/
│
├── setup/
│   ├── __pycache__/
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
│
├── starteco/
│   ├── __pycache__/
│   ├── migrations/
│   ├── statics/
│   ├── templates/
│   │   └── starteco/
│   │       ├── CSS CÓDIGO.css
│   │       ├── JS CÓDIGO.js
│   │       └── home.html
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
│
├── venv/
└── manage.py
```

## 🛠️ Instalação

1. Clone o repositório
```bash
git clone https://github.com/Emicy963/StartEco-by-DOMAG-Tech
cd starteco
```

2. Crie um ambiente virtual
```bash
python -m venv venv
```

3. Ative o ambiente virtual
```bash
# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate
```

4. Instale as dependências
```bash
pip install django
```

5. Execute as migrações
```bash
python manage.py migrate
```

6. Crie um superusuário (opcional)
```bash
python manage.py createsuperuser
```

7. Inicie o servidor
```bash
python manage.py runserver
```

## ⚙️ Configuração

1. O projeto já está configurado com a estrutura correta de arquivos e diretórios.

2. As configurações principais estão em `setup/settings.py`.

3. As rotas principais estão definidas em `setup/urls.py`.

4. As rotas da aplicação estão em `starteco/urls.py`.

5. Os templates e arquivos estáticos estão organizados em seus respectivos diretórios dentro de `starteco/`.

## 🔍 Uso

1. Acesse http://localhost:8000 após iniciar o servidor
2. Use a barra de navegação para acessar diferentes seções:
   - Projetos
   - Recursos
   - Relatórios
3. Preencha os formulários para registrar:
   - Novos projetos
   - Consumo de energia
   - Uso de água
   - Gestão de resíduos
   - Áreas verdes

## 👥 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Faça commit das suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvedores

- CODEPOINT
- DOMAG TECH