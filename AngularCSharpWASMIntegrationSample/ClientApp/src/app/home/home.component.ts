import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public async callCSharpCode() {
    await DotNet.invokeMethodAsync('CSharpWASMProject', 'Do', "TS!");
  }
}
