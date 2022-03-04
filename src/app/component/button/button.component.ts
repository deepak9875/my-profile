import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() title: any;
  @Input() formname: any;
  @Input() typebtn: any;
 

  

  constructor() {}
   ngOnInit(): void {}
  
  
  
   @Input()
  primary = false;


// this class give background color 
  @Input() color: 'greenbtn' |'gold-btn' | 'btn-disable'  = 'greenbtn' ;
 


  @Input() task: any;



 /**
   * What background color to use
   */
 @Input()
  backgroundColor?: string;

  @Input()
  textColor?: string;


 /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';


   /**
   * How large should the button be?
   */
  @Input()
  size: 'extrasmall' | 'small' | 'medium' | 'large' = 'medium';



  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();


  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTitle= new EventEmitter<Event>();

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTitle= new EventEmitter<Event>();


  public get classes(): string[] {
    const mode = this.primary ? 'true' : 'false';
    return [` ${this.color}`,`${this.size}`,mode];
  }
  
}
