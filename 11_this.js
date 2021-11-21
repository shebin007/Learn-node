
this.id = 'exports';


const testerObj = {

    func1 : function() {
        console.log('funciton1',this);
    },

    func2: () => {
        console.log('function2 ',this);
    }

}

testerObj.func1();

testerObj.func2();