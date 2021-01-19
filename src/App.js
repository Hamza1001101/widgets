import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is front-end JavaScript framework",
  },
  {
    title: "Why use React?",
    content: "React is fav JS library among enginners",
  },
  {
    title: "How you use React?",
    content: "You use React by creating components",
  },
];

const App = () => {
    return (
      <div>
        <br />
        <Accordion items={items} />
      </div>
    );
}

export default App