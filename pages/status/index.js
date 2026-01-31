import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  const response = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  return (
    <div>
      <h1> Status</h1>
      <pre>{JSON.stringify(response.data, null, 2)}</pre>
      <UpdatedAt />
    </div>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let updatedText = "Carregando...";
  let versionText = "Carregando...";
  let maxConnections = "Carregando...";
  let openConnections = "Carregando...";

  if (!isLoading && data) {
    updatedText = new Date(data.updated_at).toLocaleString("pt-BR");
    versionText = data.dependencies.database.version;
    maxConnections = data.dependencies.database.max_connections;
    openConnections = data.dependencies.database.opened_connections;
  }

  return (
    <>
      <div>Última atualização: {updatedText}</div>
      <div>Versão: {versionText}</div>
      <div>Conexões máximas: {maxConnections}</div>
      <div>Conexões abertas: {openConnections}</div>
    </>
  );
}
