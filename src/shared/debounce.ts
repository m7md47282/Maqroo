export class Debounce {
    timer: any;
    debounce = (func: Function, timeout: number) => {
        console.log('the debouec component is called');
        
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          func()
        }, timeout);
      }
}





