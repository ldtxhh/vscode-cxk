'use strict';
import * as vscode from 'vscode';
import * as path from 'path';

export class ReminderView {
    private static panel: vscode.WebviewPanel | undefined;

    public static show(context: vscode.ExtensionContext, imageName='0.gif') {
        if (this.panel) {
            this.panel.reveal();
        } else {
            this.panel = vscode.window.createWebviewPanel("xz", "肖战", vscode.ViewColumn.Two, {
                enableScripts: true,
                retainContextWhenHidden: true,
            });
            const imagePath = vscode.Uri.file(path.join(context.extensionPath, 'images', imageName))
                .with({ scheme: 'vscode-resource' });

            this.panel.webview.html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>肖战</title>
</head>
<body>
    <div><h1>小姐姐~ 代码写久了，该休息啦~ </h1></div>
    <div><img src="${imagePath}"></div>
</body>
</html>`;

            this.panel.onDidDispose(() => {
                this.panel = undefined;
            });
        }
    }
}