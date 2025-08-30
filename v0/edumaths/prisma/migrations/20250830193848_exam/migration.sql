/*
  Warnings:

  - The values [npx] on the enum `MemberStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."MemberStatus_new" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');
ALTER TABLE "public"."ClassMember" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "public"."ClassMember" ALTER COLUMN "status" TYPE "public"."MemberStatus_new" USING ("status"::text::"public"."MemberStatus_new");
ALTER TYPE "public"."MemberStatus" RENAME TO "MemberStatus_old";
ALTER TYPE "public"."MemberStatus_new" RENAME TO "MemberStatus";
DROP TYPE "public"."MemberStatus_old";
ALTER TABLE "public"."ClassMember" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- CreateTable
CREATE TABLE "public"."Question" (
    "id" TEXT NOT NULL,
    "questionText" TEXT NOT NULL,
    "optionA" TEXT NOT NULL,
    "optionB" TEXT NOT NULL,
    "optionC" TEXT NOT NULL,
    "optionD" TEXT NOT NULL,
    "correctOption" TEXT NOT NULL,
    "level" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "public"."Exam" (
    "id" TEXT NOT NULL,
    "classId" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "levelOfExam" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "public"."ExamQuestion" (
    "id" TEXT NOT NULL,
    "examId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "public"."Score" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "examId" TEXT NOT NULL,
    "score" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Question_id_key" ON "public"."Question"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Exam_id_key" ON "public"."Exam"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ExamQuestion_id_key" ON "public"."ExamQuestion"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Score_id_key" ON "public"."Score"("id");

-- AddForeignKey
ALTER TABLE "public"."Exam" ADD CONSTRAINT "Exam_classId_fkey" FOREIGN KEY ("classId") REFERENCES "public"."Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ExamQuestion" ADD CONSTRAINT "ExamQuestion_examId_fkey" FOREIGN KEY ("examId") REFERENCES "public"."Exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ExamQuestion" ADD CONSTRAINT "ExamQuestion_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "public"."Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Score" ADD CONSTRAINT "Score_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Score" ADD CONSTRAINT "Score_examId_fkey" FOREIGN KEY ("examId") REFERENCES "public"."Exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
