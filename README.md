# 03Countryapp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Versionado Automático

Este proyecto usa **Conventional Commits**, **Standard Version** y **Commitizen** para gestionar versiones y commits automáticamente.

### 🚀 Uso Rápido (Recomendado)

```bash
# Commit interactivo (te guía paso a paso)
npm run commit:add

# Todo en uno: commit + versión + push
npm run ship
```

### Formato de Commits

Los commits deben seguir el formato:

```
<tipo>(<ámbito>): <descripción>

[cuerpo opcional]

[nota al pie opcional]
```

**Tipos disponibles:**
- `feat`: Nueva funcionalidad (incrementa MINOR)
- `fix`: Corrección de errores (incrementa PATCH)
- `docs`: Cambios en documentación
- `style`: Cambios de formato (espacios, comas, etc)
- `refactor`: Refactorización de código
- `perf`: Mejoras de rendimiento
- `test`: Añadir o corregir tests
- `build`: Cambios en build/dependencias
- `ci`: Cambios en CI/CD
- `chore`: Otras tareas

**Ejemplos:**
```bash
feat(country-list): add pagination to country table
fix(search): resolve search input debounce issue
docs(readme): update installation instructions
```

### Crear una Nueva Versión

```bash
# Primera vez (crea v1.0.0 sin incrementar versión actual)
npm run release:first

# Versión automática (basada en commits)
npm run release

# Versión específica
npm run release:patch  # 1.0.0 -> 1.0.1
npm run release:minor  # 1.0.0 -> 1.1.0
npm run release:major  # 1.0.0 -> 2.0.0
```

Esto automáticamente:
1. Analiza los commits desde la última versión
2. Determina el nuevo número de versión
3. Actualiza el `package.json`
4. Genera/actualiza el `CHANGELOG.md`
5. Crea un commit y tag de git

### Publicar la Versión

Después de crear la versión, publícala con:

```bash
git push --follow-tags origin master
```

### 📚 Documentación de Versionado

- **`QUICKSTART.md`** - Guía rápida de inicio
- **`AUTOMATED_WORKFLOW.md`** - Workflows automatizados completos
- **`AI_ASSISTANT_GUIDE.md`** - Cómo usar con asistentes de IA (Cursor/Copilot)
- **`VERSIONING_GUIDE.md`** - Guía detallada con ejemplos
- **`SETUP_SUMMARY.md`** - Resumen técnico de la configuración

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
