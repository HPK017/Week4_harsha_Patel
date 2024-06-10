// InvoiceService.js
import Invoice from '../model/invoice';
import {SOWPaymentPlan} from '../model/sowPaymentPlan';
import {SOWPaymentPlanItem} from '../model/sowPaymentPlanLineItem';

const generateInvoicesForToday = async() =>{
    const today = new Date();
    const todayISOString = today.toISOString().split('T')[0];

    const paymentPlans = await SOWPaymentPlan.findAll({
      where: { plannedInvoiceDate: todayISOString },
      include: [{ model: SOWPaymentPlanItem }]
    });

    const invoices = await Promise.all(paymentPlans.map(async (plan) => {
      const totalAmount = plan.SOWPaymentPlanItems.reduce((sum:any, item:any) => sum + item.total, 0); // Corrected property name
      const invoice = await Invoice.create({
        sowId: plan.sowId,
        customerId: plan.customerId,
        sowPaymentPlanId: plan.id, 
        totalInvoiceValue: totalAmount, 
        status: 'Drafted', 
        paymentReceivedOn:null, 
        invoiceAmount: totalAmount, 
        invoiceSentOn: today, 
      });

      return invoice;
    }));

    return invoices;
  }
}

export  {generateInvoicesForToday};
