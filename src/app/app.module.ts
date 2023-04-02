import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgxFileDropModule } from 'ngx-file-drop';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { ProcessImageComponent } from './process-image/process-image.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'upload', component: UploadImageComponent },
  { path: 'process', component: ProcessImageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'search', component: SearchEngineComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UploadImageComponent,
    ProcessImageComponent,
    AboutPageComponent,
    SearchEngineComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    NgxFileDropModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
