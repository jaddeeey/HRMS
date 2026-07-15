import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "../ui/card";


export default function DashboardCard({
  title,
  value
}) {

  return (
    <Card className="rounded-2xl shadow-sm">

      <CardHeader>
        <CardTitle className="text-sm text-gray-500">
          {title}
        </CardTitle>
      </CardHeader>


      <CardContent>

        <h2 className="text-4xl font-bold">
          {value}
        </h2>

      </CardContent>

    </Card>
  );
}