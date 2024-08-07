import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  translate: TranslateService = inject(TranslateService);
  mainContent = true;
  // imgSrc: string = '/img/burger.png';
  show: boolean = false;

  changeShowStatus() {
    this.show = !this.show;
  }

  closeDialog() {
    this.show = false;
  }

  translateText(lang: string) {
    this.translate.use(lang);
  }

  scrollTo(id: string) {
    window.location.hash = id;
    console.log("clicked")
  }
}
