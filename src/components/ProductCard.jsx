function comprar(productId) {
  const email = prompt("Digite seu e-mail para receber o material:");
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
      if (data.init_point) {
        window.location.href = data.init_point;
      } else {
        alert("Erro ao iniciar pagamento.");
      }
    })
    .catch(() => {
      alert("Erro ao conectar com o backend.");
    });
}