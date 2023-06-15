import { AbstractControl, ValidatorFn } from "@angular/forms";

export class Validation{
    static match(password:string,confirmpassword:string):ValidatorFn{
        return (control:AbstractControl) =>{
            const pwd=control.get(password);
            const cfpwd=control.get(confirmpassword);

            if(pwd?.value!==cfpwd?.value){
                control.get(confirmpassword)?.setErrors({matching:true});
                return {matching:true};
            }
            else{
                return null;
            }
        }
    }

    
}