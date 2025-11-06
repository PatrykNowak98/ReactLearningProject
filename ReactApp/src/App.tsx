import "./App.css";
import ExpandableText from "./components/ExpandableText/ExpandableText";

function App() {
  return (
    <div>
      <ExpandableText maxChars={100}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur qui
        hic, alias nihil possimus voluptatum delectus totam asperiores vero
        explicabo, velit provident odit cupiditate! Aut nam unde ipsa aliquid,
        voluptatibus magnam suscipit rem eveniet nemo laboriosam architecto odit
        placeat vel! Ullam perferendis suscipit nam ea assumenda dolore
        sapiente, debitis nemo. Beatae ab asperiores officiis ratione et fugit
        deleniti, impedit neque adipisci dicta qui perspiciatis, nam nihil
        accusamus! Debitis, repudiandae error consectetur culpa vel voluptas
        atque neque voluptates, sed aut nostrum asperiores, similique quis at
        quibusdam inventore ullam sit nulla nobis quas ut! Fugit nesciunt soluta
        cumque assumenda voluptatem, officiis ipsum.
      </ExpandableText>
    </div>
  );
}

export default App;
