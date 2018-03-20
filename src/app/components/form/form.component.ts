import { Component, OnInit, Input ,Output,EventEmitter} from '@angular/core';
import { QuoteItems } from '../../quote-items';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
 text:string;
 
  newQuote= new QuoteItems('','','',0);
  @Output() sendQuote = new EventEmitter<QuoteItems>();




  constructor() { }

  ngOnInit() {
  }

  formSubmit(){
    console.log(this.newQuote)
   this.sendQuote.emit(this.newQuote)
  }

   
  
   

  
   }
    


