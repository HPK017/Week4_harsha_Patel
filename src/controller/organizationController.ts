
import { Request, Response } from "express";
import { createOrg } from "../service/organizationservice";
import { generateInvoicesForToday } from "../service/InvoiceService";
import { makePayment } from "../service/paymentService";



const addorg = async(req: Request, res: Response)=>{
    await createOrg(req.body);
    res.send("Org created successfully");
}

const generateInvoice = async(req: Request, res: Response): Promise<any> => {
  const invoices = await generateInvoicesForToday();
  res.json(invoices);
}

const payment = async(req: Request, res: Response): Promise<any> => {
  const { invoiceId, indianAmount, bankPaymentDetails, forExAmount, currency, isFullPayment } = req.body;
    const payment = await makePayment(invoiceId, indianAmount, bankPaymentDetails, forExAmount, currency, isFullPayment);
    res.status(201).json({ message: 'Payment made successfully', payment });
}

export {addorg, generateInvoice, payment}