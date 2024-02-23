import { IoFastFood, IoHeartCircle, IoMan, IoScale } from "react-icons/io5";
import StatusCard from "../ui/StatusCard";

function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h4>
        Hi,{" "}
        <span className="text-base lg:text-xl text-green-500">#Username</span>
      </h4>
      <h4>Today</h4>
      <div>today's activities</div>
      <h4>Food Intake</h4>
      <div>
        <span>Lists of food taken</span>
      </div>
      <h4>Wellness Status</h4>
      <div className="grid grid-rows-2 grid-cols-2 gap-4">
        <StatusCard color="bg-amber-400 text-amber-50" icon={<IoFastFood />}>
          <span>Food</span>
        </StatusCard>
        <StatusCard color="bg-blue-400 text-blue-50" icon={<IoMan />}>
          Activity
        </StatusCard>
        <StatusCard color="bg-green-400 text-green-50" icon={<IoHeartCircle />}>
          <span>Diet</span>
        </StatusCard>
        <StatusCard color="bg-red-400 text-red-50" icon={<IoScale />}>
          Weight
        </StatusCard>
      </div>
    </div>
  );
}

export default Home;
