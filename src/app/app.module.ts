import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './view/home/home.component';
import {StateComponent} from './view/home/state/state.component';
import {ButtonsComponent} from './view/home/buttons/buttons.component';
import {FormComponent} from './view/home/form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CheckboxesComponent} from './view/home/checkboxes/checkboxes.component';
import {StoreModule} from '@ngrx/store';

import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

import * as fromButtons from './view/home/buttons/ngrx/buttons.reducer';
import * as fromCheckboxes from './view/home/checkboxes/ngrx/checkboxes.reducer';
import * as fromForm from './view/home/form/ngrx/form.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    StateComponent,
    ButtonsComponent,
    CheckboxesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      buttons: fromButtons.reducer,
      checkboxes: fromCheckboxes.reducer,
      form: fromForm.reducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 100,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
