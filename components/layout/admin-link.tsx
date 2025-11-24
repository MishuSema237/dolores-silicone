"use client";

import Link from "next/link";
import { FaUserSecret } from "react-icons/fa";

export function AdminLink() {
  return (
    <Link
      href="/admin/login"
      className="fixed bottom-4 right-4 bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 hover:scale-110 transition-all duration-300 z-40"
      aria-label="Admin Login"
      title="Admin Login"
    >
      <FaUserSecret className="text-xl" />
    </Link>
  );
}


