import { Button } from "@/components/ui/button";

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
        <a href="https://api.whatsapp.com/send/?phone=351914705127&text&type=phone_number&app_absent=0">
          <Button variant={"ProjectButton"} size={"ProjectButtonMobile"}>
            Garantir a minha vaga
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Section5Mobile;
