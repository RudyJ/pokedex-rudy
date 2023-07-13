import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class PokemonApiService {
    constructor() { }
    getAllPokemons() {
        return [];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: PokemonApiService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: PokemonApiService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: PokemonApiService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class PokemonApiComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: PokemonApiComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.3", type: PokemonApiComponent, selector: "lib-pokemon-api", ngImport: i0, template: `
    <p>
      pokemon-api works!
    </p>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: PokemonApiComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-pokemon-api', template: `
    <p>
      pokemon-api works!
    </p>
  ` }]
        }] });

class PokemonApiModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: PokemonApiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.3", ngImport: i0, type: PokemonApiModule, declarations: [PokemonApiComponent], exports: [PokemonApiComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: PokemonApiModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: PokemonApiModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PokemonApiComponent
                    ],
                    imports: [],
                    exports: [
                        PokemonApiComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of pokemon-api
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PokemonApiComponent, PokemonApiModule, PokemonApiService };
//# sourceMappingURL=pokemon-api.mjs.map
