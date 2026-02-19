# React + TypeScript + Vite

Esta plantilla proporciona una configuración mínima para hacer funcionar React en Vite con HMR y algunas reglas de ESLint.

Actualmente, hay dos plugins oficiales disponibles:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) utiliza [Babel](https://babeljs.io/) (o [oxc](https://oxc.rs) cuando se usa en [rolldown-vite](https://vite.dev/guide/rolldown)) para Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) utiliza [SWC](https://swc.rs/) para Fast Refresh

## Instalación

Para comenzar con esta plantilla, necesitarás clonar el repositorio y configurar tu entorno. Sigue estos pasos:

1. **Clonar el repositorio**:  
   Abre tu terminal y ejecuta:  
   ```
   git clone <url-del-repositorio>
   ```  
   Reemplaza `<url-del-repositorio>` con la URL real del repositorio (por ejemplo, `https://github.com/tu-usuario/tu-repositorio.git`).

2. **Instalar Node.js**:  
   Este proyecto requiere Node.js versión 24 o superior. Si no lo tienes instalado:  
   - Descárgalo e instálalo desde el sitio web oficial: [nodejs.org](https://nodejs.org/en/download). Selecciona la versión LTS (v24.x.x) para tu sistema operativo.  
   - Alternativamente, usa un gestor de versiones como [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager):  
     - Instala nvm siguiendo las instrucciones en su página de GitHub.  
     - Luego ejecuta:  
       ```
       nvm install 24
       nvm use 24
       ```  
   Verifica la instalación ejecutando `node -v` en tu terminal; debería mostrar algo como `v24.x.x`.

3. **Instalar dependencias**:  
   Navega al directorio clonado:  
   ```
   cd tu-repositorio
   npm install
   ```

Para una guía visual sobre cómo clonar el repositorio y ejecutar el proyecto, mira este video: [Cómo Clonar y Ejecutar el Proyecto](https://www.youtube.com/watch?v=lmTiL3Mld50).

## Uso

Para iniciar el servidor de desarrollo:  
```
npm run dev
```  
Esto ejecutará la aplicación en modo de desarrollo con reemplazo de módulos en caliente (HMR). Abre [http://localhost:5173](http://localhost:5173) en tu navegador para verla.

## Compilador de React

El Compilador de React actualmente no es compatible con SWC. Consulta [este issue](https://github.com/vitejs/vite-plugin-react/issues/428) para seguir el progreso.

## Expandir la configuración de ESLint

Si estás desarrollando una aplicación de producción, recomendamos actualizar la configuración para habilitar reglas de lint con reconocimiento de tipos:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Otras configuraciones...

      // Elimina tseslint.configs.recommended y reemplázalo con esto
      tseslint.configs.recommendedTypeChecked,
      // Alternativamente, usa esto para reglas más estrictas
      tseslint.configs.strictTypeChecked,
      // Opcionalmente, agrega esto para reglas estilísticas
      tseslint.configs.stylisticTypeChecked,

      // Otras configuraciones...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // otras opciones...
    },
  },
])
```

También puedes instalar [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) y [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) para reglas de lint específicas de React:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Otras configuraciones...
      // Habilita reglas de lint para React
      reactX.configs['recommended-typescript'],
      // Habilita reglas de lint para React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // otras opciones...
    },
  },
])
```
