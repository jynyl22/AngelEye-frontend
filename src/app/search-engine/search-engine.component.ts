import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxFileDropEntry } from 'ngx-file-drop';

interface JSONResponse {
  pred: string;
  summary: string;
  links: string[];
}

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.css']
})
export class SearchEngineComponent {
  public files: NgxFileDropEntry[] = [];
  public file!: File;
  public imageUrl!: String;
  public showDrop: boolean = true;
  public showImage: boolean = false;

  prediction!: string;
  summary!: string;
  links!: string[];

  constructor(private http: HttpClient, private router: Router){}

  public dropped(files: NgxFileDropEntry[]): void {
    this.files = files;
    for (const droppedFile of files) {
 
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.file=file;
          const reader = new FileReader();
          reader.onload = () => { 
            this.imageUrl = reader.result as string;
          }
          reader.readAsDataURL(file)
        });
      } 
    }
    this.showDrop = false;
    this.showImage = true;

    const formData = new FormData();
    formData.append('file', this.file, this.file.name);
    this.http.post('http://localhost:8000/uploadfile', formData)
      .subscribe(response => {
    });
  }
 
  public fileOver(event: any){
    console.log(event);
  }
 
  public fileLeave(event: any){
    console.log(event);
  }
  public onCancel() {
    this.showDrop = true;
    this.showImage = false;
  }

  public onGenerate() {
    this.http.get<JSONResponse>('http://localhost:8000/search_desc_GET')
    .subscribe(data => {
      this.prediction = data.pred;
      this.summary = data.summary;
      this.links = data.links;
    })
  }
}
