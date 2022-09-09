import { Component } from "@angular/core";
import { Dados } from "./models/dados";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Página do Montanha";
  dados = new Dados();

  incrementaNumero() {
    this.dados.numero++;
    console.log(this.dados.numero);
  }
}
