function TodoItem2() {
  var itemName = "Go to college";
  var itemDate = "10 / 12 / 24";
  return (
    <div class="container">
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

export default TodoItem2;
