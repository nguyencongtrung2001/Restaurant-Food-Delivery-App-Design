import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server"

const prisma = new PrismaClient()

export const GET  = async(req:NextRequest) => {
    const {searchParams} = new URL(req.url);
    const cat = searchParams.get("cat");

    try{
       const products = await prisma.product.findMany({
        where: cat ? {catSlug:cat}:{}
       })
     
       return NextResponse.json(products, {status:200})
    }catch(error){
        console.log("Error fetching products:",error);
        return new NextResponse(JSON.stringify(
            {message:"Something went wrong"}),
            {status:500})
    }finally{
        await prisma.$disconnect();
    }
}