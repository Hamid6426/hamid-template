import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  try {
    await prisma.$connect();
    // Add seed data here
    await prisma.user.create({
      data: {
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
    });
    console.log('Database seeding successful!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();