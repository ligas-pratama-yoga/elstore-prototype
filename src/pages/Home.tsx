import CustomCard from "@/components/Card";

export default function Home() {
  return (
    <div className="w-full grid grid-cols-[200px,1fr]">
      <div className="col-start-2 pt-4">
        <span className="text-xl font-semibold">Products</span>
        <div className="grid grid-cols-6 gap-4 border min-h-max px-2 pt-4">
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </div>
      </div>
    </div>
  )
}

