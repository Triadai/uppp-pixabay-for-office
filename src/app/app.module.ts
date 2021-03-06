import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './common';
import { AppComponent } from './app.component';
import { EffectsModule } from "@ngrx/effects";
import { ImageEffects } from "./common/images/images.effects";
import { ImagesService } from "./common/images/images.service";
import { ImageSearchComponent } from './image-search/image-search.component';
import { environment } from '../environments/environment';
import { HttpModule } from "@angular/http";
import { FooterComponent } from './footer/footer.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ImageSearchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HttpModule,
    NgbModule.forRoot(),
    EffectsModule.forRoot([ImageEffects])
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    ImagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }