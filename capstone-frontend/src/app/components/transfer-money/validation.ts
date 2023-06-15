import { AbstractControl, ValidatorFn } from "@angular/forms";


export function match(balance: string, amount: string): ValidatorFn {
    return (control: AbstractControl) => {
        const a1 = control.get(balance);
        const a2 = control.get(amount);

        if (a1?.value! < a2?.value) {
            control.get(amount)?.setErrors({ matching: true });
            return { matching: true };
        }
        else {
            return null;
        }
    }
}

