import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { PostComponent } from './post.component';
import { postFeatureKey, postReducer } from './store/post.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(postFeatureKey, postReducer)
    ],
    declarations: [
        PostComponent
    ],
    exports: [
        PostComponent
    ]
})
export class PostModule {
}