"use client";

import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Q2 Marketing Campaign",
    description: "Blog posts, social media content, and email sequences for Q2 product launch.",
    items: 24,
    lastEdited: "2 hours ago",
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Product Descriptions",
    description: "E-commerce product copy for the new summer collection.",
    items: 48,
    lastEdited: "Yesterday",
    color: "bg-purple-500",
  },
  {
    id: 3,
    name: "Newsletter Archive",
    description: "Weekly newsletter drafts and templates.",
    items: 16,
    lastEdited: "3 days ago",
    color: "bg-green-500",
  },
  {
    id: 4,
    name: "Website Redesign",
    description: "Copy for landing pages, about page, and feature descriptions.",
    items: 12,
    lastEdited: "1 week ago",
    color: "bg-orange-500",
  },
  {
    id: 5,
    name: "Social Media Kit",
    description: "Instagram, Twitter, and LinkedIn post templates.",
    items: 36,
    lastEdited: "2 weeks ago",
    color: "bg-pink-500",
  },
  {
    id: 6,
    name: "Customer Stories",
    description: "Case studies and testimonials from top clients.",
    items: 8,
    lastEdited: "3 weeks ago",
    color: "bg-teal-500",
  },
];

export default function ProjectsPage() {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Organize your generated content into projects.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex rounded-lg border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setView("grid")}
              className={`rounded-l-lg px-3 py-1.5 text-sm ${
                view === "grid" ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white" : "text-gray-500 dark:text-gray-400"
              }`}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
            </button>
            <button
              onClick={() => setView("list")}
              className={`rounded-r-lg px-3 py-1.5 text-sm ${
                view === "list" ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white" : "text-gray-500 dark:text-gray-400"
              }`}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
              </svg>
            </button>
          </div>
          <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition-colors">
            + New Project
          </button>
        </div>
      </div>

      {view === "grid" ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-800"
            >
              <div className="flex items-start justify-between">
                <div className={`h-3 w-3 rounded-full ${project.color}`} />
                <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </button>
              </div>
              <h3 className="mt-3 text-base font-semibold text-gray-900 dark:text-white">{project.name}</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{project.description}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-gray-400 dark:text-gray-500">
                <span>{project.items} items</span>
                <span>{project.lastEdited}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {projects.map((project) => (
              <div key={project.id} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`h-3 w-3 rounded-full ${project.color}`} />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{project.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{project.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-xs text-gray-400 dark:text-gray-500">
                  <span>{project.items} items</span>
                  <span>{project.lastEdited}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
