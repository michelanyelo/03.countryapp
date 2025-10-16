# 🤖 Guía para Usar con Asistentes de IA (Cursor/Copilot)

## 🎯 Cómo Pedirle a tu IA que Haga Commits Automáticos

Si estás usando **Cursor**, **GitHub Copilot**, o cualquier asistente de IA, puedes pedirle que haga los commits por ti usando estos comandos.

---

## ⚡ Comandos para Pedirle a la IA

### 1️⃣ Commit Interactivo Guiado

**Tú dices:**
```
"Haz commit de los cambios usando npm run commit:add"
```

**La IA hará:**
1. Ejecutar `npm run commit:add`
2. Responder el asistente interactivo automáticamente
3. Analizar tus cambios para determinar tipo, ámbito y descripción
4. Generar el commit perfecto

---

### 2️⃣ Commit con Descripción Específica

**Tú dices:**
```
"Haz commit con el mensaje: add pagination to country list"
```

**La IA generará:**
```bash
git commit -m "feat(country-list): add pagination to country list"
```

---

### 3️⃣ Commit y Release Automático

**Tú dices:**
```
"Haz commit y genera una nueva versión"
```

**La IA hará:**
1. Analizar cambios
2. Crear commit con formato correcto
3. Ejecutar `npm run release`

---

### 4️⃣ Proceso Completo (Ship)

**Tú dices:**
```
"Ship estos cambios"
o
"Publica esta versión"
o
"Ejecuta npm run ship"
```

**La IA hará:**
1. `git add .`
2. Crear commit interactivo
3. Generar versión automática
4. `git push --follow-tags`

---

## 📝 Ejemplos Específicos por Tipo de Cambio

### Nueva Funcionalidad (feat)

**Tú:**
```
"He agregado paginación a la lista de países, haz commit"
```

**IA genera:**
```bash
git commit -m "feat(country-list): add pagination support"
```

### Corrección de Bug (fix)

**Tú:**
```
"Arreglé el bug de validación en el search, commitea"
```

**IA genera:**
```bash
git commit -m "fix(search): resolve input validation issue"
```

### Documentación (docs)

**Tú:**
```
"Actualicé el README con instrucciones de instalación, haz commit"
```

**IA genera:**
```bash
git commit -m "docs(readme): update installation instructions"
```

### Refactorización (refactor)

**Tú:**
```
"Refactoricé el servicio de países, haz commit"
```

**IA genera:**
```bash
git commit -m "refactor(service): simplify country service API calls"
```

### Estilos (style)

**Tú:**
```
"Mejoré los estilos de la tabla, haz commit"
```

**IA genera:**
```bash
git commit -m "style(table): improve cell padding and alignment"
```

---

## 🎨 Templates de Peticiones

Copia y pega estos templates cuando hables con tu IA:

### Template Básico
```
Haz commit de los cambios con el mensaje: [descripción]
```

### Template con Tipo Específico
```
Haz un commit de tipo [feat/fix/docs/etc] sobre [ámbito]: [descripción]
```

### Template Completo
```
Haz commit de tipo [tipo] en el ámbito [ámbito] con la descripción: [descripción].
Luego genera una versión [patch/minor/major] y publica.
```

### Template Ship Todo
```
Analiza los cambios, haz commit con formato convencional y ejecuta npm run ship
```

---

## 🤖 Peticiones Avanzadas

### 1. Análisis + Commit

**Tú:**
```
"Analiza los cambios que hice y genera un commit apropiado"
```

**La IA:**
- Revisará los archivos modificados
- Determinará el tipo (feat/fix/docs/etc)
- Identificará el ámbito
- Escribirá una descripción clara
- Ejecutará el commit

### 2. Múltiples Commits

**Tú:**
```
"Divide estos cambios en múltiples commits lógicos"
```

**La IA:**
- Agrupará cambios relacionados
- Creará múltiples commits
- Cada uno con su mensaje apropiado

### 3. Commit + Docs

**Tú:**
```
"Haz commit y actualiza el CHANGELOG manualmente"
```

**La IA:**
- Hará el commit
- Actualizará CHANGELOG.md
- Hará otro commit para el CHANGELOG

---

## 📋 Workflows Completos para IA

### Workflow 1: Desarrollo Feature

**Tu conversación con la IA:**

```
Tú: "Agrega paginación a la lista de países"
IA: [Implementa el código]

Tú: "Haz commit de estos cambios"
IA: [Ejecuta] git commit -m "feat(country-list): add pagination support"

Tú: "Agrega tests para la paginación"
IA: [Implementa tests]

Tú: "Haz commit de los tests"
IA: [Ejecuta] git commit -m "test(country-list): add pagination tests"

Tú: "Genera una nueva versión minor"
IA: [Ejecuta] npm run release:minor
```

### Workflow 2: Hotfix Rápido

**Tu conversación con la IA:**

