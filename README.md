#LugaresAPI - Backend Coding Challenge

`Lugares-API` es la implementación de un servidor REST API construido en `Node.js` y `Express.js`.

## Iniciar el proyecto

## Manual

Se necesita tener instalado [Node.js](https://nodejs.org).

### Instalación de Node en Ubuntu

```sh
# Actualizar el repositorio antes de instalar todas las dependencias
sudo apt-get update
sudo apt-get upgrade

# Instalar Node (+npm)
sudo apt-get install nodejs
sudo apt-get install npm

# Instalar dependencies npm en el directorio del proyecto
npm install
```
### Iniciar servidor

##### Servicio para producción 
```sh
npm run start
```

##### Servicio para desarrollo 
```sh
npm run dev
```

### Docker

Se necesita tener instalado [Docker](https://www.docker.com/community-edition).

##### Creamos la imagen en nuestro aplicativo

```sh
docker build -t lugares-api .
```

##### Ejecutamos la imagen en modo detach

```sh
docker run -d lugares-api
```
En http://localhost:3000 se debería ver la aplicación funcionando.

## Tests

```sh
npm run test
```

### Modules used

Some of non-standard modules used:

* [express](https://www.npmjs.com/package/express)
* [boom](https://www.npmjs.com/package/boom)
* [joi](https://www.npmjs.com/package/joi)
* [assert](https://www.npmjs.com/package/assert)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [geoip-lite](https://www.npmjs.com/package/geoip-lite)
* [moment](https://www.npmjs.com/package/moment)
* [node-fetch](https://www.npmjs.com/package/node-fetch)

###Test modules:

* [mocha](https://www.npmjs.com/package/mocha)
* [superagent](https://www.npmjs.com/package/superagent)


Endpoints
====

| Endpoint | Lectura  | Descripción|
|----------|:--------:|------------|
| /api/lugares | ![yes](http://airesgoncalves.com.br/screenshot/acf-to-rest-api/readme/yes.png) |
| /api/lugares/**{consulta}**/**{lugar}** | ![yes](http://airesgoncalves.com.br/screenshot/acf-to-rest-api/readme/yes.png) | string **$consulta**<br>string **$lugar**|
| /api/locacion | ![yes](http://airesgoncalves.com.br/screenshot/acf-to-rest-api/readme/yes.png) |
| /api/reporte| ![yes](http://airesgoncalves.com.br/screenshot/acf-to-rest-api/readme/yes.png) |

### Author

Renato Velasquez