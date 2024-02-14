import React from "react";
import { useSpring, animated } from "react-spring";

const AffectionWords = () => {
  const props = useSpring({
    // make a cool animation here
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 },
    delay: 1000,
    fontSize: "50px",
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  });

  return (
    <animated.div style={props} className="affection-words">
      <h2 animate={{ fontSize: "50px" }}>Te amo, mi Munecosita</h2>

      <p className="affection-words-title">Para ti, mi amor:</p>
      <p>En este día especial, quiero recordarte cuánto te amo.</p>

      <p>
        Tú eres la razón por la que mi corazón late con fuerza y alegría cada
        día.
      </p>
      <p>Desde que te conocí, mi mundo cambió para siempre.</p>
      <p>
        Tu amor me inspira, tu ternura me conmueve y tu presencia me fortalece.
      </p>
      <p>Gracias por ser quien eres y por estar a mi lado.</p>
      <p>¡Te amo más de lo que las palabras pueden expresar!</p>
      <p>Feliz Día de San Valentín, mi amor.</p>
      <p>Con todo mi amor,</p>
      <p>Crisita, ❤️❤️❤️❤️❤️❤️❤️ Munecosita</p>
      <p>Atentamente, tu amorcito, JJ</p>
    </animated.div>
  );
};

export default AffectionWords;
