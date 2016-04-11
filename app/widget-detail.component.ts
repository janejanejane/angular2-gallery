import   { Component, Input } from 'angular2/core';
import { Widget } from './widget';

@Component({
    selector: 'widget-detail',
    template: `
        <div *ngIf="widget">
            <h2>{{widget.name}} details!</h2>
            <div><label>id: </label>{{widget.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="widget.name" placeholder="name"/>
            </div>
        </div>
    `
})

export class WidgetDetailComponent { 
    @Input() widget: Widget;
}