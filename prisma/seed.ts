declare var process: any;
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();



async function main() {


    
    // const user1 = await prisma.user.create({
    //     data: {
    //         name: 'Rian',
    //         email: 'rian@example.com',
    //         password: 'rian1234',
    //         role: "ADMIN",
    //     },
    // });

    // const user2 = await prisma.user.create({
    //     data: {
    //         name: 'Jane Smith',
    //         email: 'jane.smith@example.com',
    //         password: 'jane1234',
    //         role: "USER",
    //     },
    // });

    // Seed Posts
   const post1= await prisma.post.createMany({
        data: [
            {
                title: 'Post 1',
                content: 'Content of Post 1',
                published: true,
                authorId: 1,
            },
            {
                title: 'Post 2',
                content: 'Content of Post 2',
                published: false,
                authorId: 2,
            },
        ],
    });

    // Seed Portfolio
    const post2=  await prisma.portfolio.createMany({
        data: [
            {
                title: 'Portfolio 1',
                description: 'Description of Portfolio 1',
                imageUrl: 'url_to_portfolio_image_1',
                userId: 1,
            },
            {
                title: 'Portfolio 2',
                description: 'Description of Portfolio 2',
                imageUrl: 'url_to_portfolio_image_2',
                userId: 2,
            },
        ],
    });

    // Seed Uploads
    const post3= await prisma.upload.createMany({
        data: [
            {
                image: 'url_to_image_1',
                path: 'path_to_image_1',
                createdby: 1
            },
            {
                image: 'url_to_image_2',
                path: 'path_to_image_2',
                createdby: 1,
            },
        ],
    });
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
