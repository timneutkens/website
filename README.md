# basement.studio

This is our website's code.

## Set up

1 - Install [standard](https://standardjs.com/)
  - if you're on VSCode also install [vscode-standardjs](https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs)
  - if you're on Atom install [linter-js-standard](https://atom.io/packages/linter-js-standard)
  - if you're on Sublime Text install [StandardFormat](https://packagecontrol.io/packages/StandardFormat)
  
2 - Set your `settings.json` accordingly:

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

3 - Clone the repo to your desktop using `git clone`
4 - Create a branch using `git checkout -b`
5 - Do your thing
6 - Ask for code reviews in a pull request and merge once everything is ok!
7 - Go play some [Windjammers](https://en.wikipedia.org/wiki/Windjammers_(video_game))
