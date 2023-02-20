import {ApiMailUp} from "@/types/api";


type ContactMailUp =  {
    email: string
    phone: string,
    message: string
    name: string
}

type UseMailHook = {
    sendContactMail: (data: ContactMailUp )=> Promise<void>
}


const useMail = (): UseMailHook =>{
     const sendContactMail = (data: ContactMailUp ) =>{
       return new Promise<void>((resolve, reject)=>{

           const mailMsg: ApiMailUp = {
                subject: "[Helpia] Nuevo mensaje!",
                to: data.email,
                body: `<p style="text-align: justify;"> El siguiente usuario ha enviado un mensaje desde el sitio de Helpia:
                        <br />
                        <br />
                         <ul style="text-align: left;">
                           <li>Nombre: <strong>${data.name}</strong></li>
                            <li>Correo: <strong>${data.email}</strong></li>
                            <li>Teléfono: <strong>${data.phone}</strong></li>                         
                         </ul>
                         <br />
                         <p style="text-align: justify;"><strong>Mensaje:</strong> <br /></p>                         
                         <p style="text-align: justify;">${data.message}</p>                         
                   </p>`
           }

           fetch("/api/mail", {
               body: JSON.stringify(mailMsg),
               method: "POST"
           }).then(async (r) => {
               if(r.status === 200){
                   resolve()
               } else {
                   reject(new Error(`${r.status}: ${await r.json()}`))
               }
           }).catch((err) => {
               reject(err)
           })

       })
    }

    return {
       sendContactMail
    }
}

export default useMail