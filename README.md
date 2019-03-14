# basement.studio

Este es el codigo de nuestro website

## Instalacion

1 - Instala [standard](https://standardjs.com/)
  - Si usas VSCode instala [vscode-standardjs](https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs)
  - Si usas Atom instala [linter-js-standard](https://atom.io/packages/linter-js-standard)
  - Si usas Sublime Text instala [StandardFormat](https://packagecontrol.io/packages/StandardFormat)

2 - Configura tu `settings.json` como corresponde:

```JSON
{
  "css.lint.duplicateProperties": "warning",
  "css.lint.idSelector": "warning",
  "css.lint.zeroUnits": "warning",
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.cursorBlinking": "solid",
  "editor.renderWhitespace": "all",
  "editor.minimap.showSlider": "always",
  "editor.formatOnSave": true,
  "editor.foldingStrategy": "indentation",
  "editor.fontLigatures": true,
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "eslint.packageManager": "yarn",
  "explorer.confirmDragAndDrop": false,
  "explorer.confirmDelete": false,
  "extensions.ignoreRecommendations": false,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "emmet.triggerExpansionOnTab": true,
  "files.associations": {
    "*.js": "javascriptreact"
  },
  "files.autoGuessEncoding": true,
  "files.encoding": "utf8",
  "files.trimTrailingWhitespace": true,
  "files.exclude": {
    "**/.DS_Store": true,
    "**/.git": true,
    "**/.hg": true,
    "**/.next": true,
    "**/.svn": true,
    "**/CVS": true,
    "**/node_modules": true
  },
  "git.confirmSync": false,
  "git.autofetch": true,
  "javascript.validate.enable": false,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  "npm.fetchOnlinePackageInfo": false,
  "prettier.disableLanguages": ["javascript", "javascriptreact"],
  "standard.autoFixOnSave": true,
  "telemetry.enableTelemetry": false,
  "window.restoreFullscreen": true,
  "window.zoomLevel": 0,
  "workbench.startupEditor": "newUntitledFile",
  "workbench.activityBar.visible": true,
  "workbench.editor.enablePreviewFromQuickOpen": false,
  "workbench.editor.showTabs": true,
  "workbench.fontAliasing": "auto",
  "workbench.editor.tabSizing": "shrink"
}
```

3 - Clona el repo en tu escritorio usando `git clone`

4 - Crea un branch usando `git checkout -b` (usa un nombre util para el branch)

5 - Codeá campion, codeá.

6 - Pedi code review mediante un Pull Request y mergea si esta todo piola.

7 - Anda a jugar un rato al [Windjammers](https://es.wikipedia.org/wiki/Windjammers_(video_game))
