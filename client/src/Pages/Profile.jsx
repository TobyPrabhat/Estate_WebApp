import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          className="rounded-full h-20 w-20 object-cover self-center mt-2 cursor-pointer"
          src={currentUser.avatar}
          alt="Profile Image"
        />
        <input
          type="text"
          className="border rounded-lg p-3"
          placeholder="name"
          id="name"
        />
        <input
          type="email"
          className="border rounded-lg p-3"
          placeholder="email"
          id="email"
        />
        <input
          type="password"
          className="border rounded-lg p-3"
          placeholder="password"
          id="password"
        />
        <button className="bg-slate-700 p-3 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Update
        </button>
      </form>

      <div className="flex justify-between mt-3">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
