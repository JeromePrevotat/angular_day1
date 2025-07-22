import { Component, ElementRef, ViewChild} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent{
  @ViewChild('logo') image!: ElementRef<HTMLImageElement>;
  @ViewChild('logoPlaceholder') placeholder!: ElementRef<HTMLDivElement>;
  @ViewChild('logoContainer') logoContainer!: ElementRef<HTMLDivElement>;

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
