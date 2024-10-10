import { useEffect, useState } from "react";

// Define o tipo para o estado do cronômetro
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Define a data alvo: 2 meses a partir de amanhã
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 1); // Amanhã
    targetDate.setMonth(targetDate.getMonth() + 2); // 2 meses a partir de amanhã

    // Função para calcular o tempo restante
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    };

    // Atualiza o cronômetro a cada segundo
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, []);

  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <div className="flex">
        <div className="flex w-full max-w-lg items-center rounded-xl px-5 py-3 text-lg font-bold text-white">
          <div>
            <span className="block text-xl">{timeLeft.days} dias</span>
            <span className="block text-xl">{timeLeft.hours} horas</span>
            <span className="block text-xl">{timeLeft.minutes} minutos</span>
            <span className="block text-xl">{timeLeft.seconds} segundos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
