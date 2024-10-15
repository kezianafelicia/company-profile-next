interface ICards {
  Icon?: React.ComponentType<{ size: number; className: string; style: React.CSSProperties }>;
  imageUrl?: string;
  title: string;
  price?: string;
  description: string[];
}

export default function Cards(props: ICards) {
  return (
    <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
      {props.Icon && (
        <props.Icon
          size={100}
          className="w-20 mx-auto mt-[-4rem] p-4 rounded-full bg-white"
          style={{ color: '#493628' }}
        />
      )}

      {props.imageUrl && (
        <img
          src={props.imageUrl}
          alt={props.title}
          className="bg-cover bg-center bg-no-repeat mx-auto w-[250px] h-auto rounded-md"
        />
      )}

      <h2 className="text-2xl font-bold text-center py-8 ">{props.title}</h2>
      {props.price && <p className="text-center text-4xl font-bold">{props.price}</p>}
      <div className="text-center font-medium">
        {props.description.map((desc, index) => (
          <p key={index} className="py-1 border-b mx-4 mt-1">{desc}</p>
        ))}
      </div>
    </div>
  );
}
