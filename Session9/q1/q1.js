class Observer{
    constructor(){
      this.observers=[];
    }
    subscribe(observer){
      this.observers.push(observer);
      console.log(observer,"has been subscribed");
    }
    unsubscribe(observer){
      let index = this.observers.indexOf(observer);
      if(index>-1){
        this.observers.splice(index,1);
        console.log(observer,"has been unsubscribed");
      }
    }
    notifyAll(){
      for(let o of this.observers){
        console.log(o,"has been notified");
      }
    }
  }
  
  let observer = new Observer();
  observer.subscribe('observer1');
  observer.subscribe('observer2');
  observer.subscribe('observer3');
  observer.unsubscribe('observer1');
  observer.notifyAll();