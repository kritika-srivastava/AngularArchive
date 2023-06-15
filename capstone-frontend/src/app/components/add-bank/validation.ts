import { AbstractControl, ValidatorFn } from "@angular/forms";

export class Validation{
    static match(accountNo:string,reaccountNo:string):ValidatorFn{
        return (control:AbstractControl) =>{
            const accNo=control.get(accountNo.toString());
            const reaccNo=control.get(reaccountNo.toString());

            if(accNo?.value!==reaccNo?.value && reaccNo){
                control.get(reaccNo.toString())?.setErrors({matching:true});
                return {matching:true};
            }
            else{
                return null;
            }
        }
    }

    
}
