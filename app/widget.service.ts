import { Injectable } from 'angular2/core';

import { WIDGETS } from './mock-widgets';

@Injectable()
export class WidgetService {
    getWidgets() {
        return Promise.resolve(WIDGETS);
    }
}