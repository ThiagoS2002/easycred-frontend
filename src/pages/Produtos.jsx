import products from "../data/products";

export default function Produtos() {
  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h1 className="text-3xl text-green-400 text-center font-bold">
        Todos os Produtos
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {products.map((p) => (
          <div className="border border-green-500 p-6 rounded-xl">
            <h2 className="text-xl text-green-400 font-bold">{p.name}</h2>
            <p className="text-gray-300 mt-2">{p.description}</p>

            <ul className="mt-3 text-sm text-gray-400">
              {p.features?.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>

            <p className="text-2xl font-bold mt-4">R$ {p.price}</p>

            <button
              onClick={() => comprar(p.id)}
              className="mt-4 w-full bg-green-500 py-3 rounded-lg"
            >
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function comprar(productId) {
  const email = prompt("Digite seu e-mail:");
  if (!email) return;

  fetch("http://localhost:3000/create-payment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId, email }),
  })
    .then((res) => res.json())
    .then((data) => (window.location.href = data.init_point));
}