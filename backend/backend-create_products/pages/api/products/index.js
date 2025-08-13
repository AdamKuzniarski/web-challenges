import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();

    response.status(200).json(products);
    return;
  }

  if (request.method === "POST") {
    const productsData = request.body;
    await Product.create(productsData);

    return response.status(201).json({ status: "New Product Created." });
  }

  response.status(405).json({ status: "Method not allowed." });
}
