export const getProducts = () => fetch('http://backend:4000/').then(res => res.json());

export const createProduct = (data) => fetch("http://backend:4000/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  
  body: JSON.stringify(data)
}); 

export const getProduct = (id) => fetch(`http://backend:4000/${id}`).then(res => res.json())

export const updateProduct = (data, id) => fetch(`http://backend:4000/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
}) 