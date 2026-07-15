import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardCard from "../../components/dashboard/DashboardCard";

export default function Dashboard() {

  return (
    <DashboardLayout>

      <div className="space-y-6">

        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Dashboard
          </h1>

          <p className="text-muted-foreground">
            HRMS overview and statistics
          </p>
        </div>


        <div className="
          grid 
          gap-5
          sm:grid-cols-2
          lg:grid-cols-4
        ">

          <DashboardCard
            title="Employees"
            value="245"
          />


          <DashboardCard
            title="Leave Requests"
            value="18"
          />


          <DashboardCard
            title="Attendance"
            value="221"
          />


          <DashboardCard
            title="Performance"
            value="92%"
          />

        </div>

      </div>

    </DashboardLayout>
  );
}