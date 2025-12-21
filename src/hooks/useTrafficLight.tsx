import { useEffect, useEffectEvent, useState } from "react";


export const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
}

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {
  const [ligth, setLigth] = useState<TrafficLightColor>('red');
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown === 0) return;
    const instervalId = setInterval(() => {
      setCountdown(prev => prev -1)
    }, 1000);

    return () => {
      clearInterval(instervalId);
    }
  }, [countdown]);

  const setLightAction = useEffectEvent(() => {
    setCountdown(5);
    if (ligth === 'red') {
      setLigth('green');
      return;
    }
 
    if (ligth === 'yellow') {
      setLigth('red');
      return;
    }
 
    if (ligth === 'green') {
      setLigth('yellow');
      return;
    }
  });

  useEffect(() => {
    if (countdown > 0) return;
 
    setLightAction();
  }, [countdown])
  return {
    ligth,
    countdown
  }
}