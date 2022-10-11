import { Component, OnInit } from '@angular/core';
import { RequestService } from './services/request/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  name: string = "";
  order: string = "";

  constructor(private requestService: RequestService){}

  ngOnInit(){
    this.search()
  }

  search(){
    let btnSearch = document.getElementById("btnSearch") as HTMLInputElement;
    let search = document.getElementById("search") as HTMLInputElement;

    btnSearch.addEventListener("click", () => {
      this.requestService.getPokemon(search.value).subscribe({
        next: (response: any) => {
          this.name = response.name
        },
        error: (error: any) => {
          alert("Error")
        }
      });
    })
  }
}
