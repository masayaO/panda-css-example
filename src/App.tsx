import { css } from "../styled-system/css";
import {Button} from "./ components/Button";

function App() {
  return (
    <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
      Hello 🐼!
      <Button size={'small'} type={'danger'}>Button</Button>
    </div>
  );
}

export default App;