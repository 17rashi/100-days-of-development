function TodoItem1() {
  var itemName = "Buy Milk";
  var itemDate = "12 / 12 / 24";

  return (
    <div className="container">
      <div class="row kg-row">
        <div className="col-6">{itemName}</div>
        <div className="col-4">{itemDate}</div>
        <div className="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
