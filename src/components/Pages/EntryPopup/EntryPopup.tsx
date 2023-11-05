import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
const EntryPopup = () => {
  const [show, setShow] = useState(true);
  return show ? (
    <div className="fixed w-[100%] h-[100%] bg-white scale-95 rounded-xl z-[100] flex flex-col  text-justify p-[1rem] text-[1.5rem] font-medium  overflow-y-auto ">
      <div className="absolute  text-[2rem]" onClick={() => setShow(false)}>
        <RxCross1 />
      </div>{" "}
      <h1 className="ml-[2rem] text-[2.5rem] text-center">
        Wiadomość do szanownej ekipy z{" "}
        <span className="italic font-bold">solvro</span>
      </h1>
      <div className="grid lg:grid-cols-8 pt-[0.3rem] gap-[1.5rem] mt-auto mb-[10%]">
        <div className=" lg:col-span-5">
          <p>
            Dzięki za możliwość udziału w waszej rekrutacji. Trochę z wami mailowałem na temat wątpliwości, ale koniec końców,
          chciałbym żeby przede wszystkim to zadanie przedstawiało moje umiejętności <br />
           
          </p>
          <br />
          <p>
            Zadanie spełnia specyfikację podaną jako minimalne wymagania w
            poleceniu. Nie do końca niestety ogarnąłem, jak miałbym stworzyć
            autentykację do tego projektu, bo jeśli miałaby być rejestracja
            użytkowników, to potrzebowałbym API, żeby dodać użytkownika (albo
            jakieś zewnętrzne auth). Oprócz tego, przy dodawaniu
            tasków nie mogę edytować createdBy, zawsze jako wartość będzie
            userId(header z API, ktory od was dostalem).Dlatego żeby pokazać, że
            wiem co i jak, zrobiłem sztuczne logowanie
            <span className="font-bold">
              {" "}
              (formularz logowania zaakceptuje każdy login i hasło, ale jak się
              nie zalogujesz, to nie masz dostępu do dodawania tasków itd.,  AKA nie ma w logowaniu połączenia z backendem, jest cała reszta).
            </span>{" "}
          </p>
        </div>
        <div className="lg:col-span-3 w-full">
          {" "}
          <img src="/solvroBg.svg" className=" mx-auto" alt="" />
        </div>
      </div>
      <img
        src="/sovlro.svg"
        className=" h-[95%]  absolute z-[-1]  opacity-10 right-[50%] translate-x-[50%]"
        alt=""
      />
    </div>
  ) : (
    <div
      className=" cursor-pointer fixed border-2 text-white text-[1.8rem]  font-extrabold rotate-[270deg] right-[100%] translate-x-[100%] xl:translate-x-[150%] top-[2%] rounded-xl p-[0.3rem] hover:translate-y-[80%] duration-500"
      onClick={() => setShow(true)}
    >SolVro 
    </div>
  );
};

export default EntryPopup;
