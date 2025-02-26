"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import courseData from "@/data/music_courses.json";

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image: string
}

function AllCourses() {
    return (
        <div className="min-h-screen bg-black py-32">
            <h1 className="text-lg md:text-7xl text-center font-sans font-bold text-white">All Courses ({courseData.courses.length})</h1>
            <div className="flex flex-wrap justify-center">
                {courseData.courses.map((course: Course) => (
                    <CardContainer key={course.id} className="inter-var mx-4">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white border-black w-auto sm:w-[30rem] h-auto rounded-xl p-8 border">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-200 dark:text-white"
                            >
                                {course.title}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-200 text-base max-w-sm mt-2 dark:text-neutral-200"
                            >
                                {course.description}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={course.image}
                                    height="1000"
                                    width="1000"
                                    className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt={course.title}
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-4">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    className="px-4 py-2 cursor-pointer rounded-xl text-base font-normal dark:text-white"
                                >
                                    Try now →
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 cursor-pointer rounded-xl bg-black dark:bg-white dark:text-black text-white text-base font-bold"
                                >
                                    Sign up
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    )
}

export default AllCourses;