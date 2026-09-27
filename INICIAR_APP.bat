@echo off
cd /d "%~dp0"
echo.
echo EUROMILLONES PWA
echo ==========================
echo Abre en el navegador: http://localhost:8080
echo Para cerrar la aplicacion, cierra esta ventana.
echo.
start "" "http://localhost:8080"
python -m http.server 8080
pause
