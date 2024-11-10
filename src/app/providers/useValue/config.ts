import {Inject, InjectionToken} from "@angular/core";

export interface AppConfig{
    experimantalEnabled?: boolean;
}

export const appConfig: AppConfig = {
    experimantalEnabled: true,
};

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');


