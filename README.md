# Cursos DBlandIT REST API

Implementacion de API REST para Openworkshop 2019 by DBlandIT

## Setup
### Autenticacion
Para configurar la autenticacion es necesario declarar la variable de entorno ```API_SECRET``` que contendra el secreto que se utilizara para firmar y validar los tokens JWT

> Para la live demo se uso la variable  ```API_SECRET=Sarasa```, de utilizar otra, el Demo token sera invalido

### MongoDB
Se provee un dataset de ejemplo en ```sample/cursos.json``` que puede ser importado de la siguiente manera

```mongoimport --db cursos --collection cursos --file sample/cursos.json --drop```