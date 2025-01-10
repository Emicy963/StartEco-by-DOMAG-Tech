# Sistema de Urbanização Sustentável (S.U.S)

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

## 🛠️ Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/sus-project.git
cd sus-project
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
pip install -r requirements.txt
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

## 📁 Estrutura do Projeto

```
sus_project/
│
├── manage.py
├── requirements.txt
├── venv/
├── sus/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
│
└── home/
    ├── __init__.py
    ├── admin.py
    ├── apps.py
    ├── models.py
    ├── views.py
    ├── urls.py
    └── templates/
        └── home/
            └── index.html
```

## ⚙️ Configuração

1. No arquivo `settings.py`, certifique-se de que 'home' está incluído em INSTALLED_APPS:

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'home',
]
```

2. Configure as URLs em `sus/urls.py`:

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('home.urls')),
]
```

3. Configure as URLs do app em `home/urls.py`:

```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_view, name='home'),
]
```

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
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Faça commit das suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Faça push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvedores

- CODEPOINT
- DOMAG TECH

## 📧 Contato

Para mais informações sobre o projeto, entre em contato com [seu-email@email.com].