import PageContainer, {PageSection} from "@/components/PageContainer";

import React from "react";
import { ContactContainer, Contact } from "@/components/Contact";


export default function ContactPage() {

    return (
        <PageContainer title={"Contacto"}>

            <ContactContainer>
                <PageSection>
                    <Contact />
                </PageSection>
            </ContactContainer>
        </PageContainer>

    )
}
