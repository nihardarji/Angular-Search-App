import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list : string[] = []
  listOfName : string[] = []
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getList()
  }
  
  getList() {
    this.http.get('/1005_names.txt', { responseType: `text`}).subscribe( response => {
      const res = response
      this.list = res.split("\n")
      this.listOfName = res.split("\n")
    })
  }
  onChangeEvent(event: any){
    const myRe = new RegExp(`${event.target.value.toLowerCase()}`)
    this.list = this.listOfName.filter(a => myRe.exec(a.toLowerCase()))
  }

}
