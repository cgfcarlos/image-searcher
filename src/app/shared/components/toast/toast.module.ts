import { NgModule, ModuleWithProviders } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatIconModule } from '@angular/material/icon';

import { ToastComponent } from './toast.component';
import { defaultToastConfig, ToastConfig, TOAST_CONFIG_TOKEN } from './toast-config';

/**
 * Module for displaying Toasts
 *
 * @export
 * @class ToastModule
 */
@NgModule({
    imports: [OverlayModule, MatIconModule],
    declarations: [ToastComponent],
    entryComponents: [ToastComponent],
})
export class ToastModule {
    /**
     * Initialices the module with a default config if none is passed
     *
     * @static
     * @param {*} [config=defaultToastConfig]
     * @return {*}  {ModuleWithProviders<ToastModule>}
     * @memberof ToastModule
     */
    public static forRoot(config: ToastConfig = defaultToastConfig): ModuleWithProviders<ToastModule> {
        return {
            ngModule: ToastModule,
            providers: [
                {
                    provide: TOAST_CONFIG_TOKEN,
                    useValue: { ...defaultToastConfig, ...config },
                },
            ],
        };
    }
}
