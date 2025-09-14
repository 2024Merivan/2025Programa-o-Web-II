import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
 const result = await prisma.courses.delete({
 where: {
 id: "52c64599-794e-4a88-a00a-5c2a872c3d77",
 },
 });
 console.log(result);
}
main();