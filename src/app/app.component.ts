import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export class Fussballer{
  constructor(
    public Name:string,
    public Alter:number,
    public Goals:number,
    public Bild :string,
  ){}
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Matteo ⚽';
  Fussballerliste = [
    new Fussballer("Lionel Messi",37,850,"messi.webp"),
    new Fussballer ("Lamine Yamal",17,13,"lamineyamal.webp"),
    new Fussballer ("Cristiano Ronaldo",39,908,"Ronaldo.webp"),
  ];

  GewaehlterFussballer:Fussballer=this.Fussballerliste[0];
  InfosAnzeigen = false;

  onChange(event: any){
    const auswahl=event.target.value;
    console.log(auswahl);

    if(auswahl=="Bitte wählen"){
      this.InfosAnzeigen=false;
    }
    else{
      this.InfosAnzeigen=true;
      const index=this.Fussballerliste.findIndex(x=>x.Name==auswahl);
      this.GewaehlterFussballer=this.Fussballerliste[index];
    }
  }
}
