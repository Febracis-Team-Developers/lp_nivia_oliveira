import './section1.css';

const Section2 = () => {
    return ( 
        <div className='backgroundS2' style={{
            backgroundImage: `url('./02/background.svg')`,
            backgroundColor: '#D9D9D9', // Fallback color to see if the style is applied
            backgroundSize: 'cover',
        }}>
            <div className="h1 flex justify-center py-24 z-10">
                <div className='flex flex-col items-center py-12 z-10 font-medium'>
                <h1 className='h1 py-12 z-10 text-4xl '>Como seria a tua vida se...</h1>
                    <p className="p2 text-2xl">Tivesses tempo para cuidar de ti e</p>
                    <p className="p2 text-2xl">praticar atividade física regularmente?</p>
                    
                    <br/><p className="p2 text-2xl">Soubesses exatamente como cuidar das tuas</p>
                    <p className="p2 text-2xl">finanças e prosperar financeiramente?</p>

                    <br/><p className="p2 text-2xl">Atraísses o homem certo ou recuperasses</p>
                    <p className="p2 text-2xl">o teu relacionamento amoroso?</p>

                    <br/><p className="p2 text-2xl">Pudesses equilibrar maternidade,</p>
                    <p className="p2 text-2xl">carreira e bem-estar emocional?</p>

                    <br/><p className="p2 text-2xl">Te reconectasses com Deus e</p>
                    <p className="p2 text-2xl">descobrisses a tua melhor versão?</p>
                </div>

                <div className='py-16 px-32'>
                    <video 
                            width="300" 
                            height="385"  
                            src="./videos/video1nivia.mp4" 
                            title="YouTube video player"  
                            controls
                            >
                        </video>
                </div>
            </div>
        </div>
     );
}
 
export default Section2;