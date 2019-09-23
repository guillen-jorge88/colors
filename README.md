# Colors

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

El proyecto se basa en una grilla en donde se presentan varios colores los cuales puedenser copiado en el porta papeles al dar click en cada color. tambien podremos cambiar de paginas para obtene mas colores.

## Init

```bash
git clone https://github.com/guillen-jorge88/colors.git
```

```bash
npm install ó npm i
```

## Modulos

### - Material

En este modulo se implemento [Angular Material](https://material.angular.io/).

```bash
ng add @angular/material
```

Se importan los modulos de Material Design en un modulo para hacer mas facil su uso en otros modulos y componentes.

### - Shared

Este modulo contienen componentes como: `toolbar|page-not-found` los cuales seran compartidos en distindos modulos y componentes.

### - Pages

Es un mododulo que como su nombre lo indica se usara para configurar la pagibas internas de sitio en este caso solo tenemos la pagina `color-grid` la cual se carga por medio de `pages.routing.module.ts` en el componente `pages.component`.

contiente tres apartados `components|interfaces|services` los cuales describiremos a continuacion:

- Components: contiente el componente `color-grid` el cual contiente la estructura de grillas y paginacion propia de angular material.

- Interfaces: en este apartado encontraremos el modelo de datos para un `tile`.

- Services: este ultimo podremos oservar el servicio que obtiene la captura de la api [colors](https://reqres.in/api/colors).

### Paqutes adicionales

se implemento un paquete de npm `ngx-clipboard` el cual se encarda que realizar el seteo del portapapel, este se intala de la siguiente manera ```npm install ngx-clipboard --save```
