# Twitter Clone

Clon de la red social twitter creada usando RoR.
Puedes visitarla en https://twitterclone15-e168448a15b7.herokuapp.com/

## Descripción

Esta pagina principalmente funciona haciendo uso de un CRUD para el manejo de los tweets y el manejo de estos a traves de una base de dato en este caso postgresql, entre sus funcionalidades destacan:

- Crea nuevos Tweets que seran almacenados en la base de datos
- Edita los tweets creados con un solo click.
- Borra el tweet si no te gusto el contenido piensas que no es lo mejor
- Muestra en su index todos los tweets creados, mostrandonos siempre los ultimos tweets al comienzo
- Paginación solo 10 tweets a la vez seran cargados para mejor manejo y mejor experiencia
- Barra de busqueda, estas buscando un tweet en especial, quizas un user, ahora puedes hacerlo y en caso que todo falle aun se podria revisar por id todo esto en una simple barra de busqueda.
- Contador de palabras, como en las antiguas versiones de esta red social, pero no te preocupes tienes 500 caracteres para poder decir lo que piensas.

## Visuales

Vista principal de la pagina.

![vista principal](/public/index.png)

Deseas editar un tweet no te preocupes:

![vista editar](/public/index.png)

Mencionamos la paginación pues aqui esta:

![paginación](/public/pagination.png)

## Empezando 🚀

Estas instrucciones te guiarán para obtener una copia de este proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Prerrequisitos 📋

- Sistema Operativo windows, ubuntu o mac
- Lenguaje de programación Ruby 3.2.2
- Framework Rails 7.0.6
- Postgrestql 14.8

### Instalación 🔧

Clona el repositorio con el siguiente comando

```bash
git clone https://github.com/Delky91/twiter_clone
```

En la terminal accede a la carpeta donde esta el repositorio y ejecuta
(recuerda que para que esto funcione debes tener instalado ruby y la gema bundle)

```bash
bundle install
```

Inicia la base de datos con el siguiente comando

```bash
rails db:create db:migrate
```

Finalmente ejecuta el proyecto con el siguiente comando y ve a la ip que saldra en la consola

```bash
rails s
```

## Despliegue 📦

Instrucciones para desplegar en Heroku:

asegurate de tener instalado [heroku](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli)

1: En terminal loguear a heroku

```bash
heroku login
```

2: Crea una aplicación en heroku

```bash
heroku create
```

- Es importante copiar el nombre de la aplicacion dado por heroku ya que se ultilizara en el siguiente paso por ejemplo: rocky-everglades-49672

3: Ahora conectaremos el poryecto con nuestra aplicación en heroku

```bash
heroku git:remote -a nombre-proyecto-dado_por_heroku
```

4: Realiza un push a heroku

```bash
git push heroku main
```

Importante:

Recuerda que heroku usa git asi que en tu proyecto debes haber iniciado git, si clonaste este repo asegurate de tener la carpeta .git en cas contrario realiza los siguientes pasos:

- inicia el repositorio, agrega los cambios y realiza un primer commit

```bash
git init
git add .
git commit -m "escribe un mensaje"
```

Si realizaste todo bien ahora podras agregar el remote mejncionado en el paso 3 y seguir al paso 4

5a: Debes ir a la pagina de tu aplicación en la web de [heroku](https://id.heroku.com/login) y ve a la pestaña de la derecha la cual dira More

![More](/public/heroku.png)

5b: Una vez se despliegue el menu ve a la opción Run console

6: una vez que se despliegue la consola asegurese de crear la base de datos si esta no esta creada, migrar los cambios y si desea generar los datos que contiene el seed.rb

```bash
rails db:create
rails db:migrate
rails db:seed
```

Si seguiste los pasos hasta aqui deberias ahora ver en tu aplicación en la vista index algunos tweet creados con la gema Faker.

![vista principal](/public/index.png)

## Construido Con 🛠️

Explica qué tecnologías usaste para construir este proyecto. Aquí algunos ejemplos:

- [Ruby](https://www.ruby-lang.org/es/) - El lenguaje utilizado
- [Ruby on Rails](https://rubyonrails.org) - El framework web utilizado
- [Ruby gems](https://rubygems.org) - Gestión de dependencias
- [Postgresql](https://www.postgresql.org) - Sistema de base de datos
- [Bootstrap](https://getbootstrap.com/) - Framework de CSS
- [Pagy](https://ddnexus.github.io/pagy/) - gema para paginación.
- [Pg_search](https://github.com/Casecommons/pg_search) - gema para barra de busqueda

## Soporte

Si tienes algún problema o sugerencia, por favor abre un problema [aquí](https://github.com/Delky91/twiter_clone/issues).

## Roadmap

- Sistema de perfiles.
- Boton de me gusta, retweet y más
- Seguimiento a otros perfiles.
- Feed y Trends

## Versionado 📌

Usamos [Git](https://git-scm.com) para el versionado.

## Autores ✒️

- **Luis Miño Bustos** encuentrame en [github](https://github.com/Delky91)

## Nota 📝

esta creado solo para fines educativos, bajo ninguna circunstancia busco obtener dinero por este trabajo, si tienes alguna queja o problemas no dudes en contactarme.
