import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

interface Type {
  title: string;
  content: string;
  published: boolean;
}

export default async function Blog(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient();
  try {
    if (req.method === 'GET') {
      const idBlog = req.query.id;
      let data;
      !idBlog ?
        data = await prisma.post.findMany()
        :
        data = await prisma.post.findUnique({
          where: {
            id: parseInt(idBlog as string)
          }
        });
      res.json({ 'data': data })
    }
    else if (req.method === 'POST') {
      const { title, content, published }: Type = req.body;
      const post = await prisma.post.create({
        data: {
          title,
          content,
          published,
          authorId: 1
        }
      });
      res.status(201).json({ 'data': post })
    }
    else if (req.method === "DELETE") {
      const idBlog = req.query.id;

      const cekIdBlog = await prisma.post.findUnique({
        where: {
          id: parseInt(idBlog as string)
        }
      })

      if (!cekIdBlog) {
        res.status(404).json({ messager: 'blog not found' });
        return;
      }

      const post = await prisma.post.delete(
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
      const { title, content, published }: Type = req.body;
      const updateBlog = await prisma.post.update({
        where: { id: parseInt(idBlog as string) },
        data: {
          title,
          content,
          published
        },
      })
      res.status(200).json({ berhasil: updateBlog })
    }
  } catch (error) {
    res.status(500).json({ message: 'error in server cek in console' })
    console.log('messege : ', error);
  }
}