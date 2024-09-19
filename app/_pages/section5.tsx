import { Button } from "@/components/ui/button";

const Section5 = () => {
    return ( 
        <div className="backgroundS5" style={{
            backgroundImage: `url('./05/background.svg')`,
            backgroundColor: '#D9D9D9', // Fallback color to see if the style is applied
            backgroundSize: 'cover',
        }}>
            <div className="flex flex-col items-center py-12">
                <h1 className="h3">Estás pronta para transformar a tua vida?</h1>
                <div className="flex flex-col items-center py-12">
                    <p className="p4">Inscreve-te agora e garante o teu lugar na</p>
                    <p className="h1">Mentoria MAP - Mulheres de Alta Performance!</p>
                </div>
                <a href='https://api.whatsapp.com/send/?phone=351914705127&text&type=phone_number&app_absent=0'>
                    <Button variant={'ProjectButton'} size={'ProjectButton'}>Garantir a minha vaga</Button>
                </a>
            </div>
        </div>
     );
}
 
export default Section5;