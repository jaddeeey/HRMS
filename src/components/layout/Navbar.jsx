import { FaBell, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function Navbar() {

  const navigate = useNavigate();


  function handleLogout() {

    localStorage.removeItem("isLoggedIn");

    navigate("/login");

  }


  return (

    <header className="
      bg-white
      px-6
      py-4
      shadow
      flex
      justify-between
      items-center
    ">


      {/* Search */}

      <input
        type="text"
        placeholder="Search employees..."
        className="
          border
          rounded-xl
          px-4
          py-2
          w-80
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />



      {/* Right Side */}

      <div className="
        flex
        items-center
        gap-5
      ">


        {/* Notification */}

        <div className="relative">

          <FaBell
            className="
              text-xl
              cursor-pointer
              text-gray-600
            "
          />

          <span className="
            absolute
            -top-2
            -right-2
            bg-red-500
            text-white
            text-xs
            rounded-full
            w-5
            h-5
            flex
            items-center
            justify-center
          ">
            3
          </span>

        </div>



        {/* User */}

        <div className="
          flex
          items-center
          gap-3
        ">


          <FaUserCircle
            className="
              text-3xl
              text-gray-600
            "
          />


          <div className="hidden md:block">

            <p className="
              text-sm
              font-semibold
            ">
              Administrator
            </p>

            <p className="
              text-xs
              text-gray-500
            ">
              HR Manager
            </p>

          </div>



          {/* Logout */}

          <button
            onClick={handleLogout}
            className="
              ml-3
              bg-red-500
              hover:bg-red-600
              text-white
              px-4
              py-2
              rounded-xl
              transition
            "
          >
            Logout
          </button>


        </div>


      </div>


    </header>

  );
}