// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from "@sendgrid/mail";
import {ApiMailUp, ApiVoidResponse} from "@/types/api";

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string);


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiVoidResponse>
) {

  if(req.method === "POST") {
    try {
      const templateId = process.env.NEXT_PUBLIC_SENDGRID_TEMPLATE_ID as string
      const from = process.env.NEXT_PUBLIC_SENDGRID_FROM_EMAIL as string
      const {to, subject, body} = JSON.parse(req?.body ?? "") as ApiMailUp
     await sgMail.send({
        to,
        from,
        templateId,
        subject,
        dynamicTemplateData: {
          subject,
          body
        }
      })

      res.status(200).json({success: true});
    } catch (error) {
      res.status(500).json({success: false, error});
    }
  }

}
