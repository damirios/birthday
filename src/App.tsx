import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageFirst, PageFourth, PageSecond, PageThird } from "./components";
import { PageFinal } from "./components/page-final";

import "./style.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageFirst />,
  },
  {
    path: "/2",
    element: <PageSecond />,
  },
  {
    path: "/3",
    element: <PageThird />,
  },
  {
    path: "/4",
    element: <PageFourth />,
  },
  {
    path: "/final",
    element: <PageFinal />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
