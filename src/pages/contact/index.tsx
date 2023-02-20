import PageContainer, {PageSection} from "@/components/PageContainer";

import React from "react";
import Contact, {ContactContainer} from "@/components/Contact";


export default function ContactPage() {

    return (
        <PageContainer title={"Contacto"}>

            <ContactContainer>
                <PageSection>
                    <Contact sx={{py: 4}}/>
                </PageSection>
            </ContactContainer>
        </PageContainer>

    )
}
