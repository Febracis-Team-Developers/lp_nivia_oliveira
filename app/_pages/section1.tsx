import "./section1.css";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Section1 = () => {
  return (
    <div
      className="gradient-background flex pl-52"
      style={{
        backgroundImage: "url('./01/bg-nivia-only.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        backgroundSize: "cover",
        height: "100%",
        paddingTop: "50px",
        paddingBottom: "100px",
      }}
    >
      <div>
        <div className="pt-12">
          <p className="h1S1">
            Mulheres de
            <br />
            Alta Performance
          </p>
        </div>
        <Image
          src="./01/line.svg"
          alt=""
          className="py-12"
          width={150}
          height={10}
        />
        <div className="flex pb-12">
          <Image
            src={"/01/CalendarWithLine.png"}
            alt="Image Line"
            width={40}
            height={40}
          />
          <h5 className="pS1 ml-6">De 10 a 12 de Setembro</h5>
        </div>

        <div>
          <h1
            className="h1S1 font-regular"
            style={{
              fontSize: "50px",
              color: "#0000000",
              lineHeight: "1.2",
            }}
          >
            Reconecta-te com o teu
            <br />
            feminino e{" "}
            <b style={{ color: "#5C2E06", fontWeight: "bold" }}>
              eleva a tua
              <br />
              performance
            </b>{" "}
            sistémica
            <br />
            em 4 meses!
          </h1>
        </div>

        <div>
          <p className="p1S1 py-12">
            Nesta mentoria <b>exclusiva para mulheres,</b>
            <br />
            vais trabalhar profundamente a tua
            <br />
            conexão com o feminino, integrando
            <br />
            aspectos como{" "}
            <b>
              maternidade, casamento,
              <br />
              autoestima, saúde física e emocional,
              <br />
              finanças, carreira, negócios, sexualidade
              <br />e a tua conexão com Deus.
            </b>
          </p>
        </div>
        <div>
            <h5 className="p1S1 pb-6 font-bold" style={{color:"#5C2E06"}}>Se cadastra abaixo e garante teu lugar:</h5>
        </div>
        <form action="" className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="E-MAIL"
            className="input-field"
            style={{
              padding: "23px",
            }}
          />
          <input
            type="text"
            placeholder="WHATSAPP"
            className="input-field"
            style={{
              padding: "23px",
            }}
           />
        </form>
        <div>
          <a href="https://api.whatsapp.com/send/?phone=351914705127&text&type=phone_number&app_absent=0">
            <Button variant="ProjectButton" size="ProjectButton" className="mt-6">
             SIM! QUERO PARTICIPAR!
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Section1;
