export default {"g5z62":"hill","1cjag4":"12 hours","xsbfmc7":"Automatic internationalization plug-in","jcve2":"test","g84msj7":"moonlight test","6a2b7r7":"Test purpose, permissions","e3j62":"introduce","9xgbc210":"Vite automatic translation plug-in based on Google Translate API, advantage - no need to change the source code, one-click translation","hr5e2":"support","wxbiabf":"Supported languages: [langFile]","k38g2":"Features","5r7wejo":"No impact on source code (i18n in source code no longer needs to be replaced).","utkm5y5":"One-click translation.","3cygkr7":"and other types of files","e5xl2":"use","gbj02":"Install","pewx2":"Configuration","esxa2":"parameter","lnjk2":"type","h2w42":"required","nxrsg3":"default value","hrlt2":"describe","p53n5re":"Default function for switching languages ​​after plug-in conversion","ne3sy8b":"Mark function calls that will not be translated","f3598ra":"Mark strings that will not be translated","m6u8yra":"Do not translate files in the specified directory","6pfhiu9":"Translate files in the specified directory","ln967ca":"Translation configuration file generation location","vdo0cwr":"The location of the generated file after packaging, such as ./dist/assets","rrgh3fd":"Used to inject translation configuration into packaging files","ye3wg8y":"The main file name of the generated file after packaging, such as index.xxx. The default is index.","k486tve":"Distinguish translation configurations between current projects online","z0yx8lh":"Source language (translations into other languages ​​based on this language)","ahrg1gy":"Target language (the language type that the original language will be translated into, accepts an array, supports multiple languages)","krdm6ai":"Support language type ([langFile])","z4q27fd":"Whether to package translation configuration into the main package","w0fi2r5":"why needed","yzcto221":"After executing the plug-in in the vite environment, only the translation configuration file is generated. If you build it directly, the project will generate translation configuration files. However, the translation configuration files are not immediately packaged into the main package, and you may need to package them again.","jypfzs10":"Therefore, the buildToDist option is provided, which will actively add the","7nexml9":"Translation configuration files are packaged into","fxk14dn":"Main package, the defect is that your package file may have two translation configuration files","iuyotj4":"Configuration demo","c9npl315":"import './lang' // The lang file must be imported in the first line of the project's entry file","o63r6sa":"Demo configuration lang file","eiiemg4":"Demo introduction","34ruojh0":"import CN from '../../[your globalPath]/[your originLangKey]/index.mjs'\n// Here we only demonstrate the case where the length of targetLangList is zero. If there are multiple languages, continue to add them.\nimport EN from '../../[your globalPath]/[your targetLangList[0]]/index.mjs'\nconst langMap = {\n  [your originLangKey]: window?.[your namespace]?.[your originLangKey] || CN,\n  [your targetLangList[0]]: window?.[your namespace]?.[your targetLangList[0]] || EN\n}\n// window.localStorage.getItem('lang') Storing the current language type\nconst lang = window.localStorage.getItem('lang') || [your originLangKey](defualt lang),\nwindow.[your translateKey].locale(langMap[lang], [your namespace])","dure2":"Chinese","mtva2":"English","qe9q2":"Korean","hw022":"Japanese","jls24o6":"support multi-languauge"}