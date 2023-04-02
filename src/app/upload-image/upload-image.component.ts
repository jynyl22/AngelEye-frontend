import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { HttpClient } from '@angular/common/http';
import { style, transition, trigger, animate } from '@angular/animations';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css'],
  animations: [
    trigger('fadeOut', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.5s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class UploadImageComponent {
  public files: NgxFileDropEntry[] = [];
  public file!: File;
  public imageUrl!: String;
  public showDrop: boolean = true;
  public showImage: boolean = false;
 
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

  public onSubmit() {
    const formData = new FormData();
    formData.append('file', this.file, this.file.name);
    this.http.post('http://localhost:8000/uploadfile', formData)
      .subscribe(response => {
    });
    this.router.navigate(['/process'], { queryParams: { imageUrl: this.imageUrl }});
  }
}
