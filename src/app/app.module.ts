import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgxFileDropModule } from 'ngx-file-drop';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { ProcessImageComponent } from './process-image/process-image.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'upload', component: UploadImageComponent },
  { path: 'process', component: ProcessImageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'search', component: SearchEngineComponent },
  { path: 'quiz', component: QuizPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UploadImageComponent,
    ProcessImageComponent,
    AboutPageComponent,
    SearchEngineComponent,
    SearchBarComponent,
    QuizPageComponent
  ],
  imports: [
    BrowserModule,
    NgxFileDropModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
