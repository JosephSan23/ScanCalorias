# Guía de Markdown - Ejemplos de Formato

Esta es una guía completa de cómo usar Markdown para crear documentación profesional.

## 1. Títulos

```markdown
# Título Principal (H1)
## Título Secundario (H2)
### Subtítulo (H3)
#### Título de Cuarto Nivel (H4)
##### Título de Quinto Nivel (H5)
###### Título de Sexto Nivel (H6)
```

## 2. Texto con Formato

### **Texto en Negrilla (Bold)**
Para hacer texto en **negrilla** usa doble asterisco:
```markdown
**Este texto está en negrilla**
```

### *Texto en Cursiva (Italic)*
Para hacer texto en *cursiva* usa un asterisco:
```markdown
*Este texto está en cursiva*
```

### ***Texto en Negrilla y Cursiva***
Para combinar ambos usa tres asteriscos:
```markdown
***Este texto está en negrilla y cursiva***
```

### ~~Texto Tachado~~
Para tachar texto usa doble tilde:
```markdown
~~Este texto está tachado~~
```

## 3. Listas

### Lista No Ordenada
```markdown
- Elemento 1
- Elemento 2
- Elemento 3
  - Sub-elemento 3.1
  - Sub-elemento 3.2
    - Sub-sub-elemento 3.2.1
```

Resultado:
- Elemento 1
- Elemento 2
- Elemento 3
  - Sub-elemento 3.1
  - Sub-elemento 3.2
    - Sub-sub-elemento 3.2.1

### Lista Ordenada
```markdown
1. Primer elemento
2. Segundo elemento
3. Tercer elemento
   1. Sub-elemento 3.1
   2. Sub-elemento 3.2
```

Resultado:
1. Primer elemento
2. Segundo elemento
3. Tercer elemento
   1. Sub-elemento 3.1
   2. Sub-elemento 3.2

## 4. Enlaces e Imágenes

### Enlaces
```markdown
[Texto del enlace](https://www.ejemplo.com)
[GitHub](https://github.com)
```

### Imágenes
```markdown
![Texto alternativo](ruta/a/la/imagen.jpg)
![Logo de la aplicación](../assets/logo.png)
```

## 5. Código

### Código en Línea
Para mostrar `código en línea` usa comillas invertidas:
```markdown
Usa la función `console.log()` para imprimir en consola.
```

### Bloques de Código
Para bloques de código usa tres comillas invertidas:

````markdown
```javascript
function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}

saludar("Mundo");
```
````

```javascript
function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}

saludar("Mundo");
```

## 6. Citas

Para crear citas usa el símbolo `>`:

```markdown
> Esta es una cita importante.
> Puede ocupar múltiples líneas.
> 
> > Esta es una cita anidada.
```

Resultado:
> Esta es una cita importante.
> Puede ocupar múltiples líneas.
> 
> > Esta es una cita anidada.

## 7. Tablas

```markdown
| Columna 1 | Columna 2 | Columna 3 |
|-----------|-----------|-----------|
| Fila 1    | Dato A    | Dato B    |
| Fila 2    | Dato C    | Dato D    |
| Fila 3    | Dato E    | Dato F    |
```

Resultado:
| Columna 1 | Columna 2 | Columna 3 |
|-----------|-----------|-----------|
| Fila 1    | Dato A    | Dato B    |
| Fila 2    | Dato C    | Dato D    |
| Fila 3    | Dato E    | Dato F    |

### Alineación en Tablas
```markdown
| Izquierda | Centro | Derecha |
|:----------|:------:|--------:|
| Texto     | Texto  | Texto   |
| Izq       | Centro | Der     |
```

## 8. Líneas Horizontales

Para crear una línea horizontal usa tres guiones:
```markdown
---
```

---

## 9. Listas de Tareas (Checkboxes)

```markdown
- [x] Tarea completada
- [ ] Tarea pendiente
- [x] Otra tarea completada
- [ ] Tarea por hacer
```

Resultado:
- [x] Tarea completada
- [ ] Tarea pendiente
- [x] Otra tarea completada
- [ ] Tarea por hacer

## 10. Notas y Alertas

### Nota Informativa
```markdown
> **📝 Nota:** Esta es una nota informativa importante.
```

> **📝 Nota:** Esta es una nota informativa importante.

### Advertencia
```markdown
> **⚠️ Advertencia:** Ten cuidado con este procedimiento.
```

> **⚠️ Advertencia:** Ten cuidado con este procedimiento.

### Tip
```markdown
> **💡 Tip:** Este es un consejo útil para mejorar tu código.
```

> **💡 Tip:** Este es un consejo útil para mejorar tu código.

## 11. Estructura Típica de Documentación de Proyecto

```markdown
# Nombre del Proyecto

**Descripción breve del proyecto en una línea.**

## 📋 Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [API](#api)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## 📖 Descripción

Descripción detallada de qué hace el proyecto, por qué es útil y para quién está dirigido.

## ✨ Características

- **Característica 1:** Descripción de la primera característica
- **Característica 2:** Descripción de la segunda característica
- **Característica 3:** Descripción de la tercera característica

## 🚀 Instalación

### Prerrequisitos

- Node.js v14 o superior
- npm o yarn

### Pasos de instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/usuario/proyecto.git
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor:
   ```bash
   npm start
   ```

## 💻 Uso

### Ejemplo básico

```javascript
const miProyecto = require('mi-proyecto');

miProyecto.funcion({
    parametro1: 'valor1',
    parametro2: 'valor2'
});
```

## 📚 API

### `funcion(opciones)`

**Descripción:** Realiza una operación específica.

**Parámetros:**
- `opciones` (Object): Configuración de la función
  - `parametro1` (String): Descripción del primer parámetro
  - `parametro2` (String): Descripción del segundo parámetro

**Retorna:** (Promise) Promesa que resuelve con el resultado.

**Ejemplo:**
```javascript
const resultado = await funcion({
    parametro1: 'ejemplo',
    parametro2: 'datos'
});
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -am 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
```

## 12. Escapar Caracteres Especiales

Si necesitas mostrar caracteres especiales de Markdown literalmente, usa la barra invertida `\`:

```markdown
\*Este texto tiene asteriscos literales\*
\# Este no es un título
\[Esto no es un enlace\]
```

## 📝 Tips Adicionales

1. **Espacios:** Deja una línea en blanco entre elementos para mejor legibilidad
2. **Consistencia:** Mantén un estilo consistente en todo el documento
3. **Previsualización:** Usa la vista previa de VS Code para ver cómo se ve tu Markdown
4. **Extensiones:** Instala extensiones de Markdown en VS Code para mejor experiencia

---

**¡Ya tienes todo lo necesario para crear documentación profesional en Markdown!** 🎉