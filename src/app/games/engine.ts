export class Engine {
    public bank = 10000;
    public bet = 1;
    public result: number;

    public spin():void {
      var number = Math.floor(Math.random() * 36);
  
      if ( number == 0 ) {
        console.log("number: "+number);
      } 
      else if ( number > 18 ) {
        console.log("number: "+number);
      }
      else {
        console.log("number: "+number);
      }
      this.result = number;
    }

    public showResult():void{
        console.log(this.result);
    }
    
}