function create_promise(executor) {
  return new Promise(executor);
}

async function create_and_await_promise(executor) {
  return await create_promise(executor);
}

window.create_and_await_promise = create_and_await_promise;
