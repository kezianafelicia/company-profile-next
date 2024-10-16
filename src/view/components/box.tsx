
interface IBox {
  title: string;
  heading: string;
  content: string;
  imageUrl: string;
}

export default function Box(props: IBox) {
  return (
    <div className=" bgw-full shadow-xl flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300 bg-[#fbf1ef] text-[#3B3030] border-2 border-[#f8c4c0] mx-5">
      <div className="flex flex-col items-center border-b-2 border-[#ff9389] py-5">
        <h1 className="text-3xl font-bold text-[#493628]">{props.title}</h1>
      </div>
    <div>
    <h3 className=" items-center text-lg text-center pt-5 font-lg text-[#493628] ">{props.heading}</h3>
    </div>

      <div className="flex flex-row items-center">
        <div className="flex-1 p-4">
          <p className="font-light">{props.content}</p>
        </div>
        <img
          src={props.imageUrl}
          alt={props.title}
          className="w-auto h-40 rounded-lg"
        />
      </div>
    </div>
  );
}
