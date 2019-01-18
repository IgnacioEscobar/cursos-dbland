# Cursos DBlandIT REST API

Implementacion de API REST para Openworkshop 2019 by DBlandIT

[Demo](http://api.iescobar.cf)

## Setup
### Instalacion
```npm install```

### Autenticacion
Para configurar la autenticacion es necesario declarar la variable de entorno ```API_SECRET``` que contendra el secreto que se utilizara para firmar y validar los tokens JWT

> Para la live demo se uso la variable  ```API_SECRET=Sarasa```, de utilizar otra, el Demo token sera invalido

> Demo token: ``` eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.9kKTP8noR4tIDbdUEpkLHKnqGFxqAsWfIg-z4kSn5As ```

### MongoDB
Se provee un dataset de ejemplo en ```sample/cursos.json``` que puede ser importado de la siguiente manera

```mongoimport --db cursos --collection cursos --file sample/cursos.json --drop```

### Ejecution
```npm start```
