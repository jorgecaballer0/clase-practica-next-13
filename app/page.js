import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  console.log(data);

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-blue-400">Pagina principal</h1>
      </div>
      <div>
        {data.slice(0, 10).map((tarea) => {
          return (
            <ol
              key={tarea.id}
              className="flex flex-col items-center justify-center"
            >
              <h1>Tarea N°: {tarea.id}</h1>
              <li
                className={
                  tarea.completed === true ? "text-green-500" : "text-red-700"
                }
              >
                <div className="flex items-center justify-center gap-4">
                  {tarea.title}
                  {tarea.completed === true ? (
                    <small className="text-xs rounded-sm">
                      ✅
                    </small>
                  ) : (
                    <small className="text-xs rounded-sm">
                      ❌
                    </small>
                  )}
                </div>
              </li>
            </ol>
          );
        })}
      </div>
      <Link href="/create" className="hover:text-cyan-400 mt-10">
        Ir a agregar tareas
      </Link>
    </div>
  );
}
