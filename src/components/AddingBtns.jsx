function MainBtns() {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-4">
          <input type="text" placeholder="enter the todo here"></input>
        </div>
        <div class="col-4">
          <input type="date"></input>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainBtns;
