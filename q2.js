//callback.js

const resolvedPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ message: "resolvedPromise: success after 500ms" }), 500);
  });

const rejectedPromise = () =>
  new Promise((_, reject) => {
    setTimeout(() => reject(new Error("rejectedPromise: failure after 500ms")), 500);
  });


resolvedPromise()
  .then((data) => console.log("Q2 Resolved:", data.message))
  .catch((err) => console.error("Q2 Resolved -> Unexpected error:", err.message));

rejectedPromise()
  .then((data) => console.log("Q2 Rejected -> Unexpected resolve:", data))
  .catch((err) => console.error("Q2 Rejected:", err.message));