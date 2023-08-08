import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

interface Type {
  title: string;
  description: string;
  imageUrl: string
}

export default async function Blog(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient();
  try {
    if (req.method === 'GET') {
      const idBlog = req.query.id;
      let data;
      !idBlog ?
        data = await prisma.portfolio.findMany()
        :
        data = await prisma.portfolio.findUnique({
          where: {
            id: parseInt(idBlog as string)
          }
        });
      res.json({ 'data': data })
    }
    else if (req.method === 'POST') {
      const { title, description, imageUrl }: Type = req.body;
      const port = await prisma.portfolio.create({
        data: {
          title,
          description,
          imageUrl,
          userId: 1
        }
      });
      res.status(201).json({ 'data': port })
    }
    else if (req.method === "DELETE") {
      const idBlog = req.query.id;

      const cekIdBlog = await prisma.portfolio.findUnique({
        where: {
          id: parseInt(idBlog as string)
        }
      })

      if (!cekIdBlog) {
        res.status(404).json({ messager: 'blog not found' });
        return;
      }

      const port = await prisma.portfolio.delete(
        {
          where: {
            id: parseInt(idBlog as string)
          }
        }
      )
      res.status(200).json({ message: 'berhasi menghapus id ke' + idBlog })
    }
    else if (req.method === "PUT") {
      const idBlog = req.query.id;
      const { title, description, imageUrl }: Type = req.body;
      const updateBlog = await prisma.portfolio.update({
        where: { id: parseInt(idBlog as string) },
        data: {
          title,
          description,
          imageUrl
        },
      })
      res.status(200).json({ berhasil: updateBlog })
    }
  } catch (error) {
    res.status(500).json({ message: 'error in server cek in console' })
    console.log('messege : ', error);
  }
}