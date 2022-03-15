async function FetchFromAPI(endpoint) {
  try {
    const response = await fetch(endpoint);
    return await response.json();
  } catch (err) {
    console.log("Error Calling API", err);
    return [];
  }
}

export default FetchFromAPI;
