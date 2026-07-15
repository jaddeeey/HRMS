import DashboardLayout from "../../layouts/DashboardLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "../../components/ui/card";

import {
  HeartPulse,
  ShieldCheck,
  Wallet,
  Gift,
  Plus
} from "lucide-react";


export default function Benefits() {

  const benefits = [
    {
      title: "Health Insurance",
      description: "Medical and HMO coverage",
      icon: HeartPulse,
      employees: "230 Enrolled",
      color: "bg-red-100 text-red-600"
    },
    {
      title: "SSS",
      description: "Social Security Contribution",
      icon: ShieldCheck,
      employees: "245 Employees",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Pag-IBIG",
      description: "Housing and savings program",
      icon: Wallet,
      employees: "245 Employees",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Company Benefits",
      description: "Allowances and incentives",
      icon: Gift,
      employees: "180 Active",
      color: "bg-purple-100 text-purple-600"
    }
  ];


  return (

    <DashboardLayout>

      <div className="space-y-6">


        {/* Header */}

        <div className="flex justify-between items-center">

          <div>
            <h1 className="text-3xl font-bold">
              Benefits Management
            </h1>

            <p className="text-gray-500">
              Manage employee benefits and contributions
            </p>
          </div>


          <button
            className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-blue-600
            px-4
            py-2
            text-white
            hover:bg-blue-700
            "
          >

            <Plus size={18}/>

            Add Benefit

          </button>


        </div>



        {/* Summary Cards */}

        <div className="
          grid
          gap-5
          md:grid-cols-4
        ">


          <Card>
            <CardHeader>
              <CardTitle>
                Total Benefits
              </CardTitle>
            </CardHeader>

            <CardContent>

              <h2 className="text-4xl font-bold">
                12
              </h2>

            </CardContent>
          </Card>



          <Card>
            <CardHeader>
              <CardTitle>
                Employees Covered
              </CardTitle>
            </CardHeader>

            <CardContent>

              <h2 className="text-4xl font-bold">
                245
              </h2>

            </CardContent>
          </Card>



          <Card>
            <CardHeader>
              <CardTitle>
                Monthly Cost
              </CardTitle>
            </CardHeader>

            <CardContent>

              <h2 className="text-4xl font-bold">
                ₱85,000
              </h2>

            </CardContent>
          </Card>



          <Card>
            <CardHeader>
              <CardTitle>
                Pending Requests
              </CardTitle>
            </CardHeader>

            <CardContent>

              <h2 className="text-4xl font-bold">
                8
              </h2>

            </CardContent>
          </Card>


        </div>



        {/* Benefit List */}


        <div className="
          grid
          gap-5
          md:grid-cols-2
        ">


          {benefits.map((item)=>{

            const Icon = item.icon;


            return (

              <Card
                key={item.title}
                className="
                rounded-2xl
                shadow-sm
                hover:shadow-md
                transition
                "
              >

                <CardContent className="p-6">


                  <div className="flex items-center gap-4">


                    <div
                      className={`
                      rounded-xl
                      p-3
                      ${item.color}
                      `}
                    >

                      <Icon size={28}/>

                    </div>



                    <div>

                      <h2 className="text-xl font-semibold">
                        {item.title}
                      </h2>


                      <p className="text-gray-500">
                        {item.description}
                      </p>


                      <span className="
                      text-sm
                      text-blue-600
                      "
                      >
                        {item.employees}
                      </span>


                    </div>


                  </div>


                </CardContent>

              </Card>

            )

          })}


        </div>


      </div>


    </DashboardLayout>

  );
}