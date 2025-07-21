import { AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements AfterViewInit {
  @ViewChild('logo') image!: ElementRef<HTMLImageElement>;
  @ViewChild('logoPlaceholder') placeholder!: ElementRef<HTMLDivElement>;
  @ViewChild('logoContainer') logoContainer!: ElementRef<HTMLDivElement>;


  ngAfterViewInit() {
    this.addEventListeners();
  }

  addEventListeners() {
    if (this.image && this.logoContainer) {
      this.image.nativeElement.style.display = 'none';
      this.placeholder.nativeElement.style.display = 'block';
      this.logoContainer.nativeElement.addEventListener('mouseover', () => {
        this.showImage();
      });
      this.logoContainer.nativeElement.addEventListener('mouseout', () => {
        this.hideImage();
      });
    }
  }

  showImage(){
    if (this.image != null && this.placeholder != null) {
      const displayed = this.image.nativeElement.style.display === 'none';
      this.image.nativeElement.style.display = 'block';
      this.placeholder.nativeElement.style.display = 'none';
    }
  }
  hideImage(){
    if (this.image != null && this.placeholder != null) {
      const displayed = this.image.nativeElement.style.display !== 'none';
      this.image.nativeElement.style.display = 'none';
      this.placeholder.nativeElement.style.display = 'block';
    }
  }
}
