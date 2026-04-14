import { useEffect, useState } from "react";

export default function Sucesso() {
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [status, setStatus] = useState("Verificando pagamento...");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("external_reference");

    if (!ref) return;

    fetch(`http://localhost:3000/order/by-reference/${ref}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "approved") {
          setStatus("Pagamento aprovado!");
          setDownloadUrl(data.download_url);
        } else {
          setStatus("Aguardando confirmação...");
        }
      });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-3xl text-green-400 font-bold">{status}</h1>

      {downloadUrl && (
        <a
          href={downloadUrl}
          className="mt-6 bg-green-500 px-6 py-3 rounded-lg"
        >
          Baixar Material
        </a>
      )}

      <a
        href="https://wa.me/5521965953570"
        className="mt-4 text-green-400"
      >
        Precisa de ajuda? Fale no WhatsApp
      </a>
    </div>
  );
}