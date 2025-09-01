"use client"
import React from 'react'
import { useSession } from "next-auth/react";
import {v4 as uuidv4} from 'uuid'
import { createExam, getClassIdByTeacherId } from '@/lib/actions/userActions';




const ExamScheduller = () => {
    const { data: session } = useSession();
    const [form, setForm] = React.useState({
    levelOfExam: '',
    startTime: '',
    endTime: ''
});

const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]:e.target.value,
    });
};

const handleSubmit = async (e)=>{
    e.preventDefault();
    
    console.log('Form submitted:-', form);

    try {
        const classId = await getClassIdByTeacherId(session.user.id);
            
            if (!classId) {
                alert('No class found. Please create a class first.');
                return;
            }
        const examData ={
            id: uuidv4(),
            classId: classId,
            levelOfExam: form.levelOfExam,
            startTime: new Date(form.startTime), // Convert to Date object
            endTime: new Date(form.endTime)

        }

        const result = await createExam(examData);
        if (result) {
            alert('Exam created successfully');
            console.log('Exam created successfully:', result);
        }

    } catch (error) {
        console.error('Error scheduling exam:', error);
        alert('Failed to schedule exam. Please try again.');
    }
}

return (
    <div className="bg-white rounded-lg shadow-sm p-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Schedule an Exam</h2>
        <p className="text-gray-600 mb-6">Fill out the form below to schedule an exam.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
                <label className="block font-medium text-gray-700 mb-2">Exam Level</label>
                <div className="flex gap-6">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="levelOfExam"
                            value="Easy"
                            checked={form.levelOfExam === "Easy"}
                            onChange={handleChange}
                            required
                            className="accent-indigo-600"
                        />
                        <span className="text-gray-700">Easy</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="levelOfExam"
                            value="Moderate"
                            checked={form.levelOfExam === "Moderate"}
                            onChange={handleChange}
                            required
                            className="accent-purple-600"
                        />
                        <span className="text-gray-700">Moderate</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="levelOfExam"
                            value="Hard"
                            checked={form.levelOfExam === "Hard"}
                            onChange={handleChange}
                            required
                            className="accent-pink-600"
                        />
                        <span className="text-gray-700">Hard</span>
                    </label>
                </div>
            </div>
            <div>
                <label className="block font-medium text-gray-700 mb-2">Start Date &amp; Time</label>
                <input
                    type="datetime-local"
                    name="startTime"
                    className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    value={form.startTime}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label className="block font-medium text-gray-700 mb-2">End Date &amp; Time</label>
                <input
                    type="datetime-local"
                    name="endTime"
                    className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    value={form.endTime}
                    onChange={handleChange}
                />
            </div>
            <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200"
            >
                Schedule Exam
            </button>
        </form>
    </div>
)
}

export default ExamScheduller
