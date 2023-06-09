### `1)` El proyecto está hecho en laravel 9 y reactjs. Requiere php 8.1 o superior. La versión de node usada fue la 18.15.0 

### `2)` Al descargar o clonar el proyecto se obtiene una carpeta principal que contiene 2 proyectos: el proyecto api en laravel 9 y el proyecto frontend en react.

### `3)` Para que el proyecto api funcione hay que instalar las librerías y dependencias del mismo. Usar el comando composer install para dicho propósito.

### `4)` Adicionalmente se debe crear de modo manual una base de datos en mysql llamada weather. Las tablas se crean automáticamente al ejecutar las migraciones con el comando php artisan migrate y el poblado de datos iniciales que solo corresponde para la tabla cities, con el comando php artisan db:seed  

### `5)` Del mismo modo que en el punto (3), hay que hacer lo mismo para el proyecto frontend. Usar el comando npm install para instalar todas las dependencias de dicho proyecto.

### `6)` En el proyecto frontend es importante tener en cuenta la configuración presente en el archivo .env ya que en cada entorno estos datos normalmente son diferentes. En términos generales los que más importan son los siguientes:

		APP_NAME=Laravel
		APP_ENV=local
		APP_URL=http://localhost

		DB_CONNECTION=mysql
		DB_HOST=127.0.0.1
		DB_PORT=3306
		DB_DATABASE=weather
		DB_USERNAME=root
		DB_PASSWORD=

No obstante este proyecto debe ejecutarse corriendo el comando php artisan serve y no por medio del acceso a una ruta que apunta a localhost el puerto del servidor apache y el nombre proyecto.

### `7)` Una vez el proyecto frontend tenga instaladas todas sus dependencias, para ejecutarlo, correr el comando npm start. El proyecto api debe estar en ejecución.

### `NOTA:` importante tener los puertos 8000 y 3000 libres para correr ambos proyectos, o en su lugar, asignar otros puertos por medio de los archivos de configuración respectivos.

### DOCKER:
Ejecutar docker compose up ubicando en ./weather