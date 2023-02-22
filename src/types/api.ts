export type ApiVoidResponse = {
    success: boolean
    error?: any
}

export type ApiMailUp = {
    to: string,
    subject: string
    body: string
}

export type ApiNewsletterUp = {
    email: string,
    phone?: string
    whatsapp?: string
}