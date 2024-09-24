import PasswordInput from './forms';

const Section5Mobile = () => {
  return (
    <div
      className="text-center"
      style={{
        backgroundImage: `url('./02/background.svg')`,
        backgroundColor: "#D9D9D9", // Fallback color to see if the style is applied
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center py-12 px-3">
        <h1 className="h3S5">
          Estás pronta para <br />
          transformar a tua vida?
        </h1>
        <div className="flex flex-col items-center py-12">
          <p className="p4S5">Inscreve-te agora e garante o teu lugar na</p>
          <p className="h1">Mentoria MAP - Mulheres de Alta Performance!</p>
        </div>
        <div>
          <h1 className='p1S1S'>Se cadastra abaixo e garante teu lugar:</h1>
        </div>
        <div className="w-[350px]">
          <PasswordInput />
          <h1 className='p1S1SUnderButton py-4'>Preencha o <span className='font-bold'>formulário acima e clique no botão marrom</span></h1>
        </div>
      </div>
    </div>
  );
};

export default Section5Mobile;
