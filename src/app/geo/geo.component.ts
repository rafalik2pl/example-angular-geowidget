import { Component, OnDestroy, OnInit } from '@angular/core';

declare const easyPack: any;

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.scss']
})
export class GeoComponent implements OnInit, OnDestroy {

  constructor() {
    this._loadScript(() => this.initEasyPack(), () => console.log('callback geo scripts fail'));
    this._loadStylesheet(() => console.log('callback geo styles success'), () => console.log('callback geo styles fail'));
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.destroyGeoWidgetModal();
  }

  initEasyPack(): void {
    easyPack.init({
      defaultLocale: 'pl',
      instance: 'pl',
      mapType: 'osm',
      searchType: 'osm',
      points: {
        types: ['parcel_locker_only']
      },
      map: {
        initialTypes: ['parcel_locker_only'],
      }
    });
  }

  destroyGeoWidgetModal(): void {
    const widgetElement = document.getElementById('widget-modal');
    if (widgetElement?.parentNode?.parentNode) {
      widgetElement.parentNode.parentNode.removeChild(widgetElement.parentNode);
      console.log('destroyed');
    }
  }

  clickOpenModalMap(): void {
    easyPack.modalMap(
      (point: any, modal: any) => {
        modal.closeModal();
        console.log(point);
      },
      { width: 700, height: 800 }
    );

    const element = document.getElementById('widget-modal__map');
    if (element && element.classList) {
      element.classList.add('mobile');
    }
  }

  private _loadScript(callback: () => void, errorCallback: () => void): void {
    let scriptUrl = 'https://geowidget.easypack24.net/js/sdk-for-javascript.js';
    if (this._isScriptLoaded(scriptUrl)) { return; }
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.onload = callback;
    script.onerror = errorCallback;
    document.body.appendChild(script);
  }

  private _loadStylesheet(callback: () => void, errorCallback: () => void): void {
    let stylesheetUrl = 'https://geowidget.easypack24.net/css/easypack.css';
    if (this._isStylesheetLoaded(stylesheetUrl)) { return; }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = stylesheetUrl;
    link.onload = callback;
    link.onerror = errorCallback;
    document.head.appendChild(link);
  }

  private _isScriptLoaded(scriptUrl: string): boolean {
    const scripts = document.scripts;
    for (let i = 0; i < scripts.length; i++) {
      if (scripts[i].src === scriptUrl) {
        return true;
      }
    }
    return false;
  }

  private _isStylesheetLoaded(stylesheetUrl: string): boolean {
    const stylesheets = Array.from(document.styleSheets) as CSSStyleSheet[];

    return stylesheets.some((stylesheet) => stylesheet.href === stylesheetUrl);
  }
}
