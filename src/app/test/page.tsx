"use client";
import toast, { Toaster } from "react-hot-toast";
const notify = () => toast.success("Tweet sent 🙌");

const App = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
};
export default App;
