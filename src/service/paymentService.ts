import  {Payment} from '../model/payment';
import * as InvoiceLineItem from '../model/invoiceLineItem'; // Assuming the model is named 'InvoiceLineItem'

const makePayment =  async( invoiceId:any, indianAmount:number, bankPaymentDetails:any, forExAmount:any, currency: any, isFullPayment: any) =>{
    
      // Create payment
      const payment = await Payment.create({
        invoiceId,
        indianAmount,
        paymentDate: new Date(),
        bankPaymentDetails,
        forExAmount, 
        currency, 
        isFullPayment
      });

      // Update invoice line item total
      const invoiceLineItem = await InvoiceLineItem.findByPk(invoiceId);
      (invoiceLineItem as any).total -= indianAmount;

      return payment;
  }

export {makePayment}