export default {"g5z62":"丘","1cjag4":"12時間","xsbfmc7":"自動国際化プラグイン","g84msj7":"月光テスト","6a2b7r7":"テストの目的、権限","7clqa33yy":"<h1>vite-plugin-auto-i18n</h1><h2>概要</h2><p>Google Translate API に基づく Vite 自動翻訳プラグイン、利点 - ソース コードを変更する必要がなく、ワンクリック翻訳</p>< h3>サポート</h3><p><em><strong>Vue2、Vue3、React</strong></em></p><p><strong>サポートされる言語: [langFile ]</strong>< /p><h2>機能</h2><ul><li><strong>ソース コードには影響しません (ソース コード内の i18n を置き換える必要はなくなりました)。 </strong></li><li><strong>ワンクリック翻訳。</strong></li><li><strong>サポート</strong> <code>js、ts、jsx、tsx</ code > <strong>およびその他の種類のファイル</strong></li></ul><h2>使用</h2><h3>インストール</h3><pre><code class=\"undependentjs\">npm私は vite -plugin-auto-i18n -D # 糸を追加 vite-plugin-auto-i18n -D\n    </code></pre><h3>設定</h3><table><thead><tr><th align=\"center\">パラメータ</th><th align=\"center\">タイプ</th ><th align=\"center\">必須</th><th align=\"center\">デフォルト値</th><th align=\"center\">説明</th></tr></thead> < tbody><tr><td align=\"center\">translateKey</td><td align=\"center\">文字列</td><td align=\"center\">❌</td><td align=\" center \"><code>$t</code></td><td align=\"center\">プラグイン変換後の言語切り替えのデフォルト関数</td></tr><tr><td align= \"center\" >excludedCall</td><td align=\"center\">string[]</td><td align=\"center\">❌</td><td align=\"center\"><code>[\" $i8n\" , \"require\", \"$$i8n\", \"console.log\", \"$t\"]</code></td><td align=\"center\">翻訳されない呼び出し関数をマークします< /td>< /tr><tr><td align=\"center\">excludedPattern</td><td align=\"center\">RegExp[]</td><td align=\"center\">❌</td ><td align=\"center\"><code>[/\\.\\w+$/]</code></td><td align=\"center\">翻訳されない文字列をマークします</td></ tr><tr ><td align=\"center\">excludedPath</td><td align=\"center\">RegExp[]</td><td align=\"center\">❌</td><td align= \"center\"> <code>[]</code></td><td align=\"center\">指定されたディレクトリ内のファイルを翻訳しません</td></tr><tr><td align=\"center \">includePath</td ><td align=\"center\">RegExp[]</td><td align=\"center\">❌</td><td align=\"center\"><code>[/src\\ //]</code ></td><td align=\"center\">指定されたディレクトリ内のファイルを翻訳します</td></tr><tr><td align=\"center\">globalPath</td>< td align=\"center\"> 文字列</td><td align=\"center\">❌</td><td align=\"center\"><code>./lang</code></td><td align =\"center\">翻訳設定 ファイル生成場所</td></tr><tr><td align=\"center\">distPath</td><td align=\"center\">文字列</td><td align =\"center\">✅< /td><td align=\"center\"><code>''</code></td><td align=\"center\">パッケージ化後に生成されるファイルの場所。 ./dist/assets<br> (<code >パッケージ化されたファイルに翻訳設定を挿入するために使用されます</code>)</td></tr><tr><td align=\"center\">distKey</td>< td align=\"center\">文字列</td ><td align=\"center\">✅</td><td align=\"center\"><code>''</code></td><td align= \"center\">パッケージ化後に生成されるファイルのメイン ファイル 名前 (index.xxx など)、デフォルトはindex<br> (<code>パッケージ化されたファイルに翻訳構成を挿入するために使用されます</code>)</td> </tr><tr><td align=\"center\">名前空間</td><td align=\"center\">文字列</td><td align=\"center\">✅</td><td align= \"center\"><code>\"</code></td> <td align=\"center\">オンラインで現在のプロジェクト間の翻訳設定を区別する</td></tr><tr><td align=\"center\" >originLang</td><td align=\"center\">文字列 </td><td align=\"center\">❌</td><td align=\"center\"><code>'zh-cn'</ code></td><td align=\"center\">ソース言語 (この言語に基づいて他の言語に翻訳されます)</td></tr><tr><td align=\"center\">targetLangList</ td><td align=\"center\">string[]</td>< td align=\"center\">❌</td><td align=\"center\"><code>['en']</code> </td><td align=\"center\">ターゲット言語 (元の言語は翻訳先の言語タイプ、配列を受け入れ、複数の言語をサポートします)<br>言語タイプ ([langFile]) をサポートします</td> </tr><tr><td align=\"center\">buildToDist</td ><td align=\"center\">ブール値</td><td align=\"center\">❌</td><td align= \"center\"><code>false</code></td><td align =\"center\">翻訳設定をメイン パッケージにパッケージ化するかどうか</td></tr></tbody></table> <p><strong>buildToDist</strong> が必要な理由は何ですか?</p><p ><code>vite 環境でプラグインを実行すると、変換設定ファイルのみが生成されます。直接ビルドすると、プロジェクトによって変換構成ファイルが生成されます。ただし、変換構成ファイルはメイン パッケージにすぐにはパッケージ化されないため、再度パッケージ化する必要がある場合があります。 </code></p><p><code>したがって、buildToDist オプションが提供されています。変換構成ファイルを作成するときに、</code> 変換構成ファイルが <code>main パッケージにアクティブにパッケージ化されます。欠陥は、パッケージ ファイルに 2 つの変換設定ファイルが含まれている可能性があることです。</code></p><h3>設定のデモンストレーション</h3><pre><code class=\"undefinejs\">「../vitePluginAutoI18n/」から vitePluginAutoI18n をインポートします。ソース/インデックス \";\n'@vitejs/plugin-vue' から createVuePlugin をインポートします。\nconst vuePlugin = createVuePlugin({ include: [/\\.vue$/] })\nデフォルトのdefineConfigをエクスポート({\n  プラグイン: [\n    vueプラグイン、\n    vitePluginAutoI18n({\n      オプション： {\n        グローバルパス: './lang',\n        名前空間: 'lang'、\n        distPath: './dist/assets',\n        distKey: 'インデックス'\n      }\n    })\n  】\n});\n    </code></pre><h3>main.js</h3><pre><code class=\"undependentjs\">import './lang' // lang ファイルはプロジェクトの最初の行に導入する必要がありますエントリーファイル\n    </code></pre><h3>lang ファイル</h3><h4>デモ設定の lang ファイル</h4><pre><code class=\"undependentjs\">import '../../lang/index '\n'../../lang/en/index.mjs' から EN をインポート\n「../../lang/zh-cn/index.mjs」から CN をインポートします\nconst langMap = {\n  en: window?.lang?.en || JP、\n  zhcn: window?.lang?.zhcn || CN\n}\nconst lang = window.localStorage.getItem('lang') || 'zhcn'\nwindow.$t.locale(langMap[lang], 'lang')\n    </code></pre><h4>デモの紹介</h4><pre><code class=\"undependentjs\">'../../[your globalPath]/[youroriginLangKey]/index から CN をインポートします。 mjs\n// ここでは targetLangList の長さが 0 の場合のみを示しますが、複数の言語がある場合は続けて追加してください。\n'../../[your globalPath]/[your targetLangList[0]]/index.mjs' から EN をインポートします\nconst langMap = {\n  [あなたのoriginLangKey]: window?.[あなたの名前空間]?.[あなたのoriginLangKey] || CN,\n  [あなたの targetLangList[0]]: window?.[あなたの名前空間]?.[あなたの targetLangList[0]] || JP\n}\n// window.localStorage.getItem('lang') 現在の言語タイプを保存します\nconst lang = window.localStorage.getItem('lang') || [あなたのoriginLangKey](default lang),\nwindow.[あなたのtranslateKey].locale(langMap[lang], [あなたの名前空間])\n    </code></pre>"}