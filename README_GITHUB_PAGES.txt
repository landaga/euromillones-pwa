EUROMILLONES PWA - PREPARADA PARA GITHUB PAGES
================================================

Esta versión está preparada para funcionar desde una ruta como:

https://TUUSUARIO.github.io/euromillones-pwa/

PUBLICAR
--------
1. Crea en GitHub un repositorio llamado, por ejemplo, euromillones-pwa.
2. Sube TODOS los archivos de esta carpeta a la raíz del repositorio.
3. En GitHub ve a Settings > Pages.
4. En Build and deployment:
   Source: Deploy from a branch
   Branch: main
   Folder: / (root)
5. Pulsa Save.

Después de unos minutos GitHub mostrará la URL publicada.

ANDROID
-------
Abre la URL con Chrome o Edge.
Menú > Instalar aplicación / Añadir a pantalla de inicio.

IPHONE / IPAD
-------------
Abre la URL con Safari.
Compartir > Añadir a pantalla de inicio.

CAMBIOS REALIZADOS
------------------
- start_url, id y scope relativos en el manifest.
- service worker compatible con subcarpetas de GitHub Pages.
- registro del service worker con scope relativo.
- icono Apple Touch.
- .nojekyll añadido.

La app sigue pudiendo actualizar el histórico online y guardar el último
histórico y las apuestas en el propio dispositivo.
