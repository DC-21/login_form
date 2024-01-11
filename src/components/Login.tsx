const Login = () => {
  return (
    <div className="w-full min-h-screen justify-center items-center flex">
      <form className="w-[300px] h-[350px] shadow shadow-gray-500 rounded px-2 items-center justify-center flex flex-col">
        <p className="text-2xl text-blue-500 font-bold">Login Please</p>
        <div className="px-2 w-full">
          <input
            required
            type="text"
            placeholder="email"
            className="w-full mt-6 text-gray-700 p-3 rounded focus:outline-none border border-gray-500"
          />
          <input
            required
            type="password"
            placeholder="password"
            className="w-full mt-6 text-gray-700 p-3 rounded focus:outline-none border border-gray-500"
          />
        </div>
        <div className="w-full flex px-2 justify-center items-center mt-6">
          <button className="text-white w-full p-3 rounded bg-blue-600 justify-center">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
