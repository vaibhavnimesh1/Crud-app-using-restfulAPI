import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="page_404 bg-white p-10">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <div
            className="four_zero_four_bg w-full h-96 bg-center bg-cover"
            style={{
              backgroundImage: `url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)`,
            }}
          >
            <h1 className="text-7xl text-center">404</h1>
          </div>

          <div className="contant_box_404  flex justify-center items-center flex-col">
            <h3 className="text-7xl text-center">Look like you're lost</h3>

           

            <Link
              to={"/"}
              className="link_404 inline-block  text-white font-bold py-2 px-4 bg-green-500 rounded mt-5"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
