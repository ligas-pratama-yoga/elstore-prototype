import { Card, CardContent, CardFooter } from "./ui/card";

export default function CustomCard() {
  return (
    <a className="hover:cursor-pointer hover:brightness-90">
      <Card className="shadow-xl">
        <CardContent className="p-0 overflow-hidden">
          <img src="https://cf.shopee.co.id/file/sg-11134201-23010-k2kn00g0n5lvaa" className="border  rounded-t-xl" />
        </CardContent>
        <CardFooter className="flex flex-col w-full justify-normal items-start px-2">
          <div className="w-full flex justify-between items-center">
            <span className="text-xs">Tas Mixue Ori</span>
            <span className="text-[8px] text-yellow-500">70 terjual</span>
          </div>
          <span className="text-xs font-bold">Rp. 200.000</span>
          <span className="text-[8px]">Jakarta</span>
        </CardFooter>
      </Card>
    </a>
  )
}

