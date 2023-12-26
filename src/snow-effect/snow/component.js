import './style.scss'
import Flake from '../flake/component'
import {randColor, randInt, randFloat} from '../../helpers/generators'
import { useEffect,useState } from 'react'


const Snow = ({quantity}) => {
  let color = randColor();
  let speed = randFloat(1, 3);
  let windSpeed = randFloat(0.5, 3.0);
  let rotationSpeed = 0.3;
  let top = randInt(-80, 35)
  let left = randInt(150,0);
  let size = randInt(5, 30);

  let [flakes, setFlakes] = useState([

      <Flake key={2} size={size} speed={speed} top={top} left={left} color={color} />,
      <Flake key={3} size={size} speed={speed} top={top} left={left} color={color} />,
    ]); 
    const TOP_LIMIT = 93
    const FLAKES_COUNT_LIMIT = 100

// HW1: apply the limit to EACH flake - use the filter hint
// HW2: refactor the initialization logic - add 5 flakes with random left, color, diff keys
// HW3: use destructuring + optimization to minize the code inside the setter
// HW*: make it more realistic
//   - speed
//   - delay (with start)
//   - size
//   - color
//   - 

  useEffect(() => {
    setTimeout(() => {
      setFlakes(
        [
          ...flakes,
          ...new Array(FLAKES_COUNT_LIMIT - flakes.length)
            .fill()
            .map(() => (
              <Flake
                key={Math.random()}
                size={randInt(5, 30)}
                speed={randFloat(1, 3)}
                top={randInt(-40, 5)}
                left={randInt(150,0)}
                color={randColor()}
              />
            )),
        ]
          /* .filter((flake) => flake.props.top < TOP_LIMIT)
            .map((flake) => (
              <Flake
                {...flake.props}
              />
            )) */
          .filter((flake) => flake.props.top < TOP_LIMIT)
          .map((flake) => (
            <Flake
              key={flake.key}
              size={flake.props.size}
              speed={flake.props.speed}
              top={flake.props.top + 0.5}
              left={flake.props.left + windSpeed * flake.props.speed}
              color={flake.props.color}
              rotation={rotationSpeed * flake.props.speed}
            />
          ))
      );
    }, 20);
  });

  return(
    flakes
  )
}

export default Snow 