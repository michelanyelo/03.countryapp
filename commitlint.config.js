module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // Nueva funcionalidad
        'fix',      // Corrección de errores
        'docs',     // Cambios en documentación
        'style',    // Cambios de formato (sin afectar código)
        'refactor', // Refactorización
        'perf',     // Mejoras de rendimiento
        'test',     // Añadir o corregir tests
        'build',    // Cambios en build/dependencias
        'ci',       // Cambios en CI
        'chore',    // Otras tareas
        'revert'    // Revertir cambios
      ]
    ],
    'subject-case': [0]
  }
};

