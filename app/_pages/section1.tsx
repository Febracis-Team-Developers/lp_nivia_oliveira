import PasswordInput from './forms';
import './section1.css';


const Section1 = () => {
    return ( 
        <div className="gradient-background flex pl-52" style={{
            backgroundImage: "url('./01/01.svg')", 
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
            height: '100%',
            paddingTop: '50px',
            paddingBottom: '100px',
        }}>
            <div>
                <div className='py-2'>
                    <p className='pS1'>Mulheres de 
                        <br/>Alta Performance</p>
                    <img className='py-5' src='./01/Rectangle 8.svg' alt='Image 01' width={263} height={7} />
                </div>

                <div className='flex gap-x-4'>
                    <img className='py-5' src='./01/Rectangle 12.svg' alt='Image 01' width={5} height={64} />
                    <img className='py-5' src='./01/Calendar.svg' alt='Image 01' width={49.5} height={55} />
                    <h1 className='pSS1 py-8'>De 10 a 12 de Setembro</h1>
                </div>

                <div>
                    <h1 className='h1S1'>
                        Reconecta-te com o teu
                        <br/>feminino e <span className='text-amber-900'>eleva a tua
                        <br/>performance </span>sistémica
                        <br/>em 4 meses!
                    </h1>
                </div>

                <div>
                    <p className='p1S1 py-12'>
                        Nesta mentoria <span className='font-bold'>exclusiva para mulheres,</span>
                        <br/>vais trabalhar profundamente a tua
                        <br/>conexão com o feminino, integrando
                        <br/>aspectos como <span className='font-bold'>maternidade, casamento,
                        <br/>autoestima, saúde física e emocional,
                        <br/>finanças, carreira, negócios, sexualidade
                        <br/>e a tua conexão com Deus.</span>
                    </p>
                </div>

                <div>
                    <h1 className='p1S1S'>Se cadastra abaixo e garante teu lugar:</h1>
                </div>

                <div>
                    <PasswordInput />
                    <h1 className='p1S1SUnderButton py-4'>Preencha o <span className='font-bold'>formulário acima e clique no botão marrom</span></h1>
                </div>
            </div>
        </div>
     );
}
 
export default Section1;