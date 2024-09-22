import './section1.css';
import { Button } from "@/components/ui/button"


const Section1 = () => {
    return ( 
        <div className="gradient-background flex pl-52" style={{
            backgroundImage: "url('./01/bg-nivia-full.png')", 
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
            height: '100%',
            paddingTop: '50px',
            paddingBottom: '100px',
        }}>
            <div>
                <div className='py-12'>
                    <p className='pS1'>Mulheres de Alta Performance</p>
                </div>

                <div>
                    <h1 className='h1S1'>
                        Reconecta-te com o teu
                        <br/>feminino e eleva a tua
                        <br/>performance sistémica
                        <br/>em 4 meses!
                    </h1>
                </div>

                <div>
                    <p className='p1S1 py-12'>
                        Nesta mentoria exclusiva para mulheres,
                        <br/>vais trabalhar profundamente a tua
                        <br/>conexão com o feminino, integrando
                        <br/>aspectos como maternidade, casamento,
                        <br/>autoestima, saúde física e emocional,
                        <br/>finanças, carreira, negócios, sexualidade
                        <br/>e a tua conexão com Deus. 
                    </p>
                </div>

                <div>
                    <a href='https://api.whatsapp.com/send/?phone=351914705127&text&type=phone_number&app_absent=0'>
                        <Button variant={'ProjectButton'} size={'ProjectButton'}>Garantir a minha vaga</Button>
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default Section1;