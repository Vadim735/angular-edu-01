import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { MyPipePipe } from './my-pipe.pipe';
import { MyDerictiveDirective } from './my-derictive.directive';
import { FooterComponent } from './footer/footer.component';
import { GameComponent } from './game/game.component';
import { BtnactionComponent } from './btnaction/btnaction.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyPipePipe,
    MyDerictiveDirective,
    FooterComponent,
    GameComponent,
    BtnactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
