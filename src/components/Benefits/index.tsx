import React, {FC, useState} from "react";
import {Grid} from "@mui/material";
import BenefitItem, {BenefitItemProps} from "@/components/BenefitItem";
import {RevealUp} from "@/components/Reveal";


const BenefitsSection: FC = () => {


    const [benefits] = useState<Array<BenefitItemProps>>([

        {
            src: "https://statics.helpia.com/landing/icon-benefits-star.png",
            title: "Primeros 60 días gratis"
        },
        {
            src: "https://statics.helpia.com/landing/icon-benefits-price.png",
            title: "Pagarás por lo que uses"
        },

        {
            src: "https://statics.helpia.com/landing/icon-benefits-calendar.png",
            title: "Atención 24hs, los 365 días del año"
        },
        {
            src: "https://statics.helpia.com/landing/icon-benefits-three.png",
            title: "Planes a medida"
        }
    ])
    return (
        <Grid container justifyContent="space-around" >
            {benefits.map((props, i)=>{
               return (
                   <Grid item key={i} xs={12}  md={6} lg={3} sx={{p: 4, display:"flex", justifyContent: "center"}}>
                       <RevealUp>
                           <BenefitItem {...props} />
                       </RevealUp>
                   </Grid>
               )
            })}
        </Grid>
    );
};

export default BenefitsSection;

