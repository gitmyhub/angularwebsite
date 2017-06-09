import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {appRouterProviders} from './app.routes';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
