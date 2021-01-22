import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private x:CrudService) { }

  ngOnInit(): void {
    this.view();
  }
ab={id:null,name:'',place:''};
news:any= Object;

view()
{
   this.x.views().subscribe(y=>this.news=y);
}
ins(news:any)
{
  this.x.inss(news).subscribe();
  this.view();
}
del(x:any)
{
  this.x.dels(x).subscribe();
  this.view();
}
}