```
Tú: "El botón de búsqueda no funciona, arréglalo"
IA: [Identifica y corrige el bug]

Tú: "Haz commit, genera patch version y publica"
IA: [Ejecuta]
    git commit -m "fix(search): resolve button click handler"
    npm run release:patch
    git push --follow-tags origin master
```

### Workflow 3: Ship Rápido

**Tu conversación con la IA:**

```
Tú: "He terminado con esta feature, ship it"
IA: [Ejecuta] npm run ship
    [Responde asistente]
    [Genera versión]
    [Publica]
```

---

## 🎯 Frases Clave que tu IA Reconoce

Estas frases activan diferentes acciones:

| Frase | Acción |
|-------|--------|
| "haz commit" | Commit con análisis automático |
| "commitea esto" | Commit con formato convencional |
| "ship it" / "púbicalo" | `npm run ship` |
| "genera versión" / "nueva versión" | `npm run release` |
| "versión minor/major/patch" | Release específico |
| "analiza y commitea" | Análisis + commit automático |

---

## 🔧 Configuración para tu IA

Si quieres que tu IA **siempre** use el formato correcto, puedes decirle:

```
"A partir de ahora, todos los commits que hagas deben seguir Conventional Commits.
Analiza los cambios, determina el tipo (feat/fix/docs/style/refactor/perf/test/chore),
identifica el ámbito, y escribe una descripción clara en imperativo y en inglés/español."
```

---

## 💡 Tips para Mejores Resultados

### ✅ Haz esto:
- Se específico: "Haz commit de tipo feat sobre country-list"
- Da contexto: "Agregué paginación, haz commit apropiado"
- Usa comandos claros: "Ejecuta npm run ship"

### ❌ Evita esto:
- Muy vago: "haz algo con git"
- Sin contexto: "commitea"
- Ambiguo: "guarda los cambios"

---

## 🎓 Ejemplos Reales de Conversación

### Ejemplo 1: Feature Completa

```
👤 Tú: "Necesito agregar ordenamiento a la tabla de países"

🤖 IA: "Voy a agregar la funcionalidad de ordenamiento..."
      [Implementa el código]
      
👤 Tú: "Perfecto, ahora haz commit"

🤖 IA: "He hecho commit:"
      feat(country-list): add table sorting functionality
      
👤 Tú: "Ahora genera una versión minor"

🤖 IA: "Versión generada: v0.2.0"
      [Ejecuta npm run release:minor]
      
👤 Tú: "Publica los cambios"

🤖 IA: "Cambios publicados"
      [Ejecuta git push --follow-tags origin master]
```

### Ejemplo 2: Fix Rápido

```
👤 Tú: "El search tiene un bug en la validación, arréglalo y haz commit"

🤖 IA: "He corregido el bug de validación y hecho commit:"
      fix(search): resolve input validation issue
```

### Ejemplo 3: Ship Completo

```
👤 Tú: "He terminado con todas las features de esta semana, ship everything"

🤖 IA: "Ejecutando npm run ship..."
      [Hace commit interactivo]
      [Genera versión]
      [Publica]
      "✅ Versión v0.3.0 publicada con éxito"
```

---

## 🚀 Script de Inicialización para tu IA

Copia esto al inicio de tu conversación con la IA:

```
Configura tu comportamiento para commits en este proyecto:

1. Todos los commits deben seguir Conventional Commits
2. Usa estos tipos: feat, fix, docs, style, refactor, perf, test, chore
3. Formato: tipo(ámbito): descripción
4. Descripción en inglés, imperativo, sin punto final
5. Cuando diga "haz commit", analiza los cambios y genera el mensaje apropiado
6. Cuando diga "ship", ejecuta npm run ship
7. Siempre confirma qué comando vas a ejecutar antes de hacerlo

¿Entendido?
```

---

## 🎉 Ventajas de Usar IA para Commits

✅ **No necesitas recordar el formato** - La IA lo sabe  
✅ **Mensajes consistentes** - Siempre bien escritos  
✅ **Rápido** - Solo dices qué cambios hiciste  
✅ **Análisis automático** - La IA determina tipo y ámbito  
✅ **Reduce errores** - Formato siempre válido  
✅ **Workflow fluido** - Sin interrumpir el desarrollo  

---

## 🆘 Si algo sale mal

### La IA no reconoce el comando

**Solución:** Sé más explícito
```
"Ejecuta el comando: npm run commit:add"
```

### El commit tiene formato incorrecto

**Solución:** Especifica el formato
```
"Haz commit con formato: feat(component): add feature"
```

### Quieres editar el commit de la IA

**Solución:**
```
"Modifica el último commit para que diga: [nuevo mensaje]"
```

---

**🎊 ¡Tu IA está lista para hacer commits automáticos!**

Ahora solo di: *"Haz commit de estos cambios"* y tu asistente se encargará del resto.

