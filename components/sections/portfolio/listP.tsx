import CardP from "@/components/assets/cardP";

export default function ListP() {

   const arr = [1, 2, 3, 4, 5, 6];
   return (
      <>
         <div className="grid grid-cols-2 gap-12">
            {arr.map((item) => (
               <CardP key={item}/>
            ))}
         </div>
      </>
   )
}