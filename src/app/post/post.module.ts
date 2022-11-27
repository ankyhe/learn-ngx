import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostComponent } from './post.component';
import { PostEffects } from './store/post.effect';

@NgModule({
    imports: [
        CommonModule
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