import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-nav',
  templateUrl: './language-nav.component.html',
  styleUrls: ['./language-nav.component.css']
})
export class LanguageNavComponent implements OnInit {

  constructor(public translate: TranslateService) {
    //Set ngx translate
    translate.addLangs(['en', 'slo']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
  }

  //Change language on click
  onLangChange(lang: string){
    this.translate.use(lang)
  }
}
