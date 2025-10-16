# 🤖 Workflow Automatizado

## ⚡ Scripts Automatizados Disponibles

He configurado varios comandos para automatizar completamente el proceso de commits y releases.

---

## 🎯 Comandos Principales

### 1️⃣ Commit Interactivo (RECOMENDADO)

```bash
npm run commit:add
```

**¿Qué hace?**
1. Ejecuta `git add .` automáticamente
2. Abre un asistente interactivo que te pregunta:
   - Tipo de cambio (feat, fix, docs, etc.)
   - Ámbito del cambio
   - Descripción corta
   - Descripción larga (opcional)
   - Breaking changes (opcional)
   - Issues relacionados (opcional)
3. Genera el commit con formato perfecto

**Ejemplo de uso:**
```bash
# Haces cambios en tu código
npm run commit:add

# Responde las preguntas:
# ? Select the type of change: feat
# ? What is the scope: country-list
# ? Write a short description: add pagination support
# ? Provide a longer description: (opcional)
# ? Are there any breaking changes? No
# ? Does this change affect any open issues? (opcional)
```

### 2️⃣ Commit Simple

```bash
# Solo commit (sin agregar archivos)
npm run commit
```

---

## 🚀 Comandos Super Automatizados

### Ship Complete (Todo en Uno)

```bash
npm run ship
```

**¿Qué hace?**
1. `git add .` - Agrega todos los cambios
2. Abre Commitizen para crear el commit
3. `npm run release` - Genera nueva versión automáticamente
4. `git push --follow-tags` - Publica todo

**Perfecto para:** Cuando tienes cambios listos y quieres publicarlos inmediatamente.

### Ship Minor

```bash
npm run ship:minor
```

**¿Qué hace?**
1. `git add .`
2. Commit automático: `chore: prepare release`
3. `npm run release:minor` - Versión minor
4. `git push --follow-tags`

**Perfecto para:** Releases de nuevas features planificadas.

### Ship Major

```bash
npm run ship:major
```

**¿Qué hace?**
1. `git add .`
2. Commit automático: `chore: prepare release`
3. `npm run release:major` - Versión major
4. `git push --follow-tags`

**Perfecto para:** Breaking changes importantes.

---

## 📝 Workflows Recomendados

### Workflow 1: Desarrollo Continuo

```bash
# Durante el desarrollo
npm run commit:add    # Cada vez que completes una tarea

# Cuando estés listo para release
npm run release
git push --follow-tags origin master
```

### Workflow 2: Todo Automático

```bash
# Una sola vez, hace todo
npm run ship
```

### Workflow 3: Feature Planificada

```bash
# Desarrollo
npm run commit:add
npm run commit:add
npm run commit:add

# Release minor programado
npm run ship:minor
```

---

## 🎨 Ejemplo Completo con Commitizen

```bash
$ npm run commit:add

> 03.countryapp@0.1.0 commit:add
> git add . && git-cz

cz-cli@4.3.1, cz-conventional-changelog@3.3.0

? Select the type of change that you're committing: (Use arrow keys)
❯ feat:     A new feature
  fix:      A bug fix
  docs:     Documentation only changes
  style:    Changes that do not affect the meaning of the code
  refactor: A code change that neither fixes a bug nor adds a feature
  perf:     A code change that improves performance
  test:     Adding missing tests or correcting existing tests
  build:    Changes that affect the build system or external dependencies
  ci:       Changes to our CI configuration files and scripts
  chore:    Other changes that don't modify src or test files
  revert:   Reverts a previous commit

? Select the type of change that you're committing: feat
? What is the scope of this change (e.g. component or file name): (press enter to skip)
 country-list
? Write a short, imperative tense description of the change (max 88 chars):
 (25) add pagination support
? Provide a longer description of the change: (press enter to skip)
 Added pagination with 10 items per page and navigation controls
? Are there any breaking changes? No
? Does this change affect any open issues? (press enter to skip)
 #123

[master a1b2c3d] feat(country-list): add pagination support
 5 files changed, 150 insertions(+), 20 deletions(-)
```

