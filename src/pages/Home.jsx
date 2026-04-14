import products from "../data/products";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-green-900">
        <h1 className="text-xl font-bold text-green-400">EasyCred</h1>

        <nav className="hidden md:flex gap-6 text-gray-300">
          <a href="#">Home</a>
          <a href="/em-alta">Em Alta</a>
          <a href="/produtos">Produtos</a>
          <a href="/faq">FAQ</a>
        </nav>

        <a
          href="https://wa.me/5521965953570"
          className="bg-green-500 px-4 py-2 rounded-lg"
        >
          Suporte
        </a>
      </header>

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-400 leading-tight">
          Crédito Fácil <br />
          Dinheiro na Conta
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          Mesmo negativado • A partir de R$ 7,90
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#produtos"
            className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg font-bold shadow-lg shadow-green-500/30"
          >
            Ver Produtos
          </a>

          <a
            href="https://wa.me/5521965953570"
            className="border border-green-500 px-8 py-3 rounded-lg"
          >
            WhatsApp
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          +47 mil clientes • Entrega imediata • Garantia 7 dias
        </p>
      </section>

      {/* PRODUTOS */}
      <section id="produtos" className="px-6 pb-20">
        <h2 className="text-3xl text-center font-bold text-green-400">
          Produtos Mais Vendidos
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {products.map((p, i) => (
            <div
              key={p.id}
              className="relative border border-green-900 rounded-xl p-6 hover:scale-105 transition bg-gradient-to-b from-black to-gray-900 shadow-lg shadow-green-500/10"
            >

              {/* SELO */}
              {i === 0 && (
                <span className="absolute top-3 right-3 bg-green-500 text-black text-xs px-3 py-1 rounded-full">
                  Mais Vendido
                </span>
              )}

              {i === 5 && (
                <span className="absolute top-3 right-3 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
                  Oferta
                </span>
              )}

              <h3 className="text-xl font-bold text-green-400">
                {p.name}
              </h3>

              <p className="mt-2 text-gray-400 text-sm">
                {p.description}
              </p>

              <ul className="mt-4 text-sm text-gray-500 space-y-1">
                {p.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>

              <p className="mt-6 text-3xl font-bold">
                R$ {p.price}
              </p>

              <button
                onClick={() => comprar(p.id)}
                className="mt-4 w-full bg-green-500 py-3 rounded-lg font-bold hover:bg-green-600 shadow-lg shadow-green-500/30"
              >
                Comprar Agora
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-gray-900 py-16 px-6 text-center">
        <h2 className="text-3xl text-green-400 font-bold">
          Por Que Escolher EasyCred?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            "Conteúdo atualizado 2026",
            "Métodos testados",
            "Entrega automática",
            "Suporte via WhatsApp",
            "Garantia 7 dias",
            "Acesso imediato",
          ].map((item, i) => (
            <div
              key={i}
              className="border border-green-900 p-6 rounded-xl"
            >
              ✔ {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center py-16">
        <h2 className="text-3xl text-green-400 font-bold">
          Comece Hoje Mesmo
        </h2>

        <a
          href="#produtos"
          className="mt-6 inline-block bg-green-500 px-8 py-3 rounded-lg font-bold shadow-lg"
        >
          Ver Produtos
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-green-900 text-center py-6 text-gray-500">
        © 2026 EasyCred • Todos os direitos reservados
      </footer>

    </div>
  );
}

function comprar(productId) {
  const email = prompt("Digite seu e-mail:");
  if (!email) return;

  fetch("http://localhost:3000/create-payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId, email }),
  })
    .then((res) => res.json())
    .then((data) => {
      window.location.href = data.init_point;
    });
}