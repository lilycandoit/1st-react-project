import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import "./index.css";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";

function App() {
  // ListGroup
  let items = ["New York", "Sanfrancisco", "Tokyo", "London", "Parris"];
  // set up function
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  //Alert
  const [alertVisible, setAlertVisible] = useState(false);

  //expandable text components

  //expenseList
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
    { id: 5, description: "eee", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}> My Alert</Alert>
      )}
      <Button
        color="danger"
        onClick={() => setAlertVisible(true)}
      >
        My Button
      </Button>

      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        similique nam illo rerum tempore commodi, dolores fuga dolorem
        laudantium saepe autem, voluptate necessitatibus nemo? Exercitationem
        assumenda illum vitae quia doloremque eaque pariatur alias doloribus,
        provident quas, eveniet neque, repudiandae ea ad earum dicta. Aperiam
        porro nisi ratione inventore modi similique autem et quisquam expedita
        mollitia suscipit, illo est ab dolorum quibusdam asperiores molestias
        repellendus nostrum rerum facilis? Accusamus, similique ab nobis
        explicabo est a ratione mollitia velit! Vitae, reprehenderit? Rem,
        maiores voluptatem reiciendis eius esse, fugiat deserunt provident
        reprehenderit molestias distinctio est quisquam voluptatum sapiente
        animi magnam voluptate rerum cumque.
      </ExpandableText>

      <Form />

      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
