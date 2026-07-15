import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Form,
  Users,
  CalendarDays,
  BarChart3
} from "lucide-react";


export default function Sidebar() {


  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard
    },
    {
      name: "Benefits",
      path: "/benefits",
      icon: Form
    },
    {
      name: "Employees",
      path: "/employees",
      icon: Users
    },
    {
      name: "Leave",
      path: "/leave",
      icon: CalendarDays
    },
    {
      name: "Performance",
      path: "/performance",
      icon: BarChart3
    }
  ];


  return (

    <aside className="
      w-64
      min-h-screen
      bg-slate-900
      text-white
      p-5
    ">


      <h1 className="
        text-2xl
        font-bold
        mb-8
      ">
        HRMS
      </h1>



      <nav className="space-y-2">


        {
          menu.map((item)=>{

            const Icon = item.icon;


            return (

              <NavLink
                key={item.name}
                to={item.path}

                className={({isActive}) =>
                  `
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-xl
                  transition

                  ${
                    isActive
                    ?
                    "bg-blue-600 text-white"
                    :
                    "text-slate-300 hover:bg-slate-800"
                  }
                  `
                }
              >

                <Icon size={20}/>

                {item.name}

              </NavLink>

            )

          })
        }


      </nav>


    </aside>

  );
}