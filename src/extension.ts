'use strict';
import * as vscode from 'vscode';
import { ReminderView } from './reminderView';
import { Scheduler } from './scheduler';

export function activate(context: vscode.ExtensionContext) {
    const scheduler = new Scheduler(context);
    scheduler.start();

    let imageNameArray = Array(1).fill(null).map((_, i) => `${i}.gif`);

    context.subscriptions.push(vscode.commands.registerCommand('xz.setReminderView', () => {
            ReminderView.show(context,imageNameArray[Math.floor(Math.random()*imageNameArray.length)]);
    }));
    
    context.subscriptions.push(vscode.commands.registerCommand('xz.showReminderView', () => {
        ReminderView.show(context);
    }));
}

export function deactivate() {
}