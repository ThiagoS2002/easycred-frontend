export default function FAQ() {
  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h1 className="text-3xl text-green-400 text-center font-bold">
        Perguntas Frequentes
      </h1>

      <div className="mt-10 space-y-6 max-w-2xl mx-auto">

        <div>
          <h2 className="font-bold">Como recebo o produto?</h2>
          <p className="text-gray-400">
            Após o pagamento, você recebe acesso imediato.
          </p>
        </div>

        <div>
          <h2 className="font-bold">Funciona mesmo negativado?</h2>
          <p className="text-gray-400">
            Sim, os métodos são voltados para quem está negativado.
          </p>
        </div>

        <div>
          <h2 className="font-bold">Tem garantia?</h2>
          <p className="text-gray-400">
            Sim, 7 dias de garantia.
          </p>
        </div>

      </div>
    </div>
  );
}