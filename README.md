# eslint-config-adalab [![Build Status](https://travis-ci.org/Adalab/eslint-config-adalab.svg?branch=master)](https://travis-ci.org/Adalab/eslint-config-adalab)

> Configuración de [ESLint](http://eslint.org) usada por las participantes de [AdaLab](http://adalab.es/)

Esta configuración solo presta atención a fallos comunes, posibles errores y buenas prácticas, dejando al usuario escoger el estilo que prefiera para su código.


## Instalación

```
$ npm install --save-dev eslint eslint-plugin-promise eslint-config-adalab
```


## Uso

Una vez hayas instalado el paquete `eslint-config-adalab` en tu proyecto, puedes usarlo añadiendolo a la propiedad [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) de tu [configuración ESLint](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "adalab",
  "rules": {
    // Reglas adicionales que sobrescribirán a las de `eslint-config-adalab`...
  }
}
```

### Usar la configuración de `adalab` junto con `eslint:recommended`

Hay algunas reglas de las del [conjunto de `eslint:recommended`](http://eslint.org/docs/rules/) que `eslint-config-adalab` no configura por defecto y quizás desees activarlas en tu proyecto.

Para activar esta configuración en conjunto con las recomendadas por ESLint, añade ambas a `extend` y asegurate de que `adalab` está situada al final:

```js
{
  "extends": [
    "eslint:recommended",
    "adalab"
  ],
  "rules": {
    // Reglas adicionales que sobrescribirán a las de las configuraciones dentro de `extend`...
  }
}
```

Para ver que reglas contiene la configuración de `adalab`, puedes visitar el [código fuente de `index.js`](https://github.com/adalab/eslint-config-adalab/blob/master/index.js) de este repositorio.


## Licencia

[Unlicense](https://github.com/google/eslint-config-google/blob/master/LICENSE)
