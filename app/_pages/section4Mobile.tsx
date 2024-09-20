import './section1.css';

const Section4Mobile = () => {
    return ( 
        <div style={{
            backgroundImage: "url('./04/BACKGROUND 1.svg')", // Correct path to the image
            height: '100%',
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'left'
        }}>
            <div className='flex flex-col pl-12'
            style={{
                backgroundColor:'rgba(0,0,0,.6)',
            }}
            >
                <h1 className='h2S4 py-12'>Nívia Oliveira</h1>
                <p className='p3S4 pb-12'>
                    Mulher, empresária, mentora, master coach.
                    <br/>Nívia Oliveira é uma mulher de alta performance.

                    <br/><br/>Empresária há mais de 15 anos, tem uma
                    <br/>vasta experiência: começou na confecção
                    <br/>de roupas, foi líder de mercado de
                    <br/>transportadoras e teve uma empresa
                    <br/>de gestão empresarial. 

                    <br/><br/>Durante muitos anos, viveu em um
                    <br/>ambiente majoritariamente masculino,
                    <br/>onde liderava uma frota de camiões.

                    <br/><br/>Após decidir reconectar com o seu
                    <br/>feminino, aproximou-se de Deus, perdeu
                    <br/>20kg, melhorou o seu casamento, elevou
                    <br/>a sua autoestima e tornou-se uma mãe
                    <br/>mais presente.

                    <br/><br/>Hoje, Nívia é Diretora da Febracis Lisboa,
                    <br/>casada, mãe de 11 filhos, membro ativo da
                    <br/>Igreja e praticante regular de atividade física.
                    <br/>Ela vive em alta performance sistémica e quer
                    <br/>guiar-te nesse mesmo caminho de
                    <br/>transformação e plenitude.
                </p>
            </div>
        </div>
     );
}
 
export default Section4Mobile;