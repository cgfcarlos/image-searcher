# image-searcher

Frontal angular que consume el api de [Unsplash](https://unsplash.com/) para mostrar imagenes mediante filtros y acceder a los perfiles publicos de los usuarios junto con sus fotos y colecciones.

## Demo
Desplegada en GitHubPages, [url](https://cgfcarlos.github.io/image-searcher/home) 
En caso contrario clonar el repositorio instalar las dependencias desde la consola de comandos con un `npm i` y después un `ng serve`
## Tecnologías
- Angular 11
- Angular Material
- Unsplash API
- [ngx-image-zoom](https://www.npmjs.com/package/ngx-image-zoom)

_NOTA*: Se planteó hacer manualmente el zoom de las imágenes mediante canvas gestionando su contexto y pintando la imagen en base a tamaño y escala, pero no era viable sabiendo el trabajo que conlleva y con la cantidad de librerías públicas que facilitan la integración de esa especificación_

## Estructura
### Estilo
Angular Material a partir de un `theme` customizado ver `theme.scss`

### Rutas
- `/home` Ruta por defecto que carga las imágenes más recientes, se puede consultar el detalle de una imagen y que dispone de un buscador para consultar imágenes a partir de un filtro (lazy load)
- `/user/:id` Ruta que muestra el detalle de un usuario que dispone de 3 rutas hijas 
-- `/photos` Muestra las fotos de un usuario
-- `/liked` Muestra las fotos marcadas como "gustadas" por el usuario
-- `/collections` Muestra las colecciones de fotos de un usuario

### Manejo de errores
El manejo de errores se delega en un interceptor http que controla la respuesta del API y muestra un "toast" en caso de recibir un error

### Paginación
La paginación de las imágenes se establece mediante una directiva `infinite-scroll` que permite gestionar la paginación a través del bind de un método que retorna un `Observable` para poder consultar contra el servidor las siguientes paginas
- Parámetros
-- `scrollCallback: () => ObservableInput<any>` Callback para paginar los elementos
-- `immediateCallback: boolean = false` Permite realizar la llamada al cargar la vista
-- `scrollPercent: number = 80` Controla en que parte del scroll debería hacer la invocación del callback