---

## 📊 Comparación de Métodos

| Método | Comando | Nivel de Automatización | Mejor para |
|--------|---------|------------------------|------------|
| Manual | `git commit -m "..."` | ⭐ Bajo | Expertos |
| Interactivo | `npm run commit:add` | ⭐⭐⭐ Alto | Uso diario |
| Semi-auto | `npm run ship` | ⭐⭐⭐⭐ Muy Alto | Releases rápidos |
| Full-auto | `npm run ship:minor` | ⭐⭐⭐⭐⭐ Total | Releases planificados |

---

## 🎯 Recomendaciones por Situación

### 🟢 Para desarrollo diario
```bash
npm run commit:add
```
Te guía paso a paso, perfecto para no olvidar nada.

### 🟡 Para releases rápidos
```bash
npm run ship
```
Haces commit + versión + push en un solo comando.

### 🔵 Para releases programados
```bash
npm run ship:minor  # o ship:major
```
Release directo sin preguntas.

### 🔴 Para múltiples commits antes de release
```bash
npm run commit:add  # Varias veces
npm run commit:add
npm run commit:add
npm run release     # Cuando estés listo
git push --follow-tags origin master
```

---

## 🤖 Para IA/Asistentes (Cursor/Copilot)

Si estás usando un asistente de IA como yo (Cursor), puedes pedirme:

**Opción 1: Commit Interactivo**
```
"Haz commit de los cambios con npm run commit:add"
```
Yo ejecutaré el comando y responderé las preguntas automáticamente.

**Opción 2: Ship Completo**
```
"Ejecuta npm run ship para publicar los cambios"
```
Todo el proceso se hará automáticamente.

**Opción 3: Commit Manual con Formato**
```
"Haz commit con el mensaje: feat(search): add debounce"
```
Usaré el formato correcto de conventional commits.

---

## ⚙️ Configuración Personalizada

### Cambiar Idioma de Commitizen

Crea un archivo `.czrc` en la raíz:

```json
{
  "path": "cz-conventional-changelog",
  "defaultType": "feat",
  "defaultScope": "",
  "defaultSubject": "",
  "defaultBody": "",
  "defaultIssues": "",
  "types": {
    "feat": {
      "description": "Nueva funcionalidad",
      "title": "Features"
    },
    "fix": {
      "description": "Corrección de errores",
      "title": "Bug Fixes"
    }
  }
}
```

### Agregar Emojis Automáticos

Instala `cz-emoji`:

```bash
bun add -D cz-emoji
```

Modifica `package.json`:

```json
{
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-emoji"
    }
  }
}
```

---

## 🆘 Troubleshooting

### "git-cz: command not found"
```bash
bun install
```

### Commitizen no inicia
```bash
npm run commit:add
# o directamente
bunx git-cz
```

### Quiero saltar el asistente
Usa el commit manual tradicional:
```bash
git add .
git commit -m "feat(scope): description"
```

---

## 📋 Cheatsheet Rápido

```bash
# Commit interactivo
npm run commit:add

# Todo en uno
npm run ship

# Solo release
npm run release

# Release específico
npm run release:minor
npm run release:major
npm run release:patch

# Ship con versión específica
npm run ship:minor
npm run ship:major
```

---

## 🎉 Ventajas del Sistema

✅ **No necesitas recordar la sintaxis** - Commitizen te guía  
✅ **Commits siempre válidos** - Husky valida automáticamente  
✅ **CHANGELOG automático** - Se genera solo  
✅ **Versionado semántico** - Siguiendo estándares  
✅ **Un solo comando** - Ship hace todo  
✅ **Reversible** - Puedes usar git normal si quieres  

---

**🚀 ¡Workflow 100% automatizado listo!**

Ahora puedes hacer `npm run commit:add` y el asistente se encargará del resto.

