"use client";

import React, { useMemo, useEffect, useState } from "react";
import Card from "../components/Card";
import { useRouter, useSearchParams } from "next/navigation";

interface CardItem {
    title: string;
    content: string;
    link: {
        url: string;
    };
    type: string[];
    image: string;
}

interface ProjectsListProps {
    projects: CardItem[];
}

const ProjectsList = ({ projects }: ProjectsListProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialType = searchParams.get("type") || "All";
    const [activeFilter, setActiveFilter] = useState(initialType);

    useEffect(() => {
        const type = searchParams.get("type");
        if (type) {
            setActiveFilter(type);
        } else {
            setActiveFilter("All");
        }
    }, [searchParams]);

    const filters = useMemo(() => {
        const allTypes = projects.flatMap((project) => project.type);
        const uniqueTypes = Array.from(new Set(allTypes));
        return ["All", ...uniqueTypes];
    }, [projects]);

    const filteredProjects = useMemo(() => {
        if (activeFilter === "All") {
            return projects;
        }
        return projects.filter((project) => project.type.includes(activeFilter));
    }, [projects, activeFilter]);

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter);
        if (filter === "All") {
            router.push("/projects", { scroll: false });
        } else {
            router.push(`/projects?type=${filter}`, { scroll: false });
        }
    };

    return (
        <div className='mt-16 sm:mt-20'>
            <div className='flex flex-wrap justify-center gap-4 mb-12'>
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => handleFilterChange(filter)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
              ${activeFilter === filter
                                ? "bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg scale-105"
                                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <ul className='grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3'>
                {filteredProjects.map((item: CardItem, i: number) => (
                    <Card
                        key={i}
                        id={i}
                        title={item.title}
                        content={item.content}
                        link={item.link.url}
                        type={item.type}
                        image={item.image}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ProjectsList;
