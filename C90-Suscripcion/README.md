# Desarrollos Portal Digital

# C89 - Botón Suscripción

# 1. Información para funcionales

### 1.1 Parámetros

| No. | Nombre del Parámetro       | Tipo de Dato       | Valor por Defecto | Requerido | Observación                       |
| --- | -------------------------- | ------------------ | ----------------- | --------- | --------------------------------- |
| 1   | URL Formulario Suscripción | Una línea de texto | N/A               | Si        | URL del formulario de suscripción |

#### 1.2 Enlace del Diseño relacionado

N/A

#### 1.3 Comportamientos

![WebPart Botón Suscripción](https://spdev.bch.net/dev/DocumentacionRPD/PublishingImages/Formularios%20SP/Like%20diagrama.png)

| No. | Comportamiento                                                    |
| --- | ----------------------------------------------------------------- |
| 1   | Al presionar el botón se abre una nueva ventana con el formulario |

#### 1.5 Listas Utilizadas en Power Automate

##### Lista Suscriptores

| No. | SharePoint  | Longitud           | Requerido |
| --- | ----------- | ------------------ | --------- |
| 1   | Nombre      | Una linea de texto | Si        |
| 2   | IDDocumento | Una linea de texto | Si        |
| 3   | Correo      | Una linea de texto | Si        |
| 4   | Avisado     | Si/No              | Si        |

#### 1.6 Notas y consideraciones.

![WebPart Botón Suscripción](https://spdev.bch.net/dev/DocumentacionRPD/PublishingImages/Formularios%20SP/PanelLikes%20y%20localStorage.png)

- La WebPart se puede utilizar para diferentes tipos de suscripciones.
- Para utilizar la WebPart se debn configurar los flujos en Power Automate correspondientes.

# Información Técnica

### 2.1 Desarrollo.

Desarrollado por: Jasser Ramos.

Última modificación: 10/10/2022

### 2.2 Interfaces

> IC89SuscripcionProps

| No. | Nombre del Parámetro | Tipo de Dato | Requerido | Observación            |
| --- | -------------------- | ------------ | --------- | ---------------------- |
| 1   | URL                  | string       | Si        | URL de Microsoft Forms |

> INotificacionProps

| No. | Nombre del Parámetro | Tipo de Dato | Requerido | Observación |
| --- | -------------------- | ------------ | --------- | ----------- |
| 1   | Mensaje              | string       | Si        |             |
| 3   | Tipo                 | string       | Si        |             |

### 2.3 Componentes

#### Notificación

Componente que se muestra cuando la webpart no está configurada correctamente.

#### Botón

Botón estándar para los elementos de la webpart.

### 2.4 Para ejecutar la solución

> `git clone <Repositorio>`
>
> `npm i`
>
> `npm i - g gulp` //en caso de no tener instalado gulp
>
> `gulp serve`

Mayor detalle en el README del repositorio.

Este paquete produce las siguientes salidas:

- lib/\* - intermediate-stage commonjs build artifacts
- dist/\* - the bundled script, along with other resources
- deploy/\* - all resources whick should be uploaded to a CDN

### 2.5 Build de la webpart

Ejecutar los siguientes comandos:

> `gulp clean`
>
> `gulp bundle --ship`
>
> `gulp package-solution --ship`

En caso de error de versión de typescipt al ejecutar `gulp bundle --ship`, ejecute `npm run fixbuild` y luego ejecute todos los comandos anteriores.

Si el error persiste, valide que puede ejecutar la webpart en modo de desarrollo utilizando el comando `gulp serve`
