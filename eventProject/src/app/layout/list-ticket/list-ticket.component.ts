import { Component, OnInit } from '@angular/core';
import { Tickets } from '../../models/tickets';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrl: './list-ticket.component.css'
})
export class ListTicketComponent implements OnInit {
  title: string;
  tickets: Array<Tickets>;
    constructor() {
    
  }

  ngOnInit(): void{
    this.title="Hello Amine"
    this.tickets=[
      {id:1, price:50, eventId:1, userId:1, date:new Date(), validated:true, description:"Ticket VIP"}, 
    ];
  }

}
