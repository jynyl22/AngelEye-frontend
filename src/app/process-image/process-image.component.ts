import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-process-image',
  templateUrl: './process-image.component.html',
  styleUrls: ['./process-image.component.css']
})
export class ProcessImageComponent {
  public preimageUrl: String = '';
  public safeImageUrl: SafeUrl = '';
  public receivedImage: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.preimageUrl = params['imageUrl'];
    })
  }

  onProcess() {
    this.receivedImage = true;
  }
}
