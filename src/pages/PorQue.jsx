export default function PorQue() {
  const itens = [
    "Conteúdo atualizado 2026",
    "Métodos testados e comprovados",
    "Entrega automática imediata",
    "Suporte via WhatsApp",
    "Garantia de 7 dias",
  ];

  return (
    <div className="bg-black text-white min-h-screen p-6 text-center">
      <h1 className="text-3xl text-green-400 font-bold">
        Por Que Escolher EasyCred?
      </h1>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {itens.map((item, i) => (
          <div
            key={i}
            className="border border-green-500 p-6 rounded-xl"
          >
            ✔ {item}
          </div>
        ))}
      </div>
    </div>
  );
}