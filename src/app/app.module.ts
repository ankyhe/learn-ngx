import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './post/store/post.reducer';
import { PostEffects } from './post/store/post.effect';
import { PostModule } from './post/post.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PostModule,
    StoreModule.forRoot({rootState: reducers}),
    EffectsModule.forRoot([PostEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
