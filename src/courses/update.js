import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
 const result = await prisma.courses.update({
 where: {
 id: "833585cb-bbfa-45de-ae22-1015555b5b34",
 },
 data: {
 duration: 300,
 name: "Curso de React Native - v2",
 description: "Curso muito bom de React Native",
 },
 });
 console.log(result);
}
