# Burger Queen HTTP/JSON API

Especificación de endpoints

- ## [`auth`](./module-auth.html)
- ## [`users`](./module-users.html)
- ## [`products`](./module-products.html)
- ## [`orders`](./module-orders.html)

Nuestra clienta nos ha manifestado que su equipo de _devops_ está siempre con muchas
tareas, por por lo que nos pide como requerimiento que la aplicación esté configurada
con `docker-compose` para que pueda ser desplegada sin dificultades en cualquier
entorno.

El _boilerplate_ ya cuenta con una configuración incial de `docker-compose` para
la aplicación de node, tu tarea será extender esa configuración para incluir la
configuración de base de datos que hayas elegido.
Ten en cuenta que como vas a tener dos servidores corriendo sobre una misma
configuración, deberás exponer los servicios en diferentes puertos.

Una vez que tengas tu configuración de `docker-compose`, deberás crear un servidor
en la nube (VPS) (en el área de recursos te proponemos algunas alternativas de
proveedores), acceder a él a través de `ssh`, clonar tu repositorio y ejecutar
`docker-compose up` para levantar la aplicación y la documentación, para que
queden online y accesibles.