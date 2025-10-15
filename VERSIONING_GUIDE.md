# Guía de Versionado Automático

## 🚀 Inicio Rápido

### 1. Hacer commits con formato convencional

```bash
# Formato: tipo(ámbito): descripción
git commit -m "feat(country-list): add table centering styles"
git commit -m "fix(search): resolve input validation bug"
```

### 2. Crear tu primera versión

```bash
# Si es tu primera versión (genera v1.0.0)
npm run release:first

# Push con tags
git push --follow-tags origin master
```

### 3. Para versiones subsecuentes

```bash
# Versión automática (analiza commits)
npm run release

# O especifica el tipo de cambio
npm run release:patch  # Para fixes (1.0.0 → 1.0.1)
npm run release:minor  # Para features (1.0.0 → 1.1.0)
npm run release:major  # Para breaking changes (1.0.0 → 2.0.0)
```

## 📝 Tipos de Commit

| Tipo | Descripción | Incrementa Versión |
|------|-------------|-------------------|
| `feat` | Nueva funcionalidad | MINOR (1.x.0) |
| `fix` | Corrección de bugs | PATCH (1.0.x) |
| `docs` | Cambios en documentación | - |
| `style` | Formato, espacios, etc. | - |
| `refactor` | Refactorización | - |
| `perf` | Mejoras de rendimiento | PATCH |
| `test` | Tests | - |
| `build` | Build/dependencias | - |
| `ci` | CI/CD | - |
| `chore` | Otras tareas | - |

## 💡 Ejemplos de Commits

### Feature (Nueva funcionalidad)
```bash
git commit -m "feat(country-search): add debounce to search input"
git commit -m "feat(api): integrate REST Countries API v3"
```

### Fix (Corrección de errores)
```bash
git commit -m "fix(table): resolve alignment issues in mobile view"
git commit -m "fix(routing): correct navigation path for country details"
```

### Chore (Tareas de mantenimiento)
```bash
git commit -m "chore(deps): update angular to v20.3.0"
git commit -m "chore(config): add versionado automático"
```

### Docs (Documentación)
```bash
git commit -m "docs(readme): add installation instructions"
git commit -m "docs(api): document country service methods"
```

### Breaking Change (Cambio mayor)
```bash
git commit -m "feat(api): change response format

BREAKING CHANGE: API response structure changed from array to object"
```

## 🎯 Workflow Completo

```bash
# 1. Hacer cambios en el código
git add .

# 2. Commit con formato convencional (commitlint validará automáticamente)
git commit -m "feat(country-list): add pagination support"

# 3. Continuar con más commits si es necesario
git commit -m "test(country-list): add pagination tests"
git commit -m "docs(country-list): document pagination feature"

# 4. Cuando estés listo para una nueva versión
npm run release

# 5. Revisar el CHANGELOG.md generado

# 6. Push con tags
git push --follow-tags origin master
```

## 🔍 Verificación

### Ver commits desde la última versión
```bash
git log --oneline $(git describe --tags --abbrev=0)..HEAD
```

### Ver todas las versiones
```bash
git tag
```

### Ver cambios de una versión específica
```bash
git show v1.0.0
```

## ⚠️ Importante

- **Husky validará automáticamente** tus commits
- Si un commit no sigue el formato, será rechazado
- El CHANGELOG se genera automáticamente
- Nunca edites manualmente el CHANGELOG
- Siempre usa `--follow-tags` al hacer push

## 🛠️ Troubleshooting

### Mi commit fue rechazado
El mensaje de commit no sigue el formato convencional. Revisa el formato:
```bash
tipo(ámbito): descripción corta
```

### ¿Cómo corrijo mi último commit?
```bash
git commit --amend -m "feat(scope): correct message"
```

### ¿Qué versión debo usar?
- `patch`: Solo correcciones de bugs
- `minor`: Nuevas funcionalidades (retrocompatibles)
- `major`: Cambios que rompen compatibilidad

### Error al hacer push
Asegúrate de incluir los tags:
```bash
git push --follow-tags origin master
```

