"use strict";
// import { Organization } from "../model/organization";
// import {Client} from "../model/client"
// import { SOW } from "../model/sow";
// import { SOWPaymentPlan } from "../model/sowPaymentPlan";
// import { SOWPaymentPlanItem } from "../model/sowPaymentPlanLineItem";
// const createOrg = async(org : any): Promise<any> =>{
//     try{
//         const {client, sow, sowpaymentplan, sowpaymentplanlistitems, ...orgdetails } = org;
//         const clientRecord = await Client.create(client);
//         const sowRecord = await SOW.create(sow);
//         const sowPaymentRecord = await SOWPaymentPlan.create(sowpaymentplan);
//         const sowpaymentListRecord = await SOWPaymentPlanItem.create(sowpaymentplanlistitems);
//         const newOrg = await Organization.create({
//             ...orgdetails,
//             OrgId : clientRecord.id,
//             customerID :sowRecord.id,
//             sowId: sowPaymentRecord.id,
//             sowPaymentPlanId : sowpaymentListRecord.id
//         });
//         //const newOrg = await Organization.create(org)
//         if(newOrg){
//             return newOrg;
//         } 
//     }
//     catch(err:any){
//         throw err;
//     }
// }
// async function getOrg(): Promise<any[]> {
//     const org = await Organization.findAll();
//     return org;
// }
// export {createOrg, getOrg}
//# sourceMappingURL=organizationservice.js.map