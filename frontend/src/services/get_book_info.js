const API_KEY = import.meta.env.VITE_HARDCOVER_API_KEY

export const getMyBooks = async () => {

    const operationsDoc = `
    query Test {
        me {
        username
        email
        user_books(
            where: {status_id: {_eq: 3}}
            order_by: {last_read_date: desc_nulls_last}
        ) {
            status_id
            last_read_date
            book {
            title
            pages
            image {
                url
            }
                cached_contributors
            }
        }
        }
    }
    `;
    const result = await fetch(
    "https://cors-anywhere.herokuapp.com/https://api.hardcover.app/v1/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        query: operationsDoc
      })
    }
  );

  return await result.json();
}

