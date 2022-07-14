import Spoiler from "./components/Spoiler";
import RangeInput from "./components/RangeInput";
import PasswordConfirm from "./components/PasswordConfirm";
import Timer from "./components/Timer";
import TimeControl from "./components/TimeControl";
function App() {
  return (
    <div>
      <Spoiler header={<h1>Заголовок</h1>} open>
        Контент 1<p>лорем ипсум траливали и тп.</p>
      </Spoiler>

      <Spoiler>
        <h2>Контент 2</h2>
        <p>лорем ипсум траливали и тп.</p>
      </Spoiler>

      <RangeInput min={2} max={10} />
      <PasswordConfirm min={2} />
      <br />
      {/* <Timer seconds={10000} /> */}
      <TimeControl />
    </div>
  );
}
export default App;
