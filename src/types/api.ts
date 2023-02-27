export type ApiVoidResponse = {
    success: boolean
    error?: any
}

export type ApiMailUp = {
    subject: string
    body: string
}

export type ApiNewsletterUp = {
    email: string,
    phone?: string
    whatsapp?: string
}

export type ApiPlanType = {
    id: string;
    name: string;
    description: string;
    frequence: number;
    subscription_base_cost: number;
    tax_percentage: string;
    currency: number;
    regular_type: boolean;
    recurrence: number;
};
