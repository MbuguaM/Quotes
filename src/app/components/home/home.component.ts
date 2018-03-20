import { Component, OnInit,Input } from '@angular/core';
import { QuoteItems } from '../../quote-items';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 @Input() quotes:QuoteItems[];
 @Input() quote:QuoteItems;



  
constructor() {
this.quotes = [
new QuoteItems("Death is not the greatest loss in life. The greatest loss is what dies inside us while we live", "Norman Cousins","Munga Mbugua",0),
new QuoteItems("The greatest gift of life is friendship, and I have received it. Hubert","H. Humphrey","Munga Mbugua",0),
new QuoteItems("Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.", "Buddha","Munga Mbugua",0),
new QuoteItems( "Surprise is the greatest gift which life can grant us.", "Boris Pasternak","Munga Mbugua",0),
]


 }voteUp(): boolean {
  this.quote.voteUp();
  return false;
}

voteDown(): boolean{
  this.quote.voteDown();
  return false;}
  submitForm(quote){
    this.quotes.push(quote);

     
  }
  ngOnInit() {
  }
    
}
