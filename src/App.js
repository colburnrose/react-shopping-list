import React from "react";
import AddItemForm from "./AddItemForm";
import ShoppingList from "./ShoppingList";

class App extends React.Component {
  state = {
    shoppingItems: [
      /* put stub items in here for testing */
      { name: "apples", checked: false },
      { name: "oranges", checked: true },
      { name: "bread", checked: false },
    ],
  };
  // event handler methods for the callback props
  handleDeleteItem = (item) => {
    console.log("handle delete item clicked", { item });
    const items = this.state.shoppingItems.filter((i) => i !== item);
    this.setState({
      shoppingItems: items,
    });
  };
  handleCheckItem = (item) => {
    console.log("handle check item clicked", { item });
    this.setState({
      shoppingItems: this.state.shoppingItems.map((itm) => {
        if (item === itm) {
          itm.checked = !itm.checked;
        }
        return itm;
      }),
    });
  };

  handleAddItem = (item) => {
    console.log("handle add item clicked", { item });
    const items = [...this.state.shoppingItems, { name: item, checked: false }];
    this.setState({
      shoppingItems: items,
    });
  };

  render() {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
          <p># of Shopping Items {this.state.shoppingItems.length}</p>
        </header>
        <main>
          <section>
            <AddItemForm onAddItem={this.handleAddItem} />
          </section>
          <section>
            <ShoppingList
              items={this.state.shoppingItems}
              onDeleteItem={this.handleDeleteItem}
              onCheckItem={this.handleCheckItem}
            />
          </section>
        </main>
      </>
    );
  }
}

export default App;
