# Ejercicio del curso DevOps CEP Málaga - Laboratorio — Flujo Git colaborativo

## Descripción

Con este ejercicio se pretende demostrar que he reproducido el flujo de trabajo profesional que se vio en la clase online: fork, ramas, commits, Pull Requests y resolución de conflictos.

---

## Contexto

Trabajaremos sobre la misma aplicación React que se usó en clase. El repositorio del instructor tiene en estos momentos tres opciones visibles y una oculta por feature flag. El trabajo consiste en añadir dos nuevas opciones mediante el flujo de ramas y PRs, provocar un conflicto real entre ellas y resolverlo.

---

## Cómo demostrar tu trabajo — el diario del laboratorio

Parte importante de este laboratorio **no es solo hacer las cosas, sino dejar constancia de que las has hecho**.

En la raíz de tu fork, crea un fichero llamado `DIARIO.md`. A medida que vayas completando cada tarea, añade una entrada con:

- **Qué hiciste** (un párrafo breve con tus propias palabras, no copiado del enunciado)
- **Una captura de pantalla** que lo demuestre

Para insertar una captura en Markdown dentro de GitHub:

```markdown
![Descripción de la imagen](capturas/nombre-imagen.png)
```

Crea una carpeta `capturas/` en la raíz del repo para guardar las imágenes, o súbelas directamente al DIARIO.md arrastrándolas en el editor de GitHub (GitHub las aloja automáticamente).

### Capturas obligatorias

| #   | Qué debe mostrar la captura                                                       |
| --- | --------------------------------------------------------------------------------- |
| 1   | Terminal con `git remote -v` mostrando `origin` y `upstream`                      |
| 2   | GitHub con la rama `dev` visible en el desplegable de ramas                       |
| 3   | La app en el navegador con la Opción 5 recién añadida                             |
| 4   | El PR de Feature A en GitHub con la pestaña **Files changed** abierta             |
| 5   | El PR de Feature B en GitHub mostrando el banner rojo de conflicto                |
| 6   | Los marcadores de conflicto (`<<<<<<<`, `=======`, `>>>>>>>`) en VS Code          |
| 7   | La app en el navegador con todas las opciones visibles tras resolver el conflicto |
| 8   | Terminal con `git log --oneline` en `main` mostrando todos los commits            |

El `DIARIO.md` debe commitearse y pushearse a tu fork antes de la entrega.

---

## Tareas obligatorias

---

### Tarea 1 — Fork y configuración inicial

Hacemos un fork en GitHub y nos lo bajamos con git clone.
Se configuran los remotes origin y upstream en nuestro equipo para tener ambos bien diferenciados, haciendo git remote add upstream.
Se crea la rama deb git switch -c dev , y se sube al remoto origin git push -u origin dev. Esto ya lo tenía hecho de la clase online.


Un fork es una copia de un repositorio de GitHub que mantiene conexión con el original pero qué aún está en GutHub.
Upstream sirve para que, una vez clonado en mi equipo, si el repositorio original es actualizado, yo podré bajar esa actualización a mi equipo con git fetch upstream.

Captura 1.

![Terminal mostrando origin y upstream](capturas/captura1.png)



Captura 2.

![Rama dev en GitHub](capturas/captura2.png)


---

### Tarea 2 — Feature branch A: añadir la Opción 5
Creamos una nueva rama con git switch -c feature/opcion-5
Modificamos el archivo src/app.tsx para realizar las modificaciones pedidas.
Pasamos app.tsx al staged con git add.
Comiteamos con git commit -m "feat:..."
Subimos los cambios con git push -u origin/opcion-5

Se usa la rama dev y no la main porque dev es para desarrollar sin romper nada que esté en producción. Main es la rama para producción.

Captura 3.


![Opción 5 cambios en la 3 en la app](capturas/captura3.png)



---

### Tarea 3 — Feature branch B: añadir la Opción 6 (aquí está el conflicto)

1. Volvemos a dev con git switch dev.
2. Creamos la rama opcion-6 con git switch -c feature/opcion-6
3. Volvemos a modificar el archivo de la app.
4. Hacemos commit y push como en la tarea 2.


Un conflicto se produce en Git cuando intentamos mergear dos ramas que realizan acciones incompatibles.
En este caso, el conflicto se va a producir porque tanto opcion-5 como opcion-6 modifican la misma linea del mismo archivo (app.tsx) de forma diferente al cambiar la descripción de la tarjeta 3.

---

### Tarea 4 — Pull Request 1: Feature A a `dev`
Vamos a nuestro fork en github.
Hacemos un pull request con las ramas: base-dev compare-feature/opcion-5
Tras revisar el diff, se nos informa que no hay conflictos y mergeamos.
Actualizamos nuestra copia local con git switch dev y git pull origin dev.


Revisamos la pestaña Files changed para asegurarnos de dónde están las modificaciones que se van a mergear.
Captura 4.


![Pull request de opción 5](capturas/captura4.png)


---

### Tarea 5 — Pull Request 2: Feature B a `dev`, conflicto
1. Hacemos Pull request como con la Opción 5, pero GitHub nos detecta un conflicto y no puede mergear automáticamente.
2. Resolvemos el conflicto en local.
2.1. Nos ponemos en la rama del conflicto con git switch feature/opcion6.
2.2. Nos traemos dev con git fetch origin dev.
2.3. Lo fusionamos con git merge origin/dev
2.4. Nos quedamos con la versión "Flujo profesional".
2.5. Hacemos add, commit y push.
3. Vamos a GitHub.
4. Actualizamos nuestro dev local con git switch dev y git switch origin dev.

Los marcadores `<<<<<<<`, `=======` y `>>>>>>>` significan, respectivamente: cambio actual hecho, separación entre cambios y el cambio que viene a ser cambiado.
El criterio ha sido aceptar el cambio actual.
Adjunta las capturas 5, 6 y 7.
Captura 5.


![Pull request de opción 6 con banner de conflicto](capturas/captura5.png)
Captura 6.


![Marcadores de conflicto en VSCode](capturas/captura6.png)
Captura 7.


![App en el navegador con todas las opciones](capturas/captura7.png)
Captura extra.


![Pull request de opción 6 sin conflicto](capturas/captura4.png)
---

### Tarea 6 — Limpieza y cierre del diario

Borramos las ramas opcion-5 y opcion-6 de GitHub
Las borramos de nuestro equipo: git branch -d 

Captura 8.


![git log --oneline](capturas/captura8.png)

---

## Algunos comentarios.
- Me quedan las dos ramas de la clase porque nos las borré.
- Tuve algún lío con la opción 5 y la 6, pues mezclé las etiquetas; pero creo que lo resolví correctamente :-)
- Muy buena clase y muy buen laboratorio para la práctica.
- Las tareas opcionales no las hago para la entrega porque tengo mucha tarea de otras cosas. 
- Las dejo pendientes de ver en otra ocasión.
- Gracias.


