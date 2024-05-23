import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Premium } from '../../../models/premiumModel';
import { PaymentService } from '../../../services/payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent {
  premiumData: Premium[] = [];
  paymentForm: FormGroup;
  paymentSuccessful: boolean = false;
  paymentMade: boolean = false;
  successMsg = 'Payment Successful';
  selectedPlan: any;

  // Defining plans
  plans = [
    { value: 'mini_plan', name: 'Mini - ₹7 for 1 day', amount: '7' },
    { value: 'individual_plan', name: 'Individual Plan - ₹119 for 2 months', amount: '119' },
    { value: 'student_plan', name: 'Student - ₹59 for 2 months', amount: '59' },
    { value: 'family_plan', name: 'Family - ₹179 for 2 months', amount: '179' },
  ];

  // Form creation and assigning validations
  constructor(private paymentService: PaymentService, private router: Router) {
    this.paymentForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNo: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      cardNo: new FormControl('', [Validators.required, this.cardValidation()]),
      expDate: new FormControl('', [Validators.required, this.validateExpDate]),
      cvv: new FormControl('', [Validators.required, this.cvvValidator(), this.alphaNumericValidator]),
      amount: new FormControl('', [Validators.pattern('^([1-9][0-9]{0,2}|0)(\\.[0-9]{1,2})?$')]),
      selectedPlan: new FormControl('', [Validators.required]),
    });
  }

  // Code to Premium Plans - Amounts
  selectPlan(event: any) {
    const selectedPlan = this.plans.find(p => p.value === event.target.value);
    if (selectedPlan) {
      this.selectedPlan = selectedPlan;
      this.paymentForm.patchValue({ amount: selectedPlan.amount });
    } else {
      this.selectedPlan = null;
      this.paymentForm.patchValue({ amount: null });
    }
  }

  // Custom validator for expiration date format (MM/YYYY)
  validateExpDate(control: any) {
    const expDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
    const today = new Date(2024, 1, 8);
    const inputMonth = parseInt(control.value.split('/')[0]);
    const inputYear = 2000 + parseInt(control.value.split('/')[1]); // Assuming years are in 20XX format
    const inputDate = new Date(inputYear, inputMonth - 1, 1);
    if (!expDatePattern.test(control.value) || inputDate <= today) {
      return { 'expDateFormatError': true };
    }
    return null;
  }

  // CARD PAYMENT VALIDATION
  cardValidation(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value: string = control.value;
      const sanitizedValue = value.replace(/\s/g, '');
      if (!/^\d{16}$/.test(sanitizedValue)) {
        return { 'invalidCreditCard': true };
      }
      const formattedValue = sanitizedValue.replace(/(\d{4})/g, '$1 ');
      if (formattedValue !== value) {
        control.setValue(formattedValue, { emitEvent: false });
      }
      return null;
    };
  }

  // CVV VALIDATION CODE
  cvvValidator(): ValidatorFn {
    return Validators.pattern(/^\d{3}$/);
  }
  
  alphaNumericValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const cvvValue = control.value;
    if (cvvValue && /\D/.test(cvvValue)) {
      return { 'alphaNumeric': true };
    }
    return null;
  }

  // Main
  submitPayment() {
    try {
      const premium: Premium = {
        email: this.paymentForm.get('email')?.value,
        phoneNo: this.paymentForm.get('phoneNo')?.value,
        cardNo: this.paymentForm.get('cardNo')?.value,
        expDate: this.paymentForm.get('expDate')?.value,
        cvv: this.paymentForm.get('cvv')?.value,
        amount: this.paymentForm.get('amount')?.value
      };
      this.paymentService.submitPayment(premium).subscribe(response => {
        console.log(premium);
        console.log(response);
        if (this.paymentForm.valid) {
          this.paymentForm.reset({
            email: '',
            phoneNo: '',
            cardNo: '',
            expDate: '',
            cvv: '',
            amount: ''
          });
        }
      }, (error) => {
        console.error('Error submitting the form: ', error);
      });
    } catch (error) {
      console.error('Error in submitPayment function: ', error);
    }
  }

  proceedWithPayment(): void {
    console.log("Payment is being processed.");
    this.paymentMade = true;
  }

 
  navigate(): void {
    const receiptData = {
      email: this.paymentForm.get('email')?.value,
      phoneNo: this.paymentForm.get('phoneNo')?.value,
      amount: this.paymentForm.get('amount')?.value,
    };
    console.log("Navigating to receipt with data:", receiptData);
    this.router.navigate(['/reciept'], { state: { data: receiptData } });
  }

  navigateBackToHome(): void {
   
    this.router.navigate(['/home']);
  }
}
