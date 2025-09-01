const { PrismaClient } = require('@prisma/client');
const { v4: uuidv4 } = require('uuid');

const prisma = new PrismaClient();

const questions = [
  // Easy Questions (1-10)
  { questionText: '2 + 5 = ?', optionA: '6', optionB: '7', optionC: '8', optionD: '9', correctOption: 'B', level: 'easy' },
  { questionText: '9 - 4 = ?', optionA: '5', optionB: '4', optionC: '6', optionD: '3', correctOption: 'A', level: 'easy' },
  { questionText: '6 + 3 = ?', optionA: '8', optionB: '10', optionC: '9', optionD: '7', correctOption: 'C', level: 'easy' },
  { questionText: '8 - 5 = ?', optionA: '2', optionB: '3', optionC: '4', optionD: '5', correctOption: 'B', level: 'easy' },
  { questionText: '1 + 7 = ?', optionA: '6', optionB: '8', optionC: '7', optionD: '9', correctOption: 'B', level: 'easy' },
  { questionText: '7 - 2 = ?', optionA: '4', optionB: '5', optionC: '6', optionD: '3', correctOption: 'B', level: 'easy' },
  { questionText: '3 + 4 = ?', optionA: '6', optionB: '8', optionC: '7', optionD: '9', correctOption: 'C', level: 'easy' },
  { questionText: '10 - 6 = ?', optionA: '3', optionB: '4', optionC: '5', optionD: '6', correctOption: 'B', level: 'easy' },
  { questionText: '2 + 6 = ?', optionA: '7', optionB: '8', optionC: '9', optionD: '10', correctOption: 'B', level: 'easy' },
  { questionText: '8 - 3 = ?', optionA: '4', optionB: '5', optionC: '6', optionD: '3', correctOption: 'B', level: 'easy' },
  
  // Easy Questions (11-20)
  { questionText: '4 + 5 = ?', optionA: '8', optionB: '9', optionC: '10', optionD: '7', correctOption: 'B', level: 'easy' },
  { questionText: '7 + 1 = ?', optionA: '6', optionB: '7', optionC: '8', optionD: '9', correctOption: 'C', level: 'easy' },
  { questionText: '6 - 2 = ?', optionA: '3', optionB: '4', optionC: '5', optionD: '2', correctOption: 'B', level: 'easy' },
  { questionText: '5 + 4 = ?', optionA: '8', optionB: '9', optionC: '10', optionD: '7', correctOption: 'B', level: 'easy' },
  { questionText: '9 - 2 = ?', optionA: '6', optionB: '7', optionC: '8', optionD: '5', correctOption: 'B', level: 'easy' },
  { questionText: '3 + 5 = ?', optionA: '7', optionB: '8', optionC: '9', optionD: '6', correctOption: 'B', level: 'easy' },
  { questionText: '1 + 8 = ?', optionA: '7', optionB: '8', optionC: '9', optionD: '10', correctOption: 'C', level: 'easy' },
  { questionText: '8 - 6 = ?', optionA: '1', optionB: '2', optionC: '3', optionD: '4', correctOption: 'B', level: 'easy' },
  { questionText: '4 + 3 = ?', optionA: '6', optionB: '7', optionC: '8', optionD: '9', correctOption: 'B', level: 'easy' },
  { questionText: '7 - 3 = ?', optionA: '3', optionB: '4', optionC: '5', optionD: '2', correctOption: 'B', level: 'easy' },
  
  // Easy Questions (21-30)
  { questionText: '5 + 2 = ?', optionA: '6', optionB: '7', optionC: '8', optionD: '9', correctOption: 'B', level: 'easy' },
  { questionText: '6 - 4 = ?', optionA: '1', optionB: '2', optionC: '3', optionD: '4', correctOption: 'B', level: 'easy' },
  { questionText: '1 + 6 = ?', optionA: '6', optionB: '7', optionC: '8', optionD: '5', correctOption: 'B', level: 'easy' },
  { questionText: '9 - 8 = ?', optionA: '1', optionB: '2', optionC: '3', optionD: '4', correctOption: 'A', level: 'easy' },
  { questionText: '2 + 7 = ?', optionA: '8', optionB: '9', optionC: '10', optionD: '7', correctOption: 'B', level: 'easy' },
  { questionText: '4 - 1 = ?', optionA: '2', optionB: '3', optionC: '4', optionD: '5', correctOption: 'B', level: 'easy' },
  { questionText: '3 + 6 = ?', optionA: '8', optionB: '9', optionC: '10', optionD: '7', correctOption: 'B', level: 'easy' },
  { questionText: '8 - 7 = ?', optionA: '0', optionB: '1', optionC: '2', optionD: '3', correctOption: 'B', level: 'easy' },
  { questionText: '1 + 5 = ?', optionA: '5', optionB: '6', optionC: '7', optionD: '8', correctOption: 'B', level: 'easy' },
  { questionText: '9 - 6 = ?', optionA: '2', optionB: '3', optionC: '4', optionD: '5', correctOption: 'B', level: 'easy' },
  
  // Easy Questions (31-40)
  { questionText: '5 + 3 - 2 = ?', optionA: '5', optionB: '6', optionC: '7', optionD: '4', correctOption: 'B', level: 'easy' },
  { questionText: '8 - 5 + 1 = ?', optionA: '3', optionB: '4', optionC: '2', optionD: '5', correctOption: 'B', level: 'easy' },
  { questionText: '2 + 6 - 3 = ?', optionA: '4', optionB: '5', optionC: '6', optionD: '3', correctOption: 'B', level: 'easy' },
  { questionText: '9 - 7 + 5 = ?', optionA: '6', optionB: '7', optionC: '5', optionD: '8', correctOption: 'B', level: 'easy' },
  { questionText: '1 + 4 + 3 = ?', optionA: '7', optionB: '8', optionC: '6', optionD: '9', correctOption: 'B', level: 'easy' },
  { questionText: '7 - 4 + 2 = ?', optionA: '3', optionB: '4', optionC: '5', optionD: '6', correctOption: 'C', level: 'easy' },
  { questionText: '6 + 2 - 5 = ?', optionA: '2', optionB: '3', optionC: '4', optionD: '1', correctOption: 'B', level: 'easy' },
  { questionText: '8 - 2 - 3 = ?', optionA: '2', optionB: '3', optionC: '4', optionD: '5', correctOption: 'B', level: 'easy' },
  { questionText: '3 + 5 - 4 = ?', optionA: '3', optionB: '4', optionC: '5', optionD: '2', correctOption: 'B', level: 'easy' },
  { questionText: '9 - 1 - 6 = ?', optionA: '1', optionB: '2', optionC: '3', optionD: '4', correctOption: 'B', level: 'easy' },
  
  // Easy Questions (41-50)
  { questionText: '4 + 1 + 2 = ?', optionA: '6', optionB: '7', optionC: '8', optionD: '5', correctOption: 'B', level: 'easy' },
  { questionText: '5 - 3 + 4 = ?', optionA: '5', optionB: '6', optionC: '7', optionD: '8', correctOption: 'B', level: 'easy' },
  { questionText: '2 + 2 + 5 = ?', optionA: '8', optionB: '9', optionC: '10', optionD: '7', correctOption: 'B', level: 'easy' },
  { questionText: '10 - 5 - 3 = ?', optionA: '1', optionB: '2', optionC: '3', optionD: '4', correctOption: 'B', level: 'easy' },
  { questionText: '6 + 1 - 4 = ?', optionA: '2', optionB: '3', optionC: '4', optionD: '5', correctOption: 'B', level: 'easy' },
  { questionText: '7 - 6 + 8 = ?', optionA: '8', optionB: '9', optionC: '7', optionD: '10', correctOption: 'B', level: 'easy' },
  { questionText: '3 + 2 - 1 = ?', optionA: '3', optionB: '4', optionC: '5', optionD: '2', correctOption: 'B', level: 'easy' },
  { questionText: '5 + 1 - 6 = ?', optionA: '0', optionB: '1', optionC: '2', optionD: '3', correctOption: 'A', level: 'easy' },
  { questionText: '8 - 4 + 3 = ?', optionA: '6', optionB: '7', optionC: '8', optionD: '5', correctOption: 'B', level: 'easy' },
  { questionText: '9 - 3 + 2 = ?', optionA: '7', optionB: '8', optionC: '9', optionD: '6', correctOption: 'B', level: 'easy' }
];

async function main() {
  console.log(`Start seeding ...`);
  for (const q of questions) {
    const question = await prisma.question.create({
      data: {
        id: uuidv4(),
        ...q,
      },
    });
    console.log(`Created question with id: ${question.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
