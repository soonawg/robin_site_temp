@echo off
set "Path=C:\Program Files\Go\bin;%Path%"
cd /d "C:\Users\User\Desktop\robin_site"
"C:\Users\User\scoop\shims\hugo.exe" server --bind 127.0.0.1 --port 1313 --disableFastRender --noHTTPCache > "C:\tmp\robin-hugo-server.log" 2>&1
