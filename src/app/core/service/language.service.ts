import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

export type Language = 'pt' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly storageKey = 'language';
  private readonly availableLangs: Language[] = ['pt', 'en'];

  private languageSubject = new BehaviorSubject<Language>(this.getInitialLanguage());
  public language$ = this.languageSubject.asObservable();

  constructor(private translate: TranslateService) {
    const lang = this.languageSubject.value;
    this.translate.addLangs(this.availableLangs);
    this.translate.setDefaultLang('pt');
    this.translate.use(lang);
  }

  private getInitialLanguage(): Language {
    const saved = localStorage.getItem(this.storageKey) as Language | null;
    return this.availableLangs.includes(saved as Language) ? saved! : 'pt';
  }

  public setLanguage(lang: Language): void {
    if (!this.availableLangs.includes(lang)) return;
    localStorage.setItem(this.storageKey, lang);
    this.translate.use(lang);
    this.languageSubject.next(lang);
  }

  public get currentLanguage(): Language {
    return this.languageSubject.value;
  }
}
