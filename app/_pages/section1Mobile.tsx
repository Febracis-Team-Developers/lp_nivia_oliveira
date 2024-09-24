import './sectionMobile.css';
import React from 'react';
import PasswordInput from './forms';

const Section1Mobile = () => {
    return ( 
        <div className="gradient-background flex justify-center" style={{
            height: '100%',
        }}>

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
                    <img src='./01/bg-nivia.png' alt='Image 01' width={390} height={521} />
                    <PasswordInput />
                    <h1 className='p1S1SUnderButton py-4 text-center'>Preencha o <span className='font-bold'>formulário acima e clique no botão marrom</span></h1>
                </div>

                

           </div>

        </div>
     );
}
 
export default Section1Mobile;