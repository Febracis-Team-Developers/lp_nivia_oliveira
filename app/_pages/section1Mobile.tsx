import './sectionMobile.css';
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import React from 'react';

const Section1Mobile = () => {
    return ( 
        <div className="gradient-background flex justify-center">

           <div className='py-12 px-8'>
                <p className='p'>Mulheres de Alta Performance</p>

                <div className='py-6'>
                    <h1 className='h1'>
                            Reconecta-te com o teu
                            <br/>feminino e eleva a tua
                            <br/>performance sistémica
                            <br/>em 4 meses!
                    </h1>
                </div>

                <div>
                    <p className='p1 py-6'>
                        Nesta mentoria exclusiva para mulheres,
                        <br/>vais trabalhar profundamente a tua
                        <br/>conexão com o feminino, integrando
                        <br/>aspectos como maternidade, casamento,
                        <br/>autoestima, saúde física e emocional,
                        <br/>finanças, carreira, negócios, sexualidade
                        <br/>e a tua conexão com Deus. 
                    </p>
                    <Image src='./01/bg-nivia.png' alt='Image 01' width={390} height={521} />
                    <Button variant={'ProjectButton'} size={'ProjectButtonMobile'}>Garantir a minha vaga</Button>
                </div>

                

           </div>

        </div>
     );
}
 
export default Section1Mobile;