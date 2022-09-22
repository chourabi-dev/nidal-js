class Voiture{


    constructor(puissance,mark,model,matricul){
        this.puissance = puissance;
        this.mark = mark;
        this.model = model;
        this.matricul = matricul;
        
    }


    getVoitureCaracterestics(){

        let object = {
            "puissance": this.puissance,
            "mark": this.mark,
            "model": this.model,
            "matricul": this.matricul,
            
        }

        return object
    }


    changeOIL(){
        let promise = new Promise( (  success,failure  )=>{

            setTimeout(() => {
                
                success( { success:true, message:"Oil changed" } );

            }, 3000);

        });

        return promise;
    }



    changeSPARKS(){
        let promise = new Promise( (  success,failure  )=>{

            setTimeout(() => {
                
                success( { success:true, message:"sparks changed" } );

            }, 5000);

        });

        return promise;
    }



}


/************************************************* */


var voiture = new Voiture(5,"BMW","530","100TN200");


var res =  voiture.getVoitureCaracterestics();

console.log("START THE PROGRAM");

console.log(res);


// vidange time ?




async function  startWorkOnCar(){
    /**
     *     voiture.changeOIL().then( (res)=>{
  
        console.log(res); // 3


        voiture.changeSPARKS().then( (res)=>{
  
            console.log(res); // 8
            
        } ).catch();


        
    } ).catch();
     */


    const  oilChanged = await voiture.changeOIL();

    const sparksChanged = await voiture.changeSPARKS();


    console.log(sparksChanged,oilChanged);

 
}




startWorkOnCar();