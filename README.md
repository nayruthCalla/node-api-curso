# curso-Node - API con Node.js con Graphql
---
- **[API-REST](http://165.22.166.131:8080/)**
---


##  Tecnologías Utilizadas
* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [docker](https://docs.docker.com/)
* [docker compose](https://docs.docker.com/compose/)
* [Postman](https://www.getpostman.com)
* [Variable de entorno - Wikipedia](https://es.wikipedia.org/wiki/Variable_de_entorno)
* [`process.env` - Node.js docs](https://nodejs.org/api/process.html#process_process_env)
* [ssh](https://www.hostinger.es/tutoriales/que-es-ssh)
* [Apollo-Server](https://www.apollographql.com)


##  Criterios del proyecto

###  API

La API debe exponer los siguientes endpoints:

####   `/`

* `GET /`

####   `/auth`

* `POST /auth`

####   `/users`

* `GET /users`
* `GET /users/:uid`
* `POST /users`
* `PUT /users/:uid`
* `DELETE /users/:uid`

####   `/products`

* `GET /products`
* `GET /products/:productid`
* `POST /products`
* `PUT /products/:productid`
* `DELETE /products/:productid`



#### Argumentos de línea de comando

Podemos especificar el puerto en el que debe arrancar la aplicación pasando un
argumento a la hora de invocar nuestro programa:

```sh
# Arranca la aplicación el puerto 8888 usando npm
npm start 8888
```


## tips y lecturas complementarias

* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [MySQL](https://www.mysql.com/)
* [docker](https://docs.docker.com/)
* [docker compose](https://docs.docker.com/compose/)
* [Postman](https://www.getpostman.com)
* [Variable de entorno - Wikipedia](https://es.wikipedia.org/wiki/Variable_de_entorno)
* [`process.env` - Node.js docs](https://nodejs.org/api/process.html#process_process_env)
* TODO: providers de VPS recomendados, idealmente con un free tier o muy baratos.
* [ssh](https://www.hostinger.es/tutoriales/que-es-ssh)

***
