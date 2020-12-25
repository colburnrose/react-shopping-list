import React from "react";

export default class AddItemForm extends React.Component {
  onSubmitForm = (e) => {
    e.preventDefault();
    // e.target['inputName'] references `<input name='inputName' />`
    this.props.onAddItem(e.target.itemToAdd.value);
  };
  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <input
          name="itemToAdd"
          type="text"
          placeholder="carrots"
          aria-label="Shopping list item"
        />
        <button type="submit">Add Item</button>
      </form>
    );
  }
}
