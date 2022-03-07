
let nepal = {
    //add property
    mountains: ['Everestst','Fish Tail','Annapurna'],

    //add method
    printWithDash: function(){
        setTimeout(() => console.log(this.mountains.join(" - ")),3000);
    }
};

nepal.printWithDash();