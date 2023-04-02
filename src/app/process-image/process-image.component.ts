import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

interface JSONResponse {
  pred: string;
}

@Component({
  selector: 'app-process-image',
  templateUrl: './process-image.component.html',
  styleUrls: ['./process-image.component.css']
})

export class ProcessImageComponent {
  public preimageUrl: String = '';
  public safeImageUrl: SafeUrl = '';
  public receivedImage: boolean = false;
  public prediction: String = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.preimageUrl = params['imageUrl'];
    })
  }

  onProcess() {
    this.receivedImage = true;
    this.http.get<JSONResponse>('http://localhost:8000/predict').subscribe((data) => {
      this.prediction = data.pred;
    });

    console.log(this.prediction);
  }
}
