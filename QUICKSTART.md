# 🚀 Quick Start - Versionado Automático

## ✅ Sistema Instalado y Probado

El sistema de versionado automático ya está configurado y funcionando en tu proyecto.

### 📦 Lo que incluye:

- ✅ **standard-version** - Generación automática de versiones
- ✅ **commitlint** - Validación de formato de commits
- ✅ **husky** - Hooks de git automáticos
- ✅ **CHANGELOG** automático
- ✅ **Primera versión creada** (v0.0.0)

---

## 🎯 Uso Diario

### 🤖 Método Automatizado (RECOMENDADO)

```bash
# Asistente interactivo que te guía paso a paso
npm run commit:add
```

El asistente te preguntará:
- ✅ Tipo de cambio (feat, fix, docs...)
- ✅ Ámbito (componente o archivo)
- ✅ Descripción corta
- ✅ Descripción larga (opcional)
- ✅ Breaking changes (opcional)

**¡No necesitas recordar el formato!**

### 📝 Método Manual (Alternativo)

```bash
# Haz tus cambios en el código
git add .

# Commit con formato convencional
git commit -m "feat(search): add debounce functionality"
```

**Formato:** `tipo(ámbito): descripción`

**Tipos más usados:**
- `feat` - Nueva funcionalidad
- `fix` - Corrección de bug
- `docs` - Documentación
- `style` - Estilos/formato
- `refactor` - Refactorización
- `chore` - Mantenimiento

### 2️⃣ Crear nueva versión

```bash
# Versión automática (recomendado)
npm run release

# O específica
npm run release:patch  # 1.0.0 → 1.0.1 (fixes)
npm run release:minor  # 1.0.0 → 1.1.0 (features)
npm run release:major  # 1.0.0 → 2.0.0 (breaking)
```

### 3️⃣ Publicar

```bash
git push --follow-tags origin master
```

### 🚀 TODO EN UNO (Super Rápido)

```bash
# Hace commit + versión + push automáticamente
npm run ship
```

Este comando hace **todo** el proceso completo:
1. `git add .` - Agrega cambios
2. Te guía para crear el commit
3. Genera la nueva versión
4. Publica con tags

---

## 📝 Ejemplos Rápidos

### ✅ Commits Válidos

```bash
git commit -m "feat(country-list): add sorting feature"
git commit -m "fix(api): resolve timeout issue"
git commit -m "docs(readme): update setup instructions"
git commit -m "style(table): improve mobile responsive"
git commit -m "refactor(service): simplify API calls"
git commit -m "chore(deps): update angular to v20.4"
```

### ❌ Commits Inválidos

```bash
git commit -m "Added new feature"           # Sin tipo ni ámbito
git commit -m "fixed bug"                   # Sin ámbito
git commit -m "FEAT: new feature"           # Mayúsculas en tipo
git commit -m "feat(country-list) added"    # Sin dos puntos
```

---

## 🎨 Workflow Completo

```bash
# 1. Trabajar en una nueva feature
git checkout -b feat/nueva-funcionalidad

# 2. Hacer commits (tantos como necesites)
git commit -m "feat(component): add new component"
git commit -m "test(component): add unit tests"
git commit -m "docs(component): add documentation"

# 3. Merge a master
git checkout master
git merge feat/nueva-funcionalidad

# 4. Crear versión
npm run release

# 5. Publicar
git push --follow-tags origin master
```

---

## 📊 Ver Información

```bash
# Ver versión actual
git describe --tags

# Ver todas las versiones
git tag

# Ver commits desde última versión
git log --oneline v0.0.0..HEAD

# Ver CHANGELOG
cat CHANGELOG.md
```

---

## 🔧 Comandos Disponibles

### Commits Automatizados
| Comando | Descripción |
|---------|-------------|
| `npm run commit:add` | 🤖 Commit interactivo (RECOMENDADO) |
| `npm run commit` | Commit sin agregar archivos |

### Versionado
| Comando | Descripción | Ejemplo |
|---------|-------------|---------|
| `npm run release` | Versión automática | `0.0.0 → 1.0.0` |
| `npm run release:patch` | Bug fixes | `1.0.0 → 1.0.1` |
| `npm run release:minor` | Features | `1.0.0 → 1.1.0` |
| `npm run release:major` | Breaking | `1.0.0 → 2.0.0` |
| `npm run release:first` | Primera versión | Crea `1.0.0` |

### Super Automatizados 🚀
| Comando | Descripción |
|---------|-------------|
| `npm run ship` | ⚡ Commit + Versión + Push (TODO) |
| `npm run ship:minor` | Commit + Minor + Push |
| `npm run ship:major` | Commit + Major + Push |

---

## 🆘 Troubleshooting

### Mi commit fue rechazado

**Error:** El formato no es correcto

**Solución:**
```bash
# Corregir último commit
git commit --amend -m "feat(scope): correct message"
```

### No sé qué versión usar

- `patch` → Solo correcciones (fix)
- `minor` → Nuevas funcionalidades (feat)
- `major` → Cambios que rompen compatibilidad

### Olvidé el --follow-tags al hacer push

```bash
# Hacer push solo de los tags
git push --tags
```

---

## 📚 Documentación Completa

Para más detalles, consulta:

- **`AUTOMATED_WORKFLOW.md`** - ⭐ Guía de comandos automatizados
- **`VERSIONING_GUIDE.md`** - Guía completa con ejemplos
- **`SETUP_SUMMARY.md`** - Resumen técnico de la configuración
- **`README.md`** - Sección "Versionado Automático"

---

## ✨ Próximos Pasos

1. ✅ Sistema configurado y probado
2. 📝 Haz commits siguiendo el formato convencional
3. 🚀 Usa `npm run release` cuando tengas cambios listos
4. 📦 Publica con `git push --follow-tags`
5. 🎉 ¡Disfruta del versionado automático!

---

**🎊 ¡Listo para usar!**

El sistema validará automáticamente tus commits y generará versiones y CHANGELOGs profesionales.

