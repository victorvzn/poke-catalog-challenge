# Poké Catalog

Gracias por visitar este repositorio, abajo encontrá algunas instrucciones de como instalar, usar este proyecto y los objetivos terminados ensu totalidad.

### Requermientos

* Node.js v18.12.1

### Cómo usar esta aplicación

Hay que instalar las dependencias incluidas en el package.json, no se usan variables de entorno.

```bash
npm install
```

**Tests:** Para correr los test unitarios y de integración se debe ejecutar el siguiente script:

```bash
npm test
```

**E2E:** Para correr los test e2e se deben ejecutar los siguientes scripts, por separado:

```bash
npm run dev

npm test:e2e
```

| **Note e2e:** Si necesita ejecutar la UI de cypress puede usar el script:

```bash
npm test:e2eui
```

### Objetivos del reto logrados

Realizar un catálogo de elementos usando una API pública que cumpla con los siguientes criterios:

* [x] Tener Server Side Render (SSR) con Express.js
* [x] Las peticiones al API para la carga inicial deben hacerse desde Node
* [x] Tener una barra de busqueda que permita encontrar elementos dentro de la lista y mostrarlos al usuario.
* [x] Poder filtrar y organizar los elementos de dicha lista.
* [x] Poder agregar items a una lista de favoritos
* [x] (no necesariamente debe persistirse esta lista, pero es deseable).
* [x] Tener un switch entre dos temas. Puede ser dark mode / light mode, diferentes layouts, etc. Usa tu creatividad 😊.
* [x] Maquetar y aplicar estilos según consideres (que te haga sentir orgullo).
* [x] El sitio debe poder ser indexable por motores de búsqueda (SEO).
* [x] El sitio debe ser responsive.

Adicionalmente la aplicación web debe contar con:

* [x] Pruebas Unitarias
* [x] Pruebas de Integración
* [x] Pruebas E2E

Tecnologías a utilizar:

* [x] React
* [x] Manejador de estados (a consideración)
* [x] Pre procesador de CSS
* [x] Express.js

* [x] Hacer despliegue en Heroku o cualquier servicio similar
* [x] (recuerda incluir el link al despliegue en el README o descripción del proyecto).
* [ ] ~~Si usas variables de entorno, puedes enviarlas por correo.~~

### Puntos adicionales

* [x] Instalar linter para manejo de errores y formato de código
* [x] Instalación del testing environment
* [x] Instalación de SAAS
