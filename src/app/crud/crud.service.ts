import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) {}
    views()
    {
      return this.http.get('http://localhost:3000/news');
    }
    inss(news:any)
    {
      return this.http.post('http://localhost:3000/news',news);
    }
    dels(news:any)
    {
      return this.http.delete('http://localhost:3000/news/' + news.id);
    }
}
