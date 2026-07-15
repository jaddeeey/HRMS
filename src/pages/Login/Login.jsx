import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  Users,
  Form,
  ChartNoAxesCombined
} from "lucide-react";


export default function Login() {

  const navigate = useNavigate();

  const [showPassword,setShowPassword] = useState(false);

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");



  function handleLogin(e){

    e.preventDefault();


    if(
      email === "admin@wealthbank.com.ph" &&
      password === "123456"
    ){

      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      navigate("/dashboard");

    }
    else{

      alert("Invalid login");

    }

  }



  return (

    <div className="
      min-h-screen
      flex
      bg-slate-100
    ">



      {/* LEFT SIDE */}

      <div className="
        hidden
        lg:flex
        w-1/2
        bg-gradient-to-br
        from-blue-700
        to-indigo-900
        text-white
        flex-col
        justify-center
        px-16
      ">


        <div className="max-w-lg">


          <div className="
            flex
            items-center
            gap-3
            mb-8
          ">

            <div className="
              bg-white/20
              p-4
              rounded-2xl
            ">

              <Users size={40}/>

            </div>


            <h1 className="
              text-4xl
              font-bold
            ">
              HRMS
            </h1>

          </div>




          <h2 className="
            text-5xl
            font-bold
            leading-tight
          ">

            Manage your workforce
            smarter

          </h2>



          <p className="
            mt-6
            text-blue-100
            text-lg
          ">

            A complete Human Resource Management
            System for employees, attendance,
            leave, benefits and performance.

          </p>





          {/* Features */}


          <div className="
            mt-10
            space-y-5
          ">


            <div className="
              flex
              items-center
              gap-4
              bg-white/10
              p-4
              rounded-xl
            ">

              <Form/>

              <div>

                <h3 className="font-semibold">
                  Employee Benefits
                </h3>

                <p className="text-sm text-blue-100">
                  Download Forms for benefits
                </p>

              </div>

            </div>





            <div className="
              flex
              items-center
              gap-4
              bg-white/10
              p-4
              rounded-xl
            ">


              <ChartNoAxesCombined/>


              <div>

                <h3 className="font-semibold">
                  Performance Management
                </h3>

                <p className="text-sm text-blue-100">
                  Track employee growth
                </p>

              </div>


            </div>


          </div>



        </div>


      </div>






      {/* RIGHT SIDE */}


      <div className="
        flex
        flex-1
        items-center
        justify-center
        p-6
      ">



        <div className="
          w-full
          max-w-md
          bg-white
          rounded-3xl
          shadow-xl
          p-8
        ">



          <h1 className="
            text-3xl
            font-bold
            text-gray-800
          ">

            Welcome Back

          </h1>



          <p className="
            text-gray-500
            mt-2
            mb-8
          ">

            Sign in to your HRMS account

          </p>





          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >




            {/* Email */}


            <div className="relative">


              <Mail
                className="
                  absolute
                  left-4
                  top-3.5
                  text-gray-400
                "
              />


              <input

                type="email"

                placeholder="Email"

                value={email}

                onChange={(e)=>
                  setEmail(e.target.value)
                }


                className="
                  w-full
                  border
                  rounded-xl
                  py-3
                  pl-12
                  pr-4
                  focus:ring-2
                  focus:ring-blue-500
                  outline-none
                "

              />


            </div>






            {/* Password */}


            <div className="relative">


              <Lock
                className="
                absolute
                left-4
                top-3.5
                text-gray-400
                "
              />



              <input

                type={
                  showPassword
                  ?
                  "text"
                  :
                  "password"
                }


                placeholder="Password"


                value={password}


                onChange={(e)=>
                  setPassword(e.target.value)
                }


                className="
                w-full
                border
                rounded-xl
                py-3
                pl-12
                pr-12
                outline-none
                focus:ring-2
                focus:ring-blue-500
                "

              />



              <button

                type="button"

                onClick={()=>
                  setShowPassword(!showPassword)
                }


                className="
                absolute
                right-4
                top-3.5
                text-gray-400
                "

              >

                {
                  showPassword
                  ?
                  <EyeOff/>
                  :
                  <Eye/>
                }

              </button>


            </div>





            <div className="
              flex
              justify-between
              text-sm
            ">

            </div>


            <button

              className="
                w-full
                bg-blue-600
                hover:bg-blue-700
                text-white
                py-3
                rounded-xl
                font-semibold
                transition
              "

            >

              Sign In

            </button>



          </form>




          <p className="
            text-center
            text-sm
            text-gray-400
            mt-8
          ">

           © 2026 System Developmemt Department

          </p>


        </div>


      </div>


    </div>

  );
}