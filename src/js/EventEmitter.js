class EventEmitter {
    
        constructor() {
            this.events = {};
        }
    
        on(type, fn) {       
            if(!type || !fn) return;
    
            this.events[type] = this.events[type] || [];
            this.events[type].push(fn);   
        }
    
        emit(type, data) {
            
            var fns = this.events[type];
        
            if(!fns || !fns.length) return;
        
            for(var i = 0; i < fns.length; i++) {
                fns[i](data);
            }
            
        };
    }

    export default EventEmitter;